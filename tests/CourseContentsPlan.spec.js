const { test } = require('@playwright/test');
const { CourseContentsPlan} = require('../page/LMS/Academics/LandingLms/CourseContentsPlan.js');
const { LoginPage } = require('../page/Loginpage');
const data = require('./testdata/CourseContentsAndPlan.json');

test.describe('Course Contents and Plan Module', () => {

  for (const dataset of [...data.positive, ...data.negative]) {
    test(dataset.testName, async ({ page }) => {
      const login = new LoginPage(page);
      const coursePlan = new CourseContentsPlan(page);

      // Launch and login
      await page.goto('https://jubilant-darkness-qidltchfum5o.on-vapor.com/login');
      await login.navigate();
      await login.login('admin@saarcmasts.com','123456');

      // Navigate and fill form
      await coursePlan.navigate();
      await coursePlan.fillCourseContentsPlan(dataset);
      await coursePlan.verifyResult(dataset);
    });
  }

});
