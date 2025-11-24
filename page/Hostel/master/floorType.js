// // class FloorTypePage {
// //     constructor(page) {
// //         this.page = page;

// //         this.addNewBtn = page.locator("//a[contains(@class,'clear_input')]");
// //         this.floorInput = page.locator("//input[contains(@class,'floor_type_name')]");
// //         this.saveBtn = page.locator("//button[normalize-space()='Save']");
// //         this.confirmBtn = page.locator("//button[normalize-space()='Confirm']");
// //         this.successOkBtn = page.locator("//button[normalize-space()='OK']");
// //         this.searchInput = page.locator("//input[@aria-controls='FloorTypeTable']");
// //     }

// //     async navigate() {
// //         await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/floor-type", {
// //             waitUntil: "load"
// //         });
// //     }

// //     async addFloorType(name) {
// //         await this.addNewBtn.click();
// //         await this.floorInput.fill(name);
// //         await this.saveBtn.click();

// //         await this.confirmBtn.click();      // Popup Confirm
// //         await this.successOkBtn.click();    // Success OK

// //         await this.searchInput.click();
// //     }

// //     async searchFloorType(name) {
// //         await this.searchInput.fill(name);
// //         return this.page.getByText(name).first();
// //     }
// // }

// // module.exports = { FloorTypePage };

// class FloorTypePage {
//     constructor(page) {
//         this.page = page;

//         this.addNewBtn = page.locator("//a[contains(@class,'clear_input')]");
//         this.floorInput = page.locator("//input[contains(@class,'floor_type_name')]");
//         this.saveBtn = page.locator("//button[normalize-space()='Save']");
//         this.confirmBtn = page.locator("(//button[normalize-space()='confirm'])[1]");
//         this.successOkBtn = page.locator("(//button[normalize-space()='ok'])[1]");
//         this.searchInput = page.locator("//input[@aria-controls='FloorTypeTable']");
//     }

//     async navigate() {
//         await this.page.goto(
//             "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/floor-type",
//             { waitUntil: "load" }
//         );
//     }

//     async addFloorType(name) {
//         await this.addNewBtn.click();
//         await this.floorInput.fill(name);
//         await this.saveBtn.click();
//         await this.confirmBtn.click();
//         await this.successOkBtn.click();
//     }

//     async openActions(name) {
//         const menuBtn = this.page.locator(
//             `(//i[@class='ri-more-2-fill'])[8]`
//         );
//         await menuBtn.click();
//     }

//     async searchFloorType(name) {
//         await this.searchInput.fill(name);
//         return this.page.getByText(name).first();
//     }

//     // Open the three-dot actions menu
   

//     // Edit Floor Type
//     async editFloorType(oldName, newName) {
//         await this.searchInput.fill(oldName);
//         await this.openActions(oldName);

//         await this.page.getByText("Edit").click();

//         await this.floorInput.fill(newName);
//         await this.saveBtn.click();
//         await this.confirmBtn.click();
//         await this.successOkBtn.click();
//     }

//     // Delete Floor Type
//     async deleteFloorType(name) {
//         await this.searchInput.fill(name);
//         await this.openActions(name);

//         await this.page.getByText("Delete").click();
//         await this.confirmBtn.click();
//         await this.successOkBtn.click();
//     }
// }

// module.exports = { FloorTypePage };
class FloorTypePage {
    constructor(page) {
        this.page = page;

        this.addNewBtn = page.locator("//a[contains(@class,'clear_input')]");
        this.floorInput = page.locator("//input[contains(@class,'floor_type_name')]");
        this.saveBtn = page.locator("//button[normalize-space()='Save']");
        this.confirmBtn = page.locator("(//button[normalize-space()='confirm'])[1]");
        this.successOkBtn = page.locator("(//button[normalize-space()='ok'])[1]");
        this.searchInput = page.locator("//input[@aria-controls='FloorTypeTable']");
    }

    async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/floor-type",
            { waitUntil: "networkidle" }
        );
    }

    async addFloorType(name) {
        await this.addNewBtn.click();
        await this.floorInput.fill(name);
        await this.saveBtn.click();
        await this.confirmBtn.click();
        await this.successOkBtn.click();
    }

    async searchFloorType(name) {
        await this.searchInput.fill(name);
        return this.page.locator(`//td[normalize-space()='${name}']`).first();
    }

    // ⭐ Correct Dynamic Action Menu Locator (Based on Your Screenshot)
    async openActions(name) {
        const menuBtn = this.page.locator(
            `//td[normalize-space()='${name}']/following-sibling::td//i[contains(@class,'ri-more-2-fill')]`
        );
        await menuBtn.click();
    }

    async editFloorType(oldName, newName) {
        await this.searchInput.fill(oldName);

        await this.openActions(oldName);
        await this.page.getByText("Edit").click();

        await this.floorInput.fill(newName);
        await this.saveBtn.click();
        await this.confirmBtn.click();
        await this.successOkBtn.click();
    }

    async deleteFloorType(name) {
        await this.searchInput.fill(name);

        await this.openActions(name);
        await this.page.getByText("Delete").click();

        await this.confirmBtn.click();
        await this.successOkBtn.click();
    }
}

module.exports = { FloorTypePage };

