function doPost(e) {
  try {
    var SHEET_ID = '1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk';
    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    // Check if this is a teaching application or contact form
    var formType = e.parameter.type || 'contact_form';

    var sheet;
    if (formType === 'teaching_application') {
      // Get or create Teaching Applications sheet
      sheet = getOrCreateSheet(spreadsheet, 'Teaching Applications');
      ensureTeachingHeaders(sheet);
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
      // Get or create Contact Forms sheet
      sheet = getOrCreateSheet(spreadsheet, 'Contact Forms');
      ensureContactHeaders(sheet);

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
        message
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

function getOrCreateSheet(spreadsheet, sheetName) {
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

function ensureContactHeaders(sheet) {
  var lastRow = sheet.getLastRow();
  var contactHeaders = [
    'Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Message'
  ];

  if (lastRow === 0) {
    // Sheet is empty, add headers
    sheet.appendRow(contactHeaders);

    // Format header row
    var headerRange = sheet.getRange(1, 1, 1, contactHeaders.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#34a853');
    headerRange.setFontColor('white');
  }
}

function ensureTeachingHeaders(sheet) {
  var lastRow = sheet.getLastRow();
  var teachingHeaders = [
    'Timestamp', 'Type', 'Full Name', 'Email', 'Phone', 'Position',
    'Qualification', 'Experience', 'Subjects', 'Current Salary',
    'Expected Salary', 'Available From', 'Cover Letter', 'References'
  ];

  if (lastRow === 0) {
    // Sheet is empty, add headers
    sheet.appendRow(teachingHeaders);

    // Format header row
    var headerRange = sheet.getRange(1, 1, 1, teachingHeaders.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
  }
}

// Manual function to set up headers (run this once if needed)
function setupHeaders() {
  var SHEET_ID = '1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk';
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getActiveSheet();

  // Clear existing content and set up fresh headers
  sheet.clear();
  var headers = [
    'Timestamp', 'Type', 'Name/Full Name', 'Email', 'Phone', 'Message',
    'Position', 'Qualification', 'Experience', 'Subjects', 'Current Salary',
    'Expected Salary', 'Available From', 'Cover Letter', 'References'
  ];

  sheet.appendRow(headers);

  // Format header row
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');

  return 'Headers set up successfully!';
}
