# Separate Sheets Setup Instructions

## ✅ Problem Fixed!
Your forms are now working, but I've updated the Google Apps Script to save different forms to separate sheets within the same spreadsheet.

## 📋 New Sheet Structure:

### 🟢 Contact Forms Sheet
- **Sheet Name**: "Contact Forms" 
- **Headers**: Timestamp | Type | Name | Email | Phone | Message
- **Color**: Green headers
- **Data**: All contact form submissions

### 🔵 Teaching Applications Sheet  
- **Sheet Name**: "Teaching Applications"
- **Headers**: Timestamp | Type | Full Name | Email | Phone | Position | Qualification | Experience | Subjects | Current Salary | Expected Salary | Available From | Cover Letter | References
- **Color**: Blue headers
- **Data**: All teaching application submissions

## 🔧 Setup Steps:

### Step 1: Update Google Apps Script
1. Copy the updated content from `final-google-apps-script.js`
2. Paste it into your Google Apps Script editor (replace all existing code)
3. Save the script (Ctrl+S)
4. Deploy the updated script

### Step 2: Set Up Separate Sheets
**Option A - Automatic (Recommended)**:
The script will automatically create both sheets when forms are submitted.

**Option B - Manual Setup**:
1. In Google Apps Script editor
2. Select `setupHeaders` function from dropdown
3. Click "Run" button (▶️) 
4. This will create both sheets with proper formatting

### Step 3: Migrate Existing Data (Optional)
If you want to move your existing data to the correct sheets:
1. Manually copy contact form rows to "Contact Forms" sheet
2. Manually copy teaching application rows to "Teaching Applications" sheet
3. Delete the old mixed data from Sheet1

## 📊 Expected Results:

### Contact Form Submissions → "Contact Forms" Sheet:
```
Timestamp | Type | Name | Email | Phone | Message
```

### Teaching Applications → "Teaching Applications" Sheet:
```  
Timestamp | Type | Full Name | Email | Phone | Position | Qualification | Experience | Subjects | Current Salary | Expected Salary | Available From | Cover Letter | References
```

## 🔗 Your Google Spreadsheet:
https://docs.google.com/spreadsheets/d/1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk

## 🧪 Test the Updated Setup:
1. Use `test-forms.html` to test both forms
2. Check that contact forms go to "Contact Forms" sheet
3. Check that teaching applications go to "Teaching Applications" sheet

## 📧 Email Notifications:
Both forms will continue sending email notifications to: `rkpublicschoolbasti@gmail.com`

## ✨ Benefits:
- ✅ Cleaner data organization
- ✅ Easier to manage different form types
- ✅ Better reporting and analysis
- ✅ Separate formatting for each sheet type
