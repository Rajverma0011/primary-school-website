# New Google Sheet Setup Instructions

## Updated Configuration ✅

**New Google Sheet ID**: `1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk`
**New Web App URL**: `https://script.google.com/macros/s/AKfycbz4vNM2As9LA3OhNgx5Vj51qvkw8XWbZitF39XkLfY5HNzwUZjiGU0SSlrH_J1gz3Eldw/exec`

## Files Updated:
✅ `final-google-apps-script.js` - Updated sheet ID
✅ `src/components/contact/ContactForm/ContactForm.jsx` - Updated web app URL  
✅ `src/components/careers/TeachingApplication/TeachingApplication.jsx` - Updated web app URL
✅ `test-forms.html` - Updated URLs and sheet links
✅ `test-forms.js` - Updated URLs and sheet links

## Setup Steps:

### Step 1: Deploy Google Apps Script
1. Go to your Google Apps Script editor
2. **Copy the entire content from `final-google-apps-script.js`**
3. **Paste it into your script editor** (replace all existing code)
4. **Save the script** (Ctrl+S)
5. **Deploy as Web App**:
   - Click "Deploy" → "New deployment"
   - Choose "Web app" type
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"

### Step 2: Set Up Headers (Choose One Option)

**Option A - Automatic (Recommended)**:
The script will automatically create headers when the first form is submitted.

**Option B - Manual Setup**:
1. In the Google Apps Script editor
2. Select `setupHeaders` function from dropdown
3. Click "Run" button (▶️)
4. Grant permissions if asked

### Step 3: Test Forms
1. **Open test page**: Open `test-forms.html` in your browser
2. **Click "Test Contact Form"** button
3. **Click "Test Teaching Application"** button
4. **Check your Google Sheet** for new data

### Step 4: Verify on Website
1. Go to your website's contact page and submit a test
2. Go to your website's careers page and submit a test application
3. Check Google Sheet for the new entries

## Expected Headers:
| Column A | Column B | Column C | Column D | Column E | Column F |
|----------|----------|----------|----------|----------|----------|
| Timestamp | Type | Name/Full Name | Email | Phone | Message |

| Column G | Column H | Column I | Column J | Column K | Column L | Column M | Column N | Column O |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Position | Qualification | Experience | Subjects | Current Salary | Expected Salary | Available From | Cover Letter | References |

## Expected Data:
- **Contact Forms**: Will fill columns A-F
- **Teaching Applications**: Will fill columns A-E, G-O

## Your New Google Sheet:
🔗 **Direct Link**: https://docs.google.com/spreadsheets/d/1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk

## Troubleshooting:
- If forms don't work, check that the script is deployed as "Anyone" can access
- If no headers appear, run the `setupHeaders()` function manually
- Check Google Apps Script logs for any errors
- Ensure the sheet is not protected or read-only

## Email Notifications:
Both forms will send email notifications to: `rkpublicschoolbasti@gmail.com`
