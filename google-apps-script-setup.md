# Google Apps Script Setup for Contact Form Integration

## Instructions:

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default `Code.gs` content with the code below
4. Save the project
5. Deploy as a web app with execute permissions for "Anyone"

## Google Apps Script Code (Code.gs):

```javascript
// Replace with your actual Google Sheet ID
const SHEET_ID = '1cHqgKZy-_5gyHvFht9LuZl3nXKkDVZo_vDbHhegxDo4';

function doPost(e) {
  try {
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Get form data
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phonenumber = e.parameter.phonenumber || '';
    const message = e.parameter.message || '';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source = e.parameter.source || 'Contact Form';
    
    // Format timestamp for display
    const formattedDate = new Date(timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([[
        'Timestamp', 'Name', 'Email', 'Phone Number', 'Message', 'Source', 'Status'
      ]]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1e3a8a');
      headerRange.setFontColor('#ffffff');
    }
    
    // Add the new submission
    const newRow = [
      formattedDate,
      name,
      email,
      phonenumber,
      message,
      source,
      'New'
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 7);
    
    // Send email notification (optional)
    try {
      const subject = `New Contact Form Submission from ${name}`;
      const body = `
        New contact form submission received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phonenumber}
        Message: ${message}
        
        Submitted at: ${formattedDate}
        
        Please respond to this inquiry promptly.
      `;
      
      // Replace with your notification email
      MailApp.sendEmail('rkpublicbasti@gmail.com', subject, body);
    } catch (emailError) {
      console.log('Email notification failed:', emailError);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Contact Form API is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Function to test the setup
function testSetup() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  
  // Test data
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      phonenumber: '9876543210',
      message: 'This is a test message from the setup verification.',
      timestamp: new Date().toISOString(),
      source: 'Setup Test'
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}
```

## Deployment Steps:

1. **Save the Script**: Save your Apps Script project
2. **Deploy as Web App**:
   - Click "Deploy" > "New deployment"
   - Choose type: "Web app"
   - Description: "Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Click "Deploy"
3. **Copy the Web App URL**: This should match your provided URL
4. **Test the Setup**: Run the `testSetup()` function to verify everything works

## Google Sheet Setup:

Your Google Sheet will automatically get the following columns when the first form is submitted:
- **Timestamp**: When the form was submitted
- **Name**: Full name from the form
- **Email**: Email address
- **Phone Number**: Phone number
- **Message**: The message content
- **Source**: Where the submission came from
- **Status**: Track follow-up status (New, Contacted, Resolved, etc.)

## Features Included:

✅ **Automatic Headers**: Creates headers if sheet is empty
✅ **Email Notifications**: Sends email to school when form is submitted
✅ **Error Handling**: Graceful error handling and logging
✅ **Data Validation**: Handles missing or empty fields
✅ **Indian Time Zone**: Timestamps in IST
✅ **Auto-formatting**: Headers are styled and columns auto-resize
✅ **Status Tracking**: Includes status column for follow-up management

## Troubleshooting:

1. **Permission Error**: Make sure the script has permission to access your Google Sheet
2. **Email Not Working**: Check if MailApp permissions are granted
3. **Form Not Submitting**: Verify the web app URL matches exactly
4. **Sheet Access**: Ensure the Sheet ID is correct and accessible

## Security Notes:

- The web app is set to "Anyone" access for form submissions
- No sensitive data is logged in the script
- All form data goes directly to your private Google Sheet
- Email notifications only go to the specified school email

Your contact form is now fully integrated with Google Sheets! 🎉
