function doPost(e) {
  try {
    // Your specific Google Sheet ID
    var SHEET_ID = '1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0';
    
    // Open the specific sheet by ID
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getActiveSheet();
    
    // Get form data from the POST request
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var message = e.parameter.message || '';
    var formType = e.parameter.type || 'Contact Form';
    
    // Add headers if this is the first row (check if A1 is empty)
    if (sheet.getRange('A1').getValue() === '') {
      sheet.getRange('A1:F1').setValues([[
        'Timestamp', 'Name', 'Email', 'Phone Number', 'Message', 'Type'
      ]]);
      
      // Format the header row
      var headerRange = sheet.getRange('A1:F1');
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Add the form data to the next available row
    sheet.appendRow([
      new Date(),    // Timestamp
      name,          // Name
      email,         // Email
      phone,         // Phone Number
      message,       // Message
      formType       // Type (Contact Form or Teaching Application)
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 6);
    
    // Send email notification
    try {
      MailApp.sendEmail({
        to: 'rkpublicschoolbasti@gmail.com',
        subject: 'New Form Submission - R.K. Public School',
        body: `
🎓 NEW ${formType.toUpperCase()} SUBMISSION

📋 DETAILS:
• Name: ${name}
• Email: ${email}
• Phone: ${phone}
• Message: ${message}
• Submitted: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

📊 Check your Google Sheet for complete details:
https://docs.google.com/spreadsheets/d/${SHEET_ID}

Please respond to this inquiry as soon as possible.

---
R.K. Public School Contact System
        `
      });
      console.log('✅ Email sent successfully');
    } catch (emailError) {
      console.log('⚠️ Email failed but data saved:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success", 
        message: "Form submitted successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('❌ Error processing form:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error", 
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - Click "Run" to test this
function testFormSubmission() {
  var testData = {
    parameter: {
      name: "Test Student",
      email: "test@example.com", 
      phone: "9876543210",
      message: "This is a test message from the website contact form.",
      type: "Contact Form"
    }
  };
  
  console.log('🧪 Testing form submission...');
  var result = doPost(testData);
  console.log('📄 Result:', result.getContent());
  console.log('✅ Check your Google Sheet - you should see a test entry!');
}

// Check if everything is working
function checkSetup() {
  try {
    var SHEET_ID = '1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0';
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getActiveSheet();
    
    console.log('✅ Sheet access successful');
    console.log('📊 Sheet name:', sheet.getName());
    console.log('🔗 Sheet URL:', spreadsheet.getUrl());
    console.log('📝 Last row with data:', sheet.getLastRow());
    console.log('');
    console.log('🎯 Everything looks good! Your contact form should work now.');
    
    return true;
  } catch (error) {
    console.error('❌ Setup check failed:', error);
    return false;
  }
}
