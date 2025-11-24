// CommonHostelMenu.js

class CommonHostelMenu {
    constructor(page) {
        this.page = page;

        this.hostelMenu = page.getByText("Hostel", { exact: true });
        this.masterMenu = page.locator("//a[@href='#HostelMaster']")

        this.floorTypeMenu = page.locator("//div[@id='HostelMaster']//li[1]")
        this.roomTypeMenu = page.locator("//a[normalize-space()='Room Type']")
        this.hostelTypeMenu = page.locator("//a[normalize-space()='Hostel Type']")
    }

    async goToFloorType() {
        await this.hostelMenu.click();
        await this.masterMenu.click();
        await this.floorTypeMenu.click();
    }
}

module.exports = { CommonHostelMenu };
