const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { LoginPage } = require('../../page/Loginpage');
const { PassengerDetailsPage } = require('../../page/Transport/AssignPassengertoBoardingPoint');


test.describe('Passenger Master Module', () => {
  test('Add Passenger Details', async ({ page }) => {
    // Step 1: Login
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(2000);

    // Step 2: Load Passenger Data
    const dataPath = path.join(__dirname, '../../tests/testdata/passengerData.json');
    const passengers = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Step 3: Add Passengers
    const passengerPage = new PassengerDetailsPage(page);

    for (const data of passengers) {
      await passengerPage.addPassenger(data);
    }
  });
});
