function doPost(e) {
  try {
    var SHEET_ID = '1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0';
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getActiveSheet();

    // Ensure proper headers are set up
    ensureHeaders(sheet);

    // Check if this is a teaching application or contact form
    var formType = e.parameter.type || 'contact_form';

    if (formType === 'teaching_application') {
      // Handle teaching application
      var fullName = e.parameter.fullName || '';
      var email = e.parameter.email || '';
      var phone = e.parameter.phone || '';
      var position = e.parameter.position || '';
      var qualification = e.parameter.qualification || '';
      var experience = e.parameter.experience || '';
      var subjects = e.parameter.subjects || '';
      var currentSalary = e.parameter.currentSalary || '';
      var expectedSalary = e.parameter.expectedSalary || '';
      var availableFrom = e.parameter.availableFrom || '';
      var coverLetter = e.parameter.coverLetter || '';
      var references = e.parameter.references || '';
      var timestamp = e.parameter.timestamp || new Date().toString();
      
      // Add the teaching application data
      sheet.appendRow([
        new Date(),
        'Teaching Application',
        fullName,
        email,
        phone,
        position,
        qualification,
        experience,
        subjects,
        currentSalary,
        expectedSalary,
        availableFrom,
        coverLetter,
        references
      ]);
      
      // Send email notification for teaching application
      try {
        MailApp.sendEmail({
          to: 'rkpublicschoolbasti@gmail.com',
          subject: 'New Teaching Application - R.K. Public School',
          body: `
New teaching application received:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Position: ${position}
Qualification: ${qualification}
Experience: ${experience}
Subjects: ${subjects}
Available From: ${availableFrom}

Cover Letter:
${coverLetter}

References:
${references}

Please review the application in the Google Sheet.
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
      
    } else {
      // Handle contact form (default)
      var name = e.parameter.name || '';
      var email = e.parameter.email || '';
      var phone = e.parameter.phone || '';
      var message = e.parameter.message || '';
      var timestamp = e.parameter.timestamp || new Date().toString();

      // Add the contact form data
      sheet.appendRow([
        new Date(),
        'Contact Form',
        name,
        email,
        phone,
        message,
        '', '', '', '', '', '', '', '' // Empty cells for teaching app columns
      ]);
      
      // Send email notification for contact form
      try {
        MailApp.sendEmail({
          to: 'rkpublicschoolbasti@gmail.com',
          subject: 'New Contact Form Submission - R.K. Public School',
          body: `
New contact form submission received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
Submitted: ${timestamp}

Please respond to this inquiry as soon as possible.
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
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

function ensureHeaders(sheet) {
  // Check if proper headers exist
  var lastRow = sheet.getLastRow();
  var expectedHeaders = [
    'Timestamp', 'Type', 'Name/Full Name', 'Email', 'Phone', 'Message',
    'Position', 'Qualification', 'Experience', 'Subjects', 'Current Salary',
    'Expected Salary', 'Available From', 'Cover Letter', 'References'
  ];

  if (lastRow === 0) {
    // Sheet is empty, add headers
    sheet.appendRow(expectedHeaders);
  } else {
    // Check if first row has correct headers
    var firstRow = sheet.getRange(1, 1, 1, expectedHeaders.length).getValues()[0];
    var hasCorrectHeaders = expectedHeaders.every((header, index) =>
      firstRow[index] && firstRow[index].toString().includes(header.split('/')[0])
    );

    if (!hasCorrectHeaders) {
      // Insert headers at the top
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    }
  }
}
