// const { test, expect } = require('@playwright/test');
// const {FloorTypePage} = require('../../../page/Hostel/master/floorType')

// test.use({ storageState: './Global/storageState.json' });

// test('Hostel → Floor Type Module → Add, Edit & Delete Floor Type (Dynamic Test Case)', async ({ page }) => {
  
//   const floor = new FloorTypePage(page);

//   await floor.navigate();
//   //await floor.openActions();

//   const oldName = "Floor " + Date.now();
//   const newName = "Updated Floor " + Date.now();

  
//   // ➕ ADD
//   await floor.addFloorType(oldName);
//   await expect(await floor.searchFloorType(oldName)).toBeVisible();

//   // ✏ EDIT
//   await floor.editFloorType(oldName, newName);
//   await expect(await floor.searchFloorType(newName)).toBeVisible();

//   // ❌ DELETE
//   await floor.deleteFloorType(newName);
//   await expect(await floor.searchFloorType(newName)).toHaveCount(0);
// });

// const { test, expect } = require('@playwright/test');
// const { FloorTypePage } = require('../../../page/Hostel/master/floorType');

// test.use({ storageState: './Global/storageState.json' });

// // Store dynamic name for all tests
// let floorName = "Floor " + Date.now();
// let updatedName = "Updated Floor " + Date.now();


// //Test Case 1 — Add new floor
// test(`Test Case 1 → Add New Floor`, async ({ page }) => {
//     const floor = new FloorTypePage(page);

//     await floor.navigate();
//     await floor.addFloorType(floorName);

//     await expect(await floor.search(floorName)).toBeVisible();
// });


// // Test Case 2 — Search that floor
// test(`Test Case 2 → Search Newly Added Floor`, async ({ page }) => {
//     const floor = new FloorTypePage(page);

//     await floor.navigate();
//     await expect(await floor.search(floorName)).toBeVisible();
// });


// // Test Case 3 — Edit that same floor
// test(`Test Case 3 → Edit Same Floor Name`, async ({ page }) => {
//     const floor = new FloorTypePage(page);

//     await floor.navigate();
//     await floor.editFloorType(floorName, updatedName);

//     await expect(await floor.search(updatedName)).toBeVisible();

//     // update global name for delete test
//     floorName = updatedName;
// });


// // Test Case 4 — Delete that floor
// test(`Test Case 4 → Delete Updated Floor`, async ({ page }) => {
//     const floor = new FloorTypePage(page);

//     await floor.navigate();
//     await floor.deleteFloorType(floorName);

//     await expect(await floor.search(floorName)).toHaveCount(0);
// });
const { test, expect } = require('@playwright/test');
const { FloorTypePage} = require('../../../page/Hostel/master/floorType')


// Use saved session
test.use({ storageState: './Global/storageState.json' });

test(`Hostel → Floor Type → Add, Search, Edit & Delete (Single Navigate Test)`, async ({ page }) => {

    const floor = new FloorTypePage(page);

    // 🔥 Only ONE TIME navigate
    await floor.navigate();

    // Dynamic names
    const oldName = "Floor " + Date.now();
    const newName = "Updated Floor " + Date.now();

    // test case 1 ADD FLOOR TYPE
    await test.step("Add New Floor Type", async () => {
        await floor.addFloorType(oldName);
        await expect(await floor.search(oldName)).toBeVisible();
    });

    // test case 2 SEARCH THE SAME FLOOR
    await test.step("Search Newly Added Floor", async () => {
        await expect(await floor.search(oldName)).toBeVisible();
    });

    // 3test case 3 EDIT THE SAME FLOOR
    await test.step("Edit Floor Type Name", async () => {
        await floor.editFloorType(oldName, newName);
        await expect(await floor.search(newName)).toBeVisible();
    });

    // test case 4 DELETE THE UPDATED FLOOR
    // await test.step("Delete Updated Floor Type", async () => {
    //     await floor.deleteFloorType(newName);
    //     await expect(await floor.search(newName)).toHaveCount(0);
    // });

});
