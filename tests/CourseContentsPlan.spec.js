const { test } = require('@playwright/test');
const { CourseContentsPlan} = require('../page/LMS/Academics/LandingLms/CourseContentsPlan.js');
const data = require('./testdata/CourseContentsAndPlan.json');

test.describe('Course Contents and Plan Module', () => {

  for (const dataset of [...data.positive, ...data.negative]) {
    test(dataset.testName, async ({ page }) => {
      //const login = new LoginPage(page);
      const coursePlan = new CourseContentsPlan(page);
      // Navigate and fill form
      await coursePlan.navigate();
      await coursePlan.fillCourseContentsPlan(dataset);
      await coursePlan.verifyResult(dataset);
    });
  }

});
