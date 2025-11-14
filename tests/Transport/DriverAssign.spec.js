const { test } = require('@playwright/test');
const { LoginPage } = require('../../page/Loginpage');
const { DriverAssignPage } = require('../../page/Transport/DriverAssign');

test('Assign driver to bus in Driver Assign page', async ({ page }) => {
  // ===== Step 1: Login =====
  const login = new LoginPage(page);
  await login.navigate();
  await login.login('admin@saarcmasts.com', '123456');

  // ===== Step 2: Navigate to Driver Assign =====
  const driverAssign = new DriverAssignPage(page);
  await driverAssign.navigate();

  // ===== Step 3: Assign drivers =====
  await driverAssign.assignDriver('Swift-TN47AQ9899-14', 'kavin kumar');
//   await driverAssign.assignDriver('NEXON-TN37AQ1234-15', 'kavin kumar');
//   await driverAssign.assignDriver('Honda-TN67AW2445-16', 'kavin kumar');
});
