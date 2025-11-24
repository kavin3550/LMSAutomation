const { chromium } = require('@playwright/test');

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Go to login page
  await page.goto('https://jubilant-darkness-qidltchfum5o.on-vapor.com/login');

  // Login
  await page.locator("(//span[@class='radio-tile'])[3]").click();
  await page.locator("//input[@placeholder='Enter username']").fill('admin@saarcmasts.com');
  await page.locator("//input[@placeholder='Enter password']").fill('123456');
  await page.locator("//button[normalize-space()='Sign In']").click();

  // Wait for page to fully load after login
  await page.waitForLoadState('networkidle', { timeout: 60000 });

  // Save session
  await page.context().storageState({ path: './Global/storageState.json' });

  const fs = require('fs');
  if (!fs.existsSync('./Global/storageState.json')) {
    throw new Error('Storage state file was not created');
  }

  await browser.close();
}

if (require.main === module) {
  globalSetup()
    .then(() => {
      console.log('Storage state saved successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Error saving storage state:', error);
      process.exit(1);
    });

} else {
  module.exports = globalSetup;
}
