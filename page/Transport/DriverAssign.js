const { expect } = require('@playwright/test');

class DriverAssignPage {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    this.transportMenu = page.getByRole('link', { name: 'Transport' });
    this.masterMenu = page.getByRole('link', { name: 'Master' });
    this.driverAssignMenu = page.getByRole('link', { name: 'Driver Assign' });
  }

  async navigate() {
    await this.transportMenu.click();
    await this.masterMenu.click();
    await this.driverAssignMenu.click();
    await this.page.waitForLoadState('networkidle');
    console.log('✅ Navigated to Driver Assign page');
  }

  async assignDriver(busName, driverName) {
    // Locate the specific bus row using the bus name
    const busRow = this.page.locator(`//td[contains(., '${busName}')]/following-sibling::td//select`);
    await expect(busRow).toBeVisible();

    // Select the driver from the dropdown
    await busRow.selectOption({ label: driverName });
    console.log(`✅ Assigned driver "${driverName}" to bus "${busName}"`);
  }
}

module.exports = { DriverAssignPage };
