const { test, expect } = require('@playwright/test');
const { TransportAttendanceReport } = require('../../../page/Transport/Reports/TransportAttendanceReport');

test("Verify Transport Attendance Report PDF Download", async ({ page }) => {

    // ===== Transport Attendance Report =====
    const transportAttendanceReport = new TransportAttendanceReport(page);
    await transportAttendanceReport.transportNavigate();
    await transportAttendanceReport.navigate();

});
