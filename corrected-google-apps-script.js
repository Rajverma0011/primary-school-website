function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Handle form-encoded data from the website
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var message = e.parameter.message || '';
    var timestamp = e.parameter.timestamp || new Date().toString();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([
      new Date(),  // Use server timestamp
      name,
      email,
      message
    ]);
    
    // Send email notification
    try {
      MailApp.sendEmail({
        to: 'rkpublicschoolbasti@gmail.com',
        subject: 'New Contact Form Submission - R.K. Public School',
        body: `
New contact form submission received:

Name: ${name}
Email: ${email}
Message: ${message}
Submitted: ${timestamp}

Please respond to this inquiry as soon as possible.
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({status: "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form:', error);
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
