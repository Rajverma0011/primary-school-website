# Contact Form Testing Instructions

## What Was Fixed

1. **Google Apps Script** - Added missing `phone` field for contact forms
2. **Contact Form** - Fixed type parameter to match script expectations
3. **Teaching Application** - Fixed to send individual fields instead of cramming everything into message

## How to Test

### Step 1: Update Google Apps Script
Copy the content from `final-google-apps-script.js` and paste it into your Google Apps Script editor, then deploy it.

### Step 2: Test Contact Form
1. Go to your contact page
2. Open browser Developer Tools (F12)
3. Go to Console tab
4. Fill out and submit the contact form
5. Check console logs for "Submitting to:" and "Form data:" messages
6. Check your Google Sheet for new row with: Timestamp, Type, Name, Email, Phone, Message

### Step 3: Test Teaching Application
1. Go to careers page
2. Fill out and submit teaching application
3. Check Google Sheet for new row with all individual fields

### Step 4: Check Email Notifications
Both forms should also send email notifications to rkpublicschoolbasti@gmail.com

## Debugging Tips

- Console logs will show exactly what data is being sent
- With `mode: 'no-cors'`, you won't see response details, but errors will still show
- Check Google Apps Script logs in script.google.com for any server-side errors
- Make sure Google Sheet is accessible and not in read-only mode

## Expected Sheet Columns

**Contact Form:**
- Timestamp, Type, Name, Email, Phone, Message

**Teaching Application:**  
- Timestamp, Type, Full Name, Email, Phone, Position, Qualification, Experience, Subjects, Current Salary, Expected Salary, Available From, Cover Letter, References
