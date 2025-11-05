const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage.js');
const { AdminLms } = require('../page/LMS/AdminLms.js'); // ✅ Fix path as needed

test('new leave', async ({ page }) => {
    const login = new LoginPage(page);
    const adminLms = new AdminLms(page); 

    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(3000);

    await adminLms.newbutton();
});
