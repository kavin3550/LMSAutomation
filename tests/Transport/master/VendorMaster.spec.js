const { test } = require('@playwright/test');
const { VendorMaster } = require('../../../page/Transport/master/VendorMaster');

test('Add new vendor in Vendor Master', async ({ page }) => {
    const vendor = new VendorMaster(page);
    await vendor.VendorMenu();
    await vendor.addVendor('kk Travels', '9944680920', 'mk@gmail.com', 'Coimbatore');
});
