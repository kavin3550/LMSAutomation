const { test, expect } = require('@playwright/test');
const { AcademicActivitiesPage } = require('../page/LMS/Academics/LandingLms/AcademicActivitiesPage.js');
const testData = require('./testdata/AcademicActivitiesData.json');

test.describe('Academic Activities Automation', () => {
  for (const data of testData) {
    test(`Add Academic Activity - ${data.programmeTitle}`, async ({ page }) => {
        const addActivity = new  AcademicActivitiesPage(page);
        await addActivity.navigate()
      

      // Step 2: Navigate to Add Academic Activities
      await addActivity.addActivity(data);
    });
  }
});
