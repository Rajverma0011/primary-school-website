function doPost(e) {
  try {
    // Get the current spreadsheet (where this script is attached)
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data from the POST request
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var message = e.parameter.message || '';
    var formType = e.parameter.type || 'Contact Form';
    
    // Add data to the sheet
    sheet.appendRow([
      new Date(),    // Timestamp
      name,          // Name
      email,         // Email
      phone,         // Phone Number
      message,       // Message
      formType       // Type (Contact Form or Teaching Application)
    ]);
    
    // Optional: Send email notification
    try {
      MailApp.sendEmail({
        to: 'rkpublicschoolbasti@gmail.com',
        subject: 'New Form Submission - R.K. Public School',
        body: `
New ${formType} submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
Time: ${new Date()}

Check your Google Sheet for details.
        `
      });
    } catch (emailError) {
      console.log('Email failed, but form data saved successfully');
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({status: "success", message: "Form submitted successfully"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  var testData = {
    parameter: {
      name: "Test User",
      email: "test@example.com", 
      phone: "1234567890",
      message: "This is a test message",
      type: "Contact Form"
    }
  };
  
  var result = doPost(testData);
  console.log(result.getContent());
}
