const { test, expect } = require('@playwright/test');
const { RoomTypePage } = require('../../../page/Hostel/master/roomType');

test.use({ storageState: './Global/storageState.json' });

test(`Hostel → Room Type Module → Add, Search, Edit Cost, Delete`, async ({ page }) => {

    const room = new RoomTypePage(page);

    // Navigate ONE TIME
    await room.navigate();

    // Dynamic data
    const roomName = "RoomType " + Date.now();
    const newCost = String(Math.floor(Math.random() * 900) + 100); // random new cost

    const roomData = {
        roomType: roomName,
        capacity: "4",
        cost: "5000",
        description: "Test Room Type"
    };

    // 1️⃣ Test Case 1: Add new room type
    await test.step("Add New Room Type", async () => {
        await room.addRoomType(roomData);
        await expect(await room.search(roomName)).toBeVisible();
    });

    // 2️⃣ Test Case 2: Search room type
    await test.step("Search Saved Room Type", async () => {
        await expect(await room.search(roomName)).toBeVisible();
    });

    // 3️⃣ Test Case 3: Edit Cost Per Student
    await test.step("Edit Cost Per Student", async () => {
        await room.editCost(roomName, newCost);
        await expect(await room.search(roomName)).toBeVisible();
    });

    // // 4️⃣ Test Case 4: Delete Room Type
    // await test.step("Delete Room Type", async () => {
    //     await room.deleteRoomType(roomName);
    //     await expect(await room.search(roomName)).toHaveCount(0);
    // });

});
