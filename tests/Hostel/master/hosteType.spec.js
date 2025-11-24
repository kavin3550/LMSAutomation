const { test, expect } = require('@playwright/test');
const { HostelTypePage } = require('../../../page/Hostel/master/hosteType');

test.use({ storageState: './Global/storageState.json' });

test('Hostel → Hostel Type → Add, Search, Edit & Delete', async ({ page }) => {

    const hostelType = new HostelTypePage(page);

    // Navigate only once 🔥
    await hostelType.navigate();

    const name = "HostelType " + Date.now();
    const updatedName = "Updated HostelType " + Date.now();

    // TC1 + TC2: Add → Fill → Save
    await test.step("TC1 & TC2: Add and Save Hostel Type", async () => {
        await hostelType.addHostelType(name);
        await expect(await hostelType.search(name)).toBeVisible();
    });

    // TC3: Search
    await test.step("TC3: Search Added Hostel Type", async () => {
        await expect(await hostelType.search(name)).toBeVisible();
    });

    // TC4: Edit
    await test.step("TC4: Edit Hostel Type", async () => {
        await hostelType.editHostelType(name, updatedName);
        await expect(await hostelType.search(updatedName)).toBeVisible();
    });

    // TC4: Delete same entry
    await test.step("TC4: Delete Updated Hostel Type", async () => {
        await hostelType.deleteHostelType(updatedName);
        await expect(await hostelType.search(updatedName)).toHaveCount(0);
    });

});

