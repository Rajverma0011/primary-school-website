# 🔧 Updated Google Apps Script Setup for R.K. Public School

## Current Configuration:
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1cHqgKZy-_5gyHvFht9LuZl3nXKkDVZo_vDbHhegxDo4/edit
- **Script URL**: https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec

## ⚡ UPDATED Google Apps Script Code

Copy this EXACT code into your Google Apps Script project:

```javascript
// R.K. Public School - Contact Form Handler
const SHEET_ID = '1cHqgKZy-_5gyHvFht9LuZl3nXKkDVZo_vDbHhegxDo4';

function doPost(e) {
  try {
    console.log('Received data:', e.parameter);
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Get form data from the website
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phonenumber = e.parameter.phonenumber || '';
    const message = e.parameter.message || '';
    const timestamp = e.parameter.timestamp || new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'});
    const source = e.parameter.source || 'Website Contact Form';
    
    // Create headers if this is the first submission
    if (sheet.getLastRow() === 0) {
      const headers = ['Date & Time', 'Full Name', 'Email Address', 'Phone Number', 'Message', 'Source', 'Status'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#0f4c75');
      headerRange.setFontColor('#ffffff');
      headerRange.setBorder(true, true, true, true, true, true);
    }
    
    // Add new row with form data
    const newRow = [
      timestamp,
      name,
      email,
      phonenumber,
      message,
      source,
      'New Inquiry'
    ];
    
    sheet.appendRow(newRow);
    
    // Format the new row
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(lastRow, 1, 1, 7);
    range.setBorder(true, true, true, true, true, true);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 7);
    
    // Send email notification to school
    try {
      const subject = `🎓 New Inquiry - R.K. Public School`;
      const body = `
Dear Team,

A new inquiry has been received through the school website:

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phonenumber}
💬 Message: ${message}
⏰ Submitted: ${timestamp}

Please respond to this inquiry promptly.

Best regards,
R.K. Public School Website System
      `;
      
      MailApp.sendEmail({
        to: 'rkpublicbasti@gmail.com',
        subject: subject,
        body: body
      });
      
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Form submitted successfully',
        'timestamp': timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
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
      'message': 'R.K. Public School Contact Form API is active',
      'timestamp': new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function to verify everything works
function testContactForm() {
  console.log('Testing contact form submission...');
  
  const testData = {
    parameter: {
      name: 'Test Parent',
      email: 'parent@example.com',
      phonenumber: '9876543210',
      message: 'I would like to inquire about admission for my child in class 3. Please provide information about the admission process and fee structure.',
      timestamp: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      source: 'Test Submission'
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
  
  return 'Test completed. Check your Google Sheet and email!';
}

// Function to clear all data (use carefully!)
function clearSheet() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.clear();
  console.log('Sheet cleared successfully');
}
```

## 🚀 Step-by-Step Setup:

### 1. **Update Google Apps Script**
- Go to: https://script.google.com/
- Open your existing project
- **Delete all existing code**
- **Paste the new code above**
- Click "Save" (Ctrl+S)

### 2. **Test the Setup**
- In the Apps Script editor, select the `testContactForm` function
- Click the "Run" button
- Check your Google Sheet - you should see test data appear!
- Check your email - you should receive a notification

### 3. **Deploy (if not already done)**
- Click "Deploy" → "New deployment"
- Type: "Web app"
- Execute as: "Me"
- Who has access: "Anyone"
- Click "Deploy"
- Make sure the URL matches: `...0ejBe3tIGg/exec`

### 4. **Test Live Form**
- Go to: https://99d9640a040e4e88aeaa0414752c5d4b-bf8a51444d6b430f8c2a677d1.fly.dev/contact
- Fill out the form with real data
- Submit it
- Check your Google Sheet for the new entry
- Check your email for notification

## 📊 Expected Google Sheet Columns:
1. **Date & Time** - When submitted (IST)
2. **Full Name** - Student/Parent name
3. **Email Address** - Contact email
4. **Phone Number** - Contact number
5. **Message** - Inquiry details
6. **Source** - R.K. Public School Website
7. **Status** - New Inquiry (you can update this)

## 🔧 Troubleshooting:

**If still not working:**
1. Run the `testContactForm()` function in Apps Script
2. Check the "Execution log" for any error messages
3. Verify your Sheet ID matches: `1cHqgKZy-_5gyHvFht9LuZl3nXKkDVZo_vDbHhegxDo4`
4. Make sure the script is deployed as "Anyone" can access

**Need to clear data?**
- Run the `clearSheet()` function to start fresh

## ✅ Success Indicators:
- Google Sheet has properly formatted headers
- New rows appear when form is submitted
- Email notifications arrive at rkpublicbasti@gmail.com
- Form shows success message on website

This updated setup should work perfectly for R.K. Public School! 🎓📚
