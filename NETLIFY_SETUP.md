# Netlify Functions Setup Guide

This guide will help you set up the Netlify functions for the registration forms to work with Google Sheets.

## Prerequisites

1. A Google Cloud Project
2. Google Sheets API enabled
3. A Google Service Account
4. Two Google Sheets (one for courses, one for festival registrations)

## Step 1: Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"
6. Click on the created service account
7. Go to the "Keys" tab
8. Click "Add Key" > "Create New Key"
9. Choose "JSON" format
10. Download the JSON file

## Step 3: Create Google Sheets

### Courses Registration Sheet
1. Create a new Google Sheet
2. Add these columns in the first row:
   - Timestamp
   - School Name
   - Contact Person
   - Email
   - Phone
   - Number of Learners
   - Languages
   - Services
3. Share the sheet with the service account email (found in the JSON file)
4. Copy the Sheet ID from the URL (the long string between /d/ and /edit)

### Festival Registration Sheet
1. Create another Google Sheet
2. Add these columns in the first row:
   - Timestamp
   - School Name
   - Contact Person
   - Email
   - Phone
   - Transaction Code
   - Category
3. Share the sheet with the service account email
4. Copy the Sheet ID from the URL

## Step 4: Encode Service Account JSON

1. Open the downloaded JSON file
2. Copy the entire content
3. Go to [Base64 Encoder](https://www.base64encode.org/)
4. Paste the JSON content and encode it
5. Copy the encoded string

## Step 5: Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" > "Environment variables"
4. Add these variables:

### Required Variables:
- `GOOGLE_SHEETS_CREDENTIALS`: The base64-encoded service account JSON
- `COURSES_SHEET_ID`: The Sheet ID for courses registrations
- `FESTIVAL_SHEET_ID`: The Sheet ID for festival registrations

## Step 6: Deploy

1. Commit and push your changes to your repository
2. Netlify will automatically deploy the updated functions
3. The functions should now work properly

## Testing

You can test the functions by submitting the registration forms directly.

## Troubleshooting

1. **Function returns 500 error**: Check that your environment variables are set correctly in Netlify
2. **Google Sheets authentication fails**: Verify your service account credentials are properly base64 encoded
3. **Form submission fails**: Check the browser console and Netlify function logs for detailed error messages
4. **Test the basic function first by submitting a registration form

## Function URLs

- Courses Registration: `/.netlify/functions/submit-courses-registration`
- Festival Registration: `/.netlify/functions/submit-festival-registration`
- Test Function: `/.netlify/functions/test-function` 