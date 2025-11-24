const { test } = require('@playwright/test');
const {RouteMaster} = require('../../../page/Transport/master/RouteMaster')

test('Add new route in Route Master', async ({ page }) => {
    const route = new RouteMaster(page);
    await route.navigate();
    await route.addRoute('R_0006', 'Peelamedu', 'Singanallur', 'College Route');
});
