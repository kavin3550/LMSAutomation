const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { LoginPage } = require('../../../page/Loginpage');
const { DriverMaster } = require('../../../page/Transport/master/DriverMaster');

test.describe('Driver Master Module', () => {
  test('Add New Driver Entry', async ({ page }) => {
    // ==== Step 1: Login ====
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(2000);

    // ==== Step 2: Load Test Data ====
    const dataPath = path.join(__dirname, '../../../tests/testdata/driverData.json');
    const driverData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // ==== Step 3: Run Add Driver Flow ====
    const driver = new DriverMaster(page);
    await driver.addDriver(driverData);


  });
});
