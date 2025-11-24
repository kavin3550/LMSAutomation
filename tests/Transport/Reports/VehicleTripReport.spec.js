// tests/Transport/vehicleTripReport.spec.js
const { test, expect } = require('@playwright/test');
const { vehicleTripReport } = require('../../../page/Transport/Reports/VehicleTripReport');

test("Verify Vehicle Trip Report PDF Download", async ({ page }) => {



    // Vehicle Trip Report Object
    const report = new vehicleTripReport(page);
    await report.navigateVehicle();
    // Execute the report flow
    await report.navigate();

  
});


