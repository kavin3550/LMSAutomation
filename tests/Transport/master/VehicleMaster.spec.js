const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { LoginPage } = require('../../../page/Loginpage');
const { VehicleMaster } = require('../../../page/Transport/master/VehicleMaster');

test.describe('Vehicle Master Module', () => {

  test('Add New Vehicle Entry', async ({ page }) => {
    // ==== Step 1: Login ====
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(2000);

    // ==== Step 2: Load JSON Test Data ====
    const dataPath = path.join(__dirname, '../../../tests/testdata/vehicleData.json');
    const vehicleData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // ==== Step 3: Run Add Vehicle Flow ====
    const vehicle = new VehicleMaster(page);
    await vehicle.addVehicle(vehicleData);
  });

});



