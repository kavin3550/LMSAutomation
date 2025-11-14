const { test } = require('@playwright/test');
const { LoginPage } = require('../../page/Loginpage');
const { AssignTripPage } = require('../../page/Transport/AssignTrip');

test('Add new trip in Assign Trip page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigate();
  await login.login('admin@saarcmasts.com', '123456');

  const assignTrip = new AssignTripPage(page);
  await assignTrip.createTrip('KPR to SNMV', '09:00 PM', '10:00 PM');
});
