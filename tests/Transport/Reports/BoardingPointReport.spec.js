const { test, expect } = require('@playwright/test');
const { BoardingPointReport } = require('../../../page/Transport/Reports/BoardingPointReport');

test("Verify Boarding Point Report PDF Download", async ({ page }) => {
    
    // ===== Boarding Point Report =====
    const boardingPointReport = new BoardingPointReport(page);
    await boardingPointReport.navigateBoardingPointReport();
    await boardingPointReport.navigate();

});

