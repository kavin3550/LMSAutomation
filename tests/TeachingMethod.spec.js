const { test, expect } = require('@playwright/test');
const { TeachingMethods } = require('../page/LMS/Academics/LandingLms/TeachingMethods.js');
const { LoginPage } = require('../page/Loginpage.js');


test('Teaching Methods Test', async ({ page }) => {
//loginpage page instance
  const login = new LoginPage(page);

  await login.navigate();
  await login.login('admin@saarcmasts.com', '123456');
  await page.waitForTimeout(3000);
  //teachingMethods page instance

  const teachingMethods = new TeachingMethods(page);
  await teachingMethods.addTeachingMethods();
});
