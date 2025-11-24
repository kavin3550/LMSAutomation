const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { DriverMaster } = require('../../../page/Transport/master/DriverMaster');


  test('Add New Driver Entry', async ({ page }) => {
   
    const dataPath = path.join(__dirname, '../../../tests/testdata/driverData.json');
    const driverData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    const driver = new DriverMaster(page);
    await driver.navigate();
    await driver.addDriver(driverData);


  });

