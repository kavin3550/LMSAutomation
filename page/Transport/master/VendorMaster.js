const { expect } = require('@playwright/test');

class VendorMaster {
    constructor(page) {
        this.page = page;

        // ===== Menus =====
        this.transportMenu = page.locator("//a[@href='#transport_menu']");
        this.masterMenu = page.locator("//a[@href='#transportmasters']");
        this.vendorMasterMenu = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Vendor')])[2]");

        // ===== Buttons =====
        this.addNewButton = page.locator("//button[normalize-space()='Add New']");
        this.submitButton = page.locator("//button[contains(.,'Submit')]");

        // ===== Input Fields =====
        this.vendorNameInput = page.locator("//input[@id='vendor_name']");
        this.vendorContactInput = page.locator("//input[@id='vendor_contact']");
        this.vendorMailInput = page.locator("//input[@id='vendor_mail']");
        this.addressInput = page.locator("//input[@id='address']");
    }

    async addVendor(vendorName, contactNumber, mailId, address) {
        // Navigate to Vendor Master
        await this.transportMenu.click();
        await this.masterMenu.click();
        await this.vendorMasterMenu.click();
        await this.addNewButton.click();

        // Fill form
        await this.vendorNameInput.fill(vendorName);
        await this.vendorContactInput.fill(contactNumber);
        await this.vendorMailInput.fill(mailId);
        await this.addressInput.fill(address);

        // Submits
        await this.submitButton.click();
  }
}
    
module.exports = { VendorMaster };
