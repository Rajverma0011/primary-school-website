// Test script for contact form and teaching application
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz4vNM2As9LA3OhNgx5Vj51qvkw8XWbZitF39XkLfY5HNzwUZjiGU0SSlrH_J1gz3Eldw/exec';

async function testContactForm() {
    console.log('\n🧪 Testing Contact Form...');
    
    const formData = new URLSearchParams();
    const testData = {
        name: `Test User ${Math.floor(Math.random() * 1000)}`,
        email: `test${Math.floor(Math.random() * 1000)}@example.com`,
        phone: `98765${Math.floor(Math.random() * 10000)}`,
        message: `This is a test message sent on ${new Date().toLocaleString()}`,
        type: 'contact_form'
    };

    Object.keys(testData).forEach(key => {
        formData.append(key, testData[key]);
    });

    console.log('📝 Contact Form Data:');
    console.log(`   Name: ${testData.name}`);
    console.log(`   Email: ${testData.email}`);
    console.log(`   Phone: ${testData.phone}`);
    console.log(`   Message: ${testData.message}`);
    console.log(`   Type: ${testData.type}`);

    try {
        console.log(`📤 Submitting to: ${GOOGLE_SCRIPT_URL}`);
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });

        console.log(`📊 Response Status: ${response.status}`);
        const responseText = await response.text();
        console.log(`📋 Response: ${responseText}`);
        console.log('✅ Contact form test completed');
        
    } catch (error) {
        console.log(`❌ Contact form error: ${error.message}`);
    }
}

async function testTeachingApplication() {
    console.log('\n🧪 Testing Teaching Application...');
    
    const formData = new URLSearchParams();
    const testData = {
        fullName: `Jane Teacher ${Math.floor(Math.random() * 1000)}`,
        email: `teacher${Math.floor(Math.random() * 1000)}@example.com`,
        phone: `91234${Math.floor(Math.random() * 10000)}`,
        position: 'Mathematics Teacher',
        qualification: 'M.Sc Mathematics, B.Ed',
        experience: '3-5 years',
        subjects: 'Mathematics, Physics',
        currentSalary: '25000',
        expectedSalary: '30000',
        availableFrom: '2024-02-01',
        coverLetter: 'I am passionate about teaching mathematics and would love to join your school. This is a test application.',
        references: 'Dr. ABC - Principal - abc@school.com - 9876543210',
        type: 'teaching_application'
    };

    Object.keys(testData).forEach(key => {
        formData.append(key, testData[key]);
    });

    console.log('📝 Teaching Application Data:');
    console.log(`   Full Name: ${testData.fullName}`);
    console.log(`   Email: ${testData.email}`);
    console.log(`   Phone: ${testData.phone}`);
    console.log(`   Position: ${testData.position}`);
    console.log(`   Type: ${testData.type}`);

    try {
        console.log(`📤 Submitting to: ${GOOGLE_SCRIPT_URL}`);
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });

        console.log(`📊 Response Status: ${response.status}`);
        const responseText = await response.text();
        console.log(`📋 Response: ${responseText}`);
        console.log('✅ Teaching application test completed');
        
    } catch (error) {
        console.log(`❌ Teaching application error: ${error.message}`);
    }
}

async function runAllTests() {
    console.log('🚀 Starting Form Tests...');
    console.log('📋 Google Sheet ID: 1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk');
    console.log('🔗 Check results at: https://docs.google.com/spreadsheets/d/1bkmRNswujvbKazCcHKn29Mag2SPl4g0e0z2m3AsmlXk');
    
    await testContactForm();
    await testTeachingApplication();
    
    console.log('\n✨ All form tests completed!');
    console.log('📋 Check your Google Sheet to see if data was saved.');
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    runAllTests();
}
