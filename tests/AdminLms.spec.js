const { test, expect } = require('@playwright/test');
const { AdminLms } = require('../page/LMS/AdminLms.js'); // ✅ Fix path as needed

test('new leave', async ({ page }) => {
  
    const adminLms = new AdminLms(page); 
    await adminLms.newbutton();
    // await page.waitForTimeout(3000);
    // await adminLms.newbutton();
});
