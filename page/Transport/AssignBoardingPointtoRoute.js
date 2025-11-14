const { expect } = require('@playwright/test');

class AssignBoardingPointToRoute {
    constructor(page) {
        this.page = page;

        // ===== Menus =====
        this.transportMenu = page.locator("//a[@href='#transport_menu']");
        this.assignBoardingPointMenu = page.locator("(//span[contains(text(),'Assign Boarding Point to')])[1]");
        this.boardinglist = page.locator("(//div)[175]")
        this.boardingpointlist = page.locator("(//div[@id='choices--boarding_id_16-item-choice-4'])[1]")

        // ===== Locators =====
        this.tableRows = page.locator("//table/tbody/tr");
        this.saveButton = page.locator("(//button[normalize-space()='Submit'])[1]");
    }

    /**
     * Assign boarding points to a specific route
     * @param {string} routeName  Route name like 'R1-R_0003'
     * @param {Array<string>} boardingPoints  Array of boarding points to select
     */
    async assignBoardingPoints(routeName, boardingPoints = []) {
        // Navigate to page
        await this.transportMenu.click();
        await this.assignBoardingPointMenu.click();

        // Wait for table visible
        await this.boardinglist.click();
        await this.boardingpointlist.click();
    await this.saveButton.click();


        // Locate the row with the specific route name
        // const row = this.page.locator(`//td[contains(., '${routeName}')]/ancestor::tr`);
        // await expect(row).toBeVisible();

        // Click input box inside that row and select each boarding point
        // for (const point of boardingPoints) {
        //     const inputBox = row.locator(".//input[contains(@placeholder,'Select') or @role='combobox']");
        //     await inputBox.click();
        //     await this.page.locator(`//div[contains(text(),'${point}')]`).click();
        // }

        // Save
        
    }
}

module.exports = { AssignBoardingPointToRoute };
