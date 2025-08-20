# Form Testing Results

## Test Setup Complete

I've created automated test scripts to verify both forms are working:

### Test Files Created:
1. **test-forms.html** - Browser-based testing page
2. **test-forms.js** - Node.js testing script

## Test Data to be Sent:

### Contact Form Test Data:
- **Name**: Random test user (e.g., "Test User 123")
- **Email**: Random email (e.g., "test123@example.com") 
- **Phone**: Random phone (e.g., "987654321")
- **Message**: Test message with timestamp
- **Type**: "contact_form"

### Teaching Application Test Data:
- **Full Name**: Random teacher name (e.g., "Jane Teacher 456")
- **Email**: Random teacher email (e.g., "teacher456@example.com")
- **Phone**: Random phone number
- **Position**: "Mathematics Teacher"
- **Qualification**: "M.Sc Mathematics, B.Ed"
- **Experience**: "3-5 years"
- **Subjects**: "Mathematics, Physics"
- **Current Salary**: "25000"
- **Expected Salary**: "30000"
- **Available From**: "2024-02-01"
- **Cover Letter**: Test cover letter text
- **References**: Test reference information
- **Type**: "teaching_application"

## How to Test:

### Option 1: Open test-forms.html
1. Open `test-forms.html` in your browser
2. Click "Test Contact Form" button
3. Click "Test Teaching Application" button
4. Check console logs for submission details

### Option 2: Check your actual website forms
1. Go to: `/contact` page and submit the contact form
2. Go to: `/careers` page and submit the teaching application
3. Open browser DevTools console to see submission logs

## Expected Results:

Both forms should:
✅ Send data to Google Apps Script URL
✅ Save data to Google Sheet (ID: 1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0)
✅ Send email notifications to rkpublicschoolbasti@gmail.com

## Check Results:
📋 **Google Sheet**: https://docs.google.com/spreadsheets/d/1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0

Look for new rows with:
- **Contact Form**: Timestamp, Type, Name, Email, Phone, Message
- **Teaching App**: Timestamp, Type, Full Name, Email, Phone, Position, Qualification, Experience, etc.

## Troubleshooting:
- If no data appears, check Google Apps Script deployment
- Ensure script has proper permissions to write to sheet
- Check Apps Script execution logs for errors
