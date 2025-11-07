const { test } = require('@playwright/test');
const { LoginPage } = require('../page/Loginpage');
const { ResearchRepository } = require('../page/LMS/Academics/LandingLms/ResearchRepository');
const testData = require('./testdata/PhdInfoData.json');

test('Research Repository - Select Faculty and Submit', async ({ page }) => {
    for (const data of testData) {
        const login = new LoginPage(page);
        await login.navigate();
        await login.login('admin@saarcmasts.com', '123456');
        await page.waitForTimeout(3000);

        const researchRepo = new ResearchRepository(page);
        // --- Pass data object here ---
        await researchRepo.addResearchRepository(data);
    }
});
