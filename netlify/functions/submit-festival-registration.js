/**
 * Festival Registration Netlify Function
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Cloud project, enable Google Sheets API.
 * 2. Create a service account, generate a JSON key, and base64-encode it.
 * 3. Add the base64-encoded JSON as a Netlify environment variable: GOOGLE_SHEETS_CREDENTIALS
 * 4. Create a Google Sheet for festival registrations, share it with the service account email.
 * 5. Add the sheet ID as a Netlify environment variable: FESTIVAL_SHEET_ID
 * 6. Install google-spreadsheet: npm install google-spreadsheet
 *
 * The sheet should have columns: Timestamp, School Name, Contact Person, Email, Phone, Transaction Code, Category
 */

const { GoogleSpreadsheet } = require('google-spreadsheet');

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

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
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS) {
      console.error('GOOGLE_SHEETS_CREDENTIALS environment variable is not set');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Server configuration error: Google Sheets credentials not configured',
          details: 'Please check that GOOGLE_SHEETS_CREDENTIALS environment variable is set in Netlify',
          testMode: true
        })
      };
    }

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

    console.log('Environment variables found, attempting to parse credentials...');
    
    let creds;
    try {
      creds = JSON.parse(Buffer.from(process.env.GOOGLE_SHEETS_CREDENTIALS, 'base64').toString('utf8'));
      console.log('Credentials parsed successfully');
    } catch (parseError) {
      console.error('Error parsing credentials:', parseError);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Invalid Google Sheets credentials format',
          details: 'Please check that GOOGLE_SHEETS_CREDENTIALS is properly base64 encoded'
        })
      };
    }

    console.log('Initializing Google Spreadsheet...');
    const doc = new GoogleSpreadsheet(process.env.FESTIVAL_SHEET_ID);
    
    // v4+ authentication
    await doc.useServiceAccountAuth(creds);
    console.log('Authentication successful');
    
    await doc.loadInfo();
    console.log('Document loaded successfully');
    const sheet = doc.sheetsByIndex[0];

    console.log('Received data:', JSON.stringify(data, null, 2));
    
    // Basic validation (backend)
    if (!data.schoolName || !data.contactPerson || !data.email || !data.phone || !data.transactionCode || !data.category) {
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
      Category: data.category,
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