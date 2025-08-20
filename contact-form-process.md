# 📋 Contact Form Data Saving Process - Google Sheets Integration

## 🔄 How Your Contact Form Works

### Step 1: User Fills Contact Form
- User visits your website's contact page
- Fills out the form with: Name, Email, Phone Number, Message
- Clicks "Send Message" button

### Step 2: Form Data Processing
- JavaScript captures the form data
- Formats data with timestamp (Indian Standard Time)
- Adds source identifier: "R.K. Public School Website"

### Step 3: Data Transmission
- Form data is sent to your Google Apps Script URL:
  ```
  https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec
  ```

### Step 4: Google Apps Script Processing
Your Google Apps Script should contain this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    var name = e.parameter.name;
    var email = e.parameter.email;
    var phonenumber = e.parameter.phonenumber;
    var message = e.parameter.message;
    var timestamp = e.parameter.timestamp;
    var source = e.parameter.source;
    
    // Add headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone Number', 'Message', 'Source']);
    }
    
    // Add the form data to the sheet
    sheet.appendRow([timestamp, name, email, phonenumber, message, source]);
    
    // Send email notification (optional)
    MailApp.sendEmail({
      to: 'rkpublicschoolbasti@gmail.com', // Your school email
      subject: 'New Contact Form Submission - R.K. Public School',
      body: `
        New contact form submission received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phonenumber}
        Message: ${message}
        Submitted: ${timestamp}
      `
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 5: Data Storage in Google Sheet
- Data gets saved to your Google Sheet with these columns:
  1. **Timestamp** - When form was submitted (IST time)
  2. **Name** - Student/Parent name
  3. **Email** - Contact email
  4. **Phone Number** - Contact phone
  5. **Message** - Inquiry message
  6. **Source** - "R.K. Public School Website"

### Step 6: Email Notification
- You receive an email at `rkpublicschoolbasti@gmail.com`
- Email contains all the form details
- Helps you respond quickly to inquiries

## 🛠️ How to Set This Up

### 1. Create Google Sheet
- Go to [Google Sheets](https://sheets.google.com)
- Create a new spreadsheet
- Name it "R.K. Public School Contact Form Responses"

### 2. Create Google Apps Script
- In your Google Sheet, go to **Extensions** → **Apps Script**
- Delete any existing code
- Paste the script code provided above
- Save the project (name it "Contact Form Handler")

### 3. Deploy the Script
- Click **Deploy** → **New Deployment**
- Choose **Web app** as type
- Set **Execute as**: Me
- Set **Who has access**: Anyone
- Click **Deploy**
- Copy the Web app URL (this is your script URL)

### 4. Update Website Code
- The URL you copied should match the one in your contact form code
- Current URL: `https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec`

## 📊 Accessing Your Data

### View Responses
1. Open your Google Sheet
2. All form submissions appear as new rows
3. Data includes timestamp, contact details, and messages

### Export Data
1. Go to **File** → **Download**
2. Choose format (Excel, PDF, CSV)
3. Use for analysis or backup

### Filter/Search
1. Use Google Sheets filters to find specific inquiries
2. Search by date, name, or message content
3. Sort by any column for organization

## 🔧 Troubleshooting

### If Form Doesn't Work:
1. **Check Script URL** - Ensure it matches in your website code
2. **Check Permissions** - Script must be deployed with "Anyone" access
3. **Check Sheet Access** - Make sure script can write to your sheet
4. **Test Script** - Run the script manually to check for errors

### Common Issues:
- **Permission Denied**: Re-deploy script with correct permissions
- **No Data Saving**: Check if script URL is correct
- **Email Not Sending**: Verify email address in script code

## 📧 Your Current Setup

- **Script URL**: `https://script.google.com/macros/s/AKfycbyPXsTqv95r1maJM2YRgIYVLrLGi-t9QOAU_xl9S_L_vpYxqRHLBFRDk9kx0ejBe3tIGg/exec`
- **Google Sheet**: https://docs.google.com/spreadsheets/d/1cHqgKZy-_5gyHvFht9LuZl3nXKkDVZo_vDbHhegxDo4/edit
- **Email Notifications**: Will be sent to your school email address

The system is ready to collect and store all contact form submissions from your R.K. Public School website!
