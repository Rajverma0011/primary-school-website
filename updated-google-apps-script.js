function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Check if this is a teaching application or contact form
    if (data.type === 'teaching_application') {
      // Handle teaching application
      // Add headers if first row is empty
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
      
      sheet.appendRow([
        new Date(),
        'Teaching Application',
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.position || '',
        data.qualification || '',
        data.experience || '',
        data.subjects || '',
        data.currentSalary || '',
        data.expectedSalary || '',
        data.availableFrom || '',
        data.coverLetter || '',
        data.references || ''
      ]);
      
      // Send email notification for teaching application
      try {
        MailApp.sendEmail({
          to: 'rkpublicschoolbasti@gmail.com',
          subject: 'New Teaching Application - R.K. Public School',
          body: `
New teaching application received:

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Position: ${data.position}
Qualification: ${data.qualification}
Experience: ${data.experience}
Subjects: ${data.subjects}
Available From: ${data.availableFrom}

Cover Letter:
${data.coverLetter}

Please review the application in the Google Sheet.
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
      
    } else {
      // Handle contact form
      // Add headers if first row is empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Message']);
      }
      
      sheet.appendRow([
        new Date(),
        'Contact Form',
        data.name || '',
        data.email || '',
        data.message || ''
      ]);
      
      // Send email notification for contact form
      try {
        MailApp.sendEmail({
          to: 'rkpublicschoolbasti@gmail.com',
          subject: 'New Contact Form Submission - R.K. Public School',
          body: `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}

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
