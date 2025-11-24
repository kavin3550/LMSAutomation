class RoomTypePage {
    constructor(page) {
        this.page = page;

        // Add New Button
        this.addNewBtn = page.locator("//a[contains(@class,'clear_input') or contains(text(),'Add New')]");

        // Add form fields
        this.roomTypeInput = page.locator("//div[@id='AddroomTypeRight']//input[@placeholder='Room Type']");
        this.studentCapacityInput = page.locator("//div[@id='AddroomTypeRight']//input[@placeholder='Student Capacity']");
        this.costPerStudentInput = page.locator("//div[@id='AddroomTypeRight']//input[@placeholder='Cost Per Student']");
        this.descriptionInput = page.locator("//textarea[@placeholder='Enter Description']");
        this.saveBtn = page.locator("//button[normalize-space()='Save']");
        this.confirmBtn = page.locator("//button[normalize-space()='confirm']");
        this.okBtn = page.locator("//button[normalize-space()='ok']");

        // Edit fields
        this.editCostInput = page.locator("//input[@class='form-control ed_cost_per_student']");
        this.updateBtn = page.locator("//button[normalize-space()='Update']");
        this.updateOkBtn = page.locator("//button[normalize-space()='ok']");
       //this.editBtnok = page.locator("(//button[normalize-space()='ok'])[1]")

        // Search
        this.searchInput = page.locator("//input[@aria-controls='RoomTypeTable']");
    }

    async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/room-type",
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

    deleteBtn(name) {
        return this.page.locator(
            `//td[normalize-space()='${name}']/following-sibling::td//a[contains(@class,'deleteRow')]`
        );
    }

    // ADD ROOM TYPE
    async addRoomType(data) {
        await this.addNewBtn.click();
        await this.roomTypeInput.fill(data.roomType);
        await this.studentCapacityInput.fill(data.capacity);
        await this.costPerStudentInput.fill(data.cost);
        await this.descriptionInput.fill(data.description);

        await this.saveBtn.click();
        await this.confirmBtn.click();
        await this.okBtn.click();
    }

    // SEARCH
    async search(name) {
        await this.searchInput.fill(name);
        return this.row(name);
    }

    async openMenu(name) {
        await this.actionMenu(name).click({ force: true });
        await this.page.waitForTimeout(200);
    }

    // EDIT COST ONLY
    async editCost(name, newCost) {
        await this.searchInput.fill(name);

        await this.openMenu(name);
        await this.editBtn(name).click({ force: true });

        await this.editCostInput.waitFor({ state: "visible" });

        await this.editCostInput.fill(newCost);

        await this.updateBtn.click();
        await this.confirmBtn.click();
        await this.page.waitForTimeout(3000);

        await this.updateOkBtn.click();
       //await this.editBtnok.click();
    }

    // DELETE ROOM TYPE
    // async deleteRoomType(name) {
    //     await this.searchInput.fill(name);

    //     await this.openMenu(name);

    //     await this.deleteBtn(name).click({ force: true });

    //     await this.confirmBtn.click();
    //     await this.okBtn.click();
    // }
}

module.exports = { RoomTypePage };
