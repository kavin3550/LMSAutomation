const { test } = require('@playwright/test');
const { AssignTripPage } = require('../../page/Transport/AssignTrip');

test('Add new trip in Assign Trip page', async ({ page }) => {
  const assignTrip = new AssignTripPage(page);
  await assignTrip.navigateAssignTrip();
  await assignTrip.createTrip('KPR to SNMV', '09:00 PM', '10:00 PM');
});
