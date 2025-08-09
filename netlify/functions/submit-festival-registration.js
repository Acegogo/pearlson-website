/**
 * Festival Registration Netlify Function
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Cloud project, enable Google Sheets API.
 * 2. Create a service account, generate a JSON key.
 * 3. Preferred: set two env vars in Netlify → GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY
 *    (paste the private key with literal newlines, or replace \n with real newlines). Fallback: base64
 *    the entire JSON and set GOOGLE_SHEETS_CREDENTIALS (not recommended due to 4KB limits).
 * 4. Create a Google Sheet for festival registrations, share it with the service account email.
 * 5. Add the sheet ID as a Netlify environment variable: FESTIVAL_SHEET_ID
 * 6. Install google-spreadsheet: npm install google-spreadsheet
 *
 * The sheet should have columns: Timestamp, School Name, Contact Person, Email, Phone, Transaction Code, Category
 */

// Support both named and default exports across library versions
const googleSpreadsheetModule = require('google-spreadsheet');
const GoogleSpreadsheet = googleSpreadsheetModule.GoogleSpreadsheet || googleSpreadsheetModule.default || googleSpreadsheetModule;

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

// Resolve service account credentials from smaller env vars or fallback to base64 JSON
function getServiceAccountCreds() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (email && privateKeyRaw) {
    const private_key = privateKeyRaw.replace(/\\n/g, '\n');
    return { client_email: email, private_key };
  }
  const b64 = process.env.GOOGLE_SHEETS_CREDENTIALS;
  if (b64) {
    try {
      const decoded = Buffer.from(b64, 'base64').toString('utf8');
      const parsed = JSON.parse(decoded);
      return { client_email: parsed.client_email, private_key: parsed.private_key };
    } catch (_) {
      return null;
    }
  }
  return null;
}

exports.handler = async function(event) {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers: corsHeaders,
      body: 'Method Not Allowed' 
    };
  }

  try {
    // Check if environment variables are set
    if (!process.env.FESTIVAL_SHEET_ID) {
      console.error('FESTIVAL_SHEET_ID environment variable is not set');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Server configuration error: Google Sheet ID not configured',
          details: 'Please check that FESTIVAL_SHEET_ID environment variable is set in Netlify',
          testMode: true
        })
      };
    }

    // For testing purposes, if the data contains a test flag, return success without Google Sheets
    const data = JSON.parse(event.body);
    if (data.test) {
      console.log('Test mode: returning success without Google Sheets integration');
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ 
          success: true, 
          message: 'Test mode - function is working but Google Sheets not configured',
          receivedData: data
        })
      };
    }

    console.log('Resolving Google service account credentials...');
    const creds = getServiceAccountCreds();
    if (!creds || !creds.client_email || !creds.private_key) {
      console.error('Service account credentials not found or incomplete');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          error: 'Server configuration error: Google Sheets credentials not configured',
          details: 'Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY (preferred) or GOOGLE_SHEETS_CREDENTIALS (base64 JSON).',
          testMode: true
        })
      };
    }

    console.log('Initializing Google Spreadsheet...');
    const doc = new GoogleSpreadsheet(process.env.FESTIVAL_SHEET_ID);
    const libVersion = (() => { try { return require('google-spreadsheet/package.json').version; } catch { return 'unknown'; } })();
    console.log('google-spreadsheet version:', libVersion);
    if (typeof doc.useServiceAccountAuth !== 'function') {
      throw new Error('google-spreadsheet auth method not found on instance (useServiceAccountAuth).');
    }
    await doc.useServiceAccountAuth(creds);
    console.log('Authentication successful');
    
    await doc.loadInfo();
    console.log('Document loaded successfully');
    const sheet = doc.sheetsByIndex[0];

    console.log('Received data:', JSON.stringify(data, null, 2));
    
    // Basic validation (backend)
    if (!data.schoolName || !data.contactPerson || !data.email || !data.phone || !data.transactionCode || !data.categories || !data.categories.length) {
      return { 
        statusCode: 400, 
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing required fields.' }) 
      };
    }

    console.log('Adding row to sheet...');
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      'School Name': data.schoolName,
      'Contact Person': data.contactPerson,
      Email: data.email,
      Phone: data.phone,
      'Transaction Code': data.transactionCode,
      'Categories': data.categories.join(', '),
    });
    console.log('Row added successfully');

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Error in festival registration function:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        error: err.message || 'Internal Server Error',
        details: 'Please check the server logs for more information'
      })
    };
  }
}; 