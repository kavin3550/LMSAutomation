class HostelTypePage {
    constructor(page) {
        this.page = page;

        // Add popup
        this.addNewBtn = page.locator("//a[contains(@class,'clear_input') or contains(text(),'Add New')]");
        this.hostelTypeInput = page.locator("//div[@id='HostelTypeModals']//input[@placeholder='Hostel Type']");
        this.saveBtn = page.locator("//button[normalize-space()='Save']");

        // jConfirm Popup Buttons
        this.confirmBtn = page.locator("//button[normalize-space()='confirm']");
        this.okBtn = page.locator("//button[normalize-space()='ok']");

        // Edit popup
      this.editHostelTypeInput = page.locator("//div[@id='EditHostelTypeModals']//input[@placeholder='Hostel Type']");

        this.updateBtn = page.locator("//button[normalize-space()='Update']");
         this.confirmBtn = page.locator("//button[normalize-space()='confirm']");
        this.okBtn = page.locator("//button[normalize-space()='ok']");
        //this.editok = page.locator("//button[normalize-space()='ok']");

        // Search bar
        this.searchInput = page.locator("//input[@aria-controls='HostelTypeTable']");
    }

    // Navigate once
    async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/hostel/hostel-type",
            { waitUntil: "networkidle" }
        );
    }

    // Helper locators
    row(name) {
        return this.page.locator(`//td[normalize-space()='${name}']`);
    }

    menu(name) {
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

    async openMenu(name) {
        await this.menu(name).click({ force: true });
        await this.page.waitForTimeout(200);
    }

    // TC1 + TC2: Add → Fill → Save
    async addHostelType(name) {
        await this.addNewBtn.click();
        await this.hostelTypeInput.fill(name);
        await this.saveBtn.click();

        if (await this.confirmBtn.isVisible()) await this.confirmBtn.click();
        if (await this.okBtn.isVisible()) await this.okBtn.click();
    }

    // TC3: Search saved name
    async search(name) {
        await this.searchInput.fill(name);
        return this.row(name);
    }

    // TC4: Edit existing hostel type
    async editHostelType(oldName, newName) {
        await this.searchInput.fill(oldName);

        await this.openMenu(oldName);
        await this.editBtn(oldName).click({ force: true });

       //await this.editHostelTypeInput.waitFor({ state: "visible" });
        await this.editHostelTypeInput.fill(newName);

        await this.updateBtn.click();
       // await this.editok.click();
         if (await this.confirmBtn.isVisible()) await this.confirmBtn.click();
         if (await this.okBtn.isVisible()) await this.okBtn.click();
    }

    // TC4: Delete hostel type
    async deleteHostelType(name) {
        await this.searchInput.fill(name);

        await this.openMenu(name);
        await this.deleteBtn(name).click({ force: true });

        if (await this.confirmBtn.isVisible()) await this.confirmBtn.click();
        if (await this.okBtn.isVisible()) await this.okBtn.click();
    }
}

module.exports = { HostelTypePage };
