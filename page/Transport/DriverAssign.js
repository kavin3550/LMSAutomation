const { expect } = require('@playwright/test');

class DriverAssignPage {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    // this.transportMenu = page.locator("//a[@href='#transport_menu']");
    // this.driverAssignMenu = page.locator("//span[normalize-space()='Driver Assign']");
    this.driverSelectdropdown = page.locator("(//select[@name='driver_id'])[1]")
     this.alertPopOkButton = page.locator("//button[normalize-space()='confirm']")
     this.alertSuccessOkButton = page.locator("//button[normalize-space()='ok']")
  }
  async DriverAssignnavigate(){
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/driver_assign",{
      waitUntil : "networkidle"
    })
  }

  async navigate() {
    // await this.transportMenu.click();
    // await this.driverAssignMenu.click();
    await this.driverSelectdropdown.selectOption({ label: 'jj' });
     await this.alertPopOkButton.click();
     await this.alertSuccessOkButton.click();

    await this.driverSelectdropdown.fill('jj')
   
  }

  
  
}

module.exports = { DriverAssignPage };
