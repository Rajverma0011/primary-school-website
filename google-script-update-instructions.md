# 🔄 Update Your Google Apps Script

## Current Issue
Your website forms were sending URLSearchParams data, but your Google Apps Script expected JSON data. I've updated both forms to send JSON.

## How to Update Your Script

1. **Open Google Apps Script**
   - Go to: https://script.google.com
   - Open your existing script project

2. **Replace Your Current Script**
   - Delete the current `doPost` function
   - Copy and paste the new script from `updated-google-apps-script.js`

3. **Save and Deploy**
   - Click **Save** (Ctrl+S)
   - Click **Deploy** → **Manage Deployments**
   - Click **Edit** (pencil icon) next to your existing deployment
   - Change version to **New version**
   - Click **Deploy**

## What the New Script Does

### ✅ **Handles Both Forms**
- **Contact Form**: Saves name, email, message
- **Teaching Applications**: Saves all application details

### ✅ **Better Data Organization**
- Adds a "Type" column to distinguish form types
- Uses proper headers for easy data reading
- Stores timestamp automatically

### ✅ **Email Notifications**
- Sends different emails for contact forms vs teaching applications
- Includes all relevant information in the email
- Sends to: `rkpublicschoolbasti@gmail.com`

### ✅ **Error Handling**
- Handles errors gracefully
- Continues working even if email sending fails
- Returns proper success/error responses

## Your Google Sheet Columns

After updating, your sheet will have these columns:

**For Contact Forms:**
- Timestamp | Type | Name | Email | Message

**For Teaching Applications:**
- Timestamp | Type | Full Name | Email | Phone | Position | Qualification | Experience | Subjects | Current Salary | Expected Salary | Available From | Cover Letter | References

## Test Your Forms

After updating the script:
1. **Test Contact Form**: Submit a test message
2. **Test Teaching Application**: Submit a test application
3. **Check Your Sheet**: Verify data appears correctly
4. **Check Email**: Verify you receive notification emails

## Troubleshooting

If forms don't work:
1. Check script permissions are set to "Anyone"
2. Verify the script URL matches in your website
3. Check Google Sheet permissions
4. Look for errors in Google Apps Script logs

Your forms should now work perfectly with your Google Apps Script! 🎉
