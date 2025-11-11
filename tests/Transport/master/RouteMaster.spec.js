const { test } = require('@playwright/test');
const {LoginPage} = require('../../../page/Loginpage');
const {RouteMaster} = require('../../../page/Transport/master/RouteMaster')

test('Add new route in Route Master', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');

    const route = new RouteMaster(page);
    await route.addRoute('R_0006', 'Peelamedu', 'Singanallur', 'College Route');
});
