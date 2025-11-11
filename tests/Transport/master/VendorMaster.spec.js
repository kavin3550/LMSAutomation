const { test } = require('@playwright/test');
const { LoginPage } = require('../../../page/Loginpage');
const { VendorMaster } = require('../../../page/Transport/master/VendorMaster');

test('Add new vendor in Vendor Master', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');

    const vendor = new VendorMaster(page);
    await vendor.addVendor('kk Travels', '9944680920', 'mk@gmail.com', 'Coimbatore');
});
