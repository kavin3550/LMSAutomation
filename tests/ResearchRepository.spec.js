const { test } = require('@playwright/test');
//const { LoginPage } = require('../page/Loginpage');
const { ResearchRepository } = require('../page/LMS/Academics/LandingLms/ResearchRepository');
const testData = require('./testdata/PhdInfoData.json');

test('Research Repository - Select Faculty and Submit', async ({ page }) => {
    for (const data of testData) {
       

        const researchRepo = new ResearchRepository(page);
        await researchRepo.researchMenu();
        // --- Pass data object here ---
        await researchRepo.addResearchRepository(data);
    }
});
