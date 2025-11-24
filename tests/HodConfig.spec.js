const { test, expect } = require('@playwright/test');
const { Hodconfig } = require('../page/LMS/HodConfig.js');
//const { LoginPage } = require('../page/loginpage.js');

test('HOD Config Test', async ({ page }) => {


  const hodconfig = new Hodconfig(page); 
  await hodconfig.navigate();
  await hodconfig.configureHod();
});
