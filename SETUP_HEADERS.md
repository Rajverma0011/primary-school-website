# Google Sheet Header Setup Instructions

## Problem
The Google Sheet needs proper column headers before form data can be saved correctly.

## Solution
I've updated the Google Apps Script to automatically set up headers and added a manual setup function.

## Steps to Fix:

### Step 1: Update Google Apps Script
1. Go to your Google Apps Script: https://script.google.com
2. Copy the entire content from `final-google-apps-script.js`
3. Paste it into your script editor (replace all existing code)
4. Save the script

### Step 2: Set Up Headers Manually (Option A)
1. In Google Apps Script editor, find the `setupHeaders()` function
2. Click on the function name in the dropdown
3. Click the "Run" button (▶️)
4. Grant permissions if asked
5. This will clear the sheet and add proper headers

### Step 3: Let Script Auto-Setup Headers (Option B)
The updated script will automatically ensure headers exist when forms are submitted.

## Expected Headers:
| Column | Purpose |
|--------|---------|
| Timestamp | When form was submitted |
| Type | "Contact Form" or "Teaching Application" |
| Name/Full Name | Applicant's name |
| Email | Email address |
| Phone | Phone number |
| Message | Contact form message |
| Position | Teaching position applied for |
| Qualification | Educational qualification |
| Experience | Years of experience |
| Subjects | Subjects they can teach |
| Current Salary | Current salary |
| Expected Salary | Expected salary |
| Available From | Start date |
| Cover Letter | Cover letter text |
| References | Reference details |

## After Setup:
✅ Contact forms will fill: Timestamp, Type, Name, Email, Phone, Message (other columns empty)
✅ Teaching applications will fill: All columns with relevant data

## Test After Setup:
1. Run the test scripts I created earlier
2. Check your Google Sheet for new data
3. Both forms should now save data correctly

## Google Sheet Link:
https://docs.google.com/spreadsheets/d/1rXtU7FvxnkW7WUyvfhbru7mE8G0fCyGwBdYE3rI9NE0
