// page/Transport/RouteMaster.js
const { expect } = require('@playwright/test');

class RouteMaster {
    constructor(page) {
        this.page = page;

        // ===== Menus =====
        this.transportMenu = page.locator("//a[@href='#transport_menu']");
        this.masterMenu = page.locator("//a[@href='#transportmasters']");
        this.routeMasterMenu = page.locator("//div[@id='transportmasters']//li[@class='nav-item']//a[@role='tab']");

        // ===== Buttons =====
        this.addNewButton = page.locator("//button[normalize-space()='Add New']");
        this.submitButton = page.locator("//button[contains(.,'Submit')]");
        this.clearButton = page.locator("//button[contains(.,'Clear')]");

        // ===== Input Fields =====
        this.routeNameInput = page.locator("//input[@id='route_name']");
        this.startPointInput = page.locator("//input[@id='start_point']");
        this.endPointInput = page.locator("//input[@id='end_point']");
        this.descriptionInput = page.locator("//input[@id='description']");
    }

    async addRoute(routeName, startPoint, endPoint, description) {
        // Navigate to Route Master
        await this.transportMenu.click();
        await this.masterMenu.click();
        await this.routeMasterMenu.click();

        // Click Add New
        await this.addNewButton.click();

        // Fill route form
        await this.routeNameInput.fill(routeName);
        await this.startPointInput.fill(startPoint);
        await this.endPointInput.fill(endPoint);
        await this.descriptionInput.fill(description);

        // Submit
        await this.submitButton.click();

    }
}

module.exports = { RouteMaster };
