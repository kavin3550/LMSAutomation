const { test, expect } = require('@playwright/test');
const { Hodconfig } = require('../page/LMS/HodConfig.js');
const { LoginPage } = require('../page/loginpage.js');

test('HOD Config Test', async ({ page }) => {
  const login = new LoginPage(page);
  const data = { username: 'admin@saarcmasts.com', password: '123456' };

  await login.navigate();
  await login.login(data);
  await page.waitForTimeout(3000);

  const hodconfig = new Hodconfig(page); 
  await hodconfig.configureHod();
});
