function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
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
      
      // Add headers if this is the first row
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Timestamp',
          'Type',
          'Full Name',
          'Email',
          'Phone',
          'Position',
          'Qualification',
          'Experience',
          'Subjects',
          'Current Salary',
          'Expected Salary',
          'Available From',
          'Cover Letter',
          'References'
        ]);
      }
      
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

      // Add headers if this is the first row
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Message']);
      }

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
