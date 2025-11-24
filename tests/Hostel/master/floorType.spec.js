const { test, expect } = require('@playwright/test');
const { FloorTypePage } = require('../../../page/Hostel/master/floortype');

test.use({ storageState: './Global/storageState.json' });

test('Hostel → Floor Type Module → Add, Edit & Delete Floor Type (Dynamic Test Case)', async ({ page }) => {
  
  const floor = new FloorTypePage(page);

  await floor.navigate();
  await floor.openActions();

  const oldName = "Floor " + Date.now();
  const newName = "Updated Floor " + Date.now();

  
  // ➕ ADD
  await floor.addFloorType(oldName);
  await expect(await floor.searchFloorType(oldName)).toBeVisible();

  // ✏ EDIT
  await floor.editFloorType(oldName, newName);
  await expect(await floor.searchFloorType(newName)).toBeVisible();

  // ❌ DELETE
  await floor.deleteFloorType(newName);
  await expect(await floor.searchFloorType(newName)).toHaveCount(0);
});
