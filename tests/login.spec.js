const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../page/Loginpage.js');
const { readExcel } = require('../datadriven/readexcel.js');

const loginData = readExcel('./excel/login.xlsx', 'Sheet1');

loginData.forEach((data, index) => {
    test(`login test for user ${index + 1}`, async ({ page }) => {
        if (!data.username || !data.password) {
            console.log(`Skipping test for user ${index + 1} due to missing credentials.`);
            return; // Skip this test if credentials are missing
        }

        const login = new LoginPage(page);

        await login.navigate();
        await login.login("data"); // Pass the current row of data
        await page.waitForTimeout(3000);

        // await expect(page).toHaveURL("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/principal-dashboard", { timeout: 10000 });
    });
});
