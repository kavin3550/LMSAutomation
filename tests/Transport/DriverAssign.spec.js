const { test } = require('@playwright/test');
const { DriverAssignPage } = require('../../page/Transport/DriverAssign');

test('Assign driver to bus in Driver Assign page', async ({ page }) => {



});

const testData = [
  { busName: "Swift-TN47AQ8989-14", driverName: "jj" },
  { busName: "NEXON-TN37AQ1234-15", driverName: "kavin kumar" },
  { busName: "Honda-TN67AW2445-16", driverName: "Janani S" }
];

test('Assign driver dynamically to Bus', async ({ page }) => {


  // ===== Step 2: Navigate to Driver Assign =====
  const driverAssign = new DriverAssignPage(page);
  await driverAssign.DriverAssignnavigate();

  // ===== Step 3: Assign drivers dynamically =====
  for (const data of testData) {
    await driverAssign.selectDriver(data.busName, data.driverName);
  }

});
