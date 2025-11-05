const { test } = require('@playwright/test');
const fs = require('fs');
const { CoursePlanCompletionPage } = require('../page/LMS/Academics/LandingLms/CoursePlanCompletion.js');
const { LoginPage } = require('../page/Loginpage');

// 🔹 Load JSON data once
const rawData = fs.readFileSync('tests/testdata/CoursePlanCompletion.json');
const rows = JSON.parse(rawData);

// 🔹 This runs before every test
test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigate();
  await login.login('admin@saarcmasts.com', '123456');
});

// 🔹 Main test
test('Fill Course Plan Completion from JSON data', async ({ page }) => {
  const coursePlan = new CoursePlanCompletionPage(page);

  await coursePlan.navigate();

  for (const data of rows) {
    await coursePlan.fillCoursePlan(data);
    const errorMessages = page.locator('.invalid-feedback, .text-danger');
   // await expect(errorMessages.first()).toBeVisible();

    console.log(`❌ Validation failed for missing fields in dataset: ${JSON.stringify(data)}`);
  
  }
});
