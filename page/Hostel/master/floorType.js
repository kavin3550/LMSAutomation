// class FloorTypePage {
//     constructor(page) {
//         this.page = page;

//         this.addNewBtn = page.locator("//a[contains(@class,'clear_input')]");
//         this.floorInput = page.locator("//input[contains(@class,'floor_type_name')]");
//         this.saveBtn = page.locator("//button[normalize-space()='Save']");
//         this.confirmBtn = page.locator("(//button[normalize-space()='confirm'])[1]");
//         this.successOkBtn = page.locator("(//button[normalize-space()='ok'])[1]");
//         this.searchInput = page.locator("//input[@aria-controls='FloorTypeTable']");
//         this.editfloorInput = page.locator("(//input[@class='form-control ed_floor_type'])[1]")
//         this.editupdate = page.locator("//button[normalize-space()='Update']");
//         this.editsuccessOkBtn = page.locator("//button[normalize-space()='confirm']");
//         this.updateok = page.locator("//button[normalize-space()='ok']")
//     }

//     async navigate() {
//         await this.page.goto(
//             "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/floor-type",
//             { waitUntil: "networkidle" }
//         );
//     }

//     async addFloorType(name) {
//         await this.addNewBtn.click();
//         await this.floorInput.fill(name);
//         await this.saveBtn.click();
//         await this.confirmBtn.click();
//         await this.successOkBtn.click();
//     }

//     async searchFloorType(name) {
//         await this.searchInput.fill(name);
//         return this.page.locator(`//td[normalize-space()='${name}']`).first();
//     }


//     async openActions(name) {
//         await this.page.locator(
//             `//td[normalize-space()='${name}']/following-sibling::td//i[contains(@class,'ri-more-2-fill')]`
//         ).click();
//     }

//     async editFloorType(oldName, newName) {
//         await this.searchInput.fill(oldName);

//         await this.openActions(oldName);

//         // Click Edit (force + reliable)
//         await this.page.locator(
//             `//td[normalize-space()='${oldName}']/following-sibling::td//a[contains(@class,'editRow')]`
//         ).click({ force: true });

//         // Wait for popup to appear
//         await this.page.waitForSelector("(//input[@class='form-control ed_floor_type'])[1]", {
//             state: "visible",
//             timeout: 10000
//         });


//         // Now fill
//         await this.editfloorInput.fill(newName);

//         await this.editupdate.click();
//         await this.editsuccessOkBtn.click();
//         await this.updateok.click();
//     }


//     async deleteFloorType(name) {
//         await this.searchInput.fill(name);

//         await this.openActions(name);

//         await this.page.waitForSelector(
//             `//td[normalize-space()='${name}']/following-sibling::td//a[contains(@class,'deleteRow')]`,
//             { state: 'visible' }
//         );

//         await this.page.locator(
//             `//td[normalize-space()='${name}']/following-sibling::td//a[contains(@class,'deleteRow')]`
//         ).click();

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
        this.confirmBtn = page.locator("//button[normalize-space()='confirm']");
        this.okBtn = page.locator("//button[normalize-space()='ok']");

        this.editInput = page.locator("//input[contains(@class,'ed_floor_type')]");
        this.updateBtn = page.locator("//button[normalize-space()='Update']");
        this.updateOkBtn = page.locator("//button[normalize-space()='ok']");

        this.searchInput = page.locator("//input[@aria-controls='FloorTypeTable']");
    }

    async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/floor-type",
            { waitUntil: "networkidle" }
        );
    }

    row(name) {
        return this.page.locator(`//td[normalize-space()='${name}']`);
    }

    actionMenu(name) {
        return this.page.locator(
            `//td[normalize-space()='${name}']/following-sibling::td//i[contains(@class,'ri-more-2-fill')]`
        );
    }

    editBtn(name) {
        return this.page.locator(
            `//td[normalize-space()='${name}']/following-sibling::td//a[contains(@class,'editRow')]`
        );
    }

    // deleteBtn(name) {
    //     return this.page.locator(
    //         `//td[normalize-space()='${name}']/following-sibling::td//a[contains(@class,'deleteRow')]`
    //     );
    // }

    async addFloorType(name) {
        await this.addNewBtn.click();
        await this.floorInput.fill(name);
        await this.saveBtn.click();
        await this.confirmBtn.click();
        await this.okBtn.click();
    }

    async search(name) {
        await this.searchInput.fill(name);
        return this.row(name);
    }

    async openMenu(name) {
        await this.actionMenu(name).click({ force: true });
        await this.page.waitForTimeout(200);
    }

    async editFloorType(oldName, newName) {
        await this.searchInput.fill(oldName);
        await this.openMenu(oldName);

        await this.editBtn(oldName).click({ force: true });

        await this.editInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.editInput.fill(newName);

        await this.updateBtn.click();
        await this.confirmBtn.click();
        await this.updateOkBtn.click();
    }

    // async deleteFloorType(name) {
    //     await this.searchInput.fill(name);
    //     await this.openMenu(name);

    //     await this.deleteBtn(name).click({ force: true });

    //     await this.confirmBtn.click();
    //     await this.okBtn.click();
    // }
}

module.exports = { FloorTypePage };
