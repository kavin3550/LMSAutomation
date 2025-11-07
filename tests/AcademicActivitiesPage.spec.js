const { test, expect } = require('@playwright/test');
const { AcademicActivitiesPage } = require('../page/LMS/Academics/LandingLms/AcademicActivitiesPage.js');
const { LoginPage } = require('../page/Loginpage');
const testData = require('./testdata/AcademicActivitiesData.json');

test.describe('Academic Activities Automation', () => {
  for (const data of testData) {
    test(`Add Academic Activity - ${data.programmeTitle}`, async ({ page }) => {
      const login = new LoginPage(page);
      const addActivity = new  AcademicActivitiesPage(page);

      // Step 1: Login
      await login.navigate();
      await login.login('admin@saarcmasts.com', '123456');
      await page.waitForTimeout(2000);

      // Step 2: Navigate to Add Academic Activities
      await addActivity.addActivity(data);
    });
  }
});
