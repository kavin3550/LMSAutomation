const { expect } = require('@playwright/test');

class BoardingPointMaster {
    constructor(page) {
        this.page = page;
                // ===== Menus =====
                // this.transportMenu = page.locator("//a[@href='#transport_menu']");
                // this.masterMenu = page.locator("//a[@href='#transportmasters']");
                // this.BoardingPointMasterMenu = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Boarding Point')])[1]");
        
                // ===== Buttons =====
                this.addNewButton = page.locator("//button[normalize-space()='Add New']");
                this.submitButton = page.locator("//button[contains(.,'Submit')]");

                 // ===== Input Fields =====
               this.BoardingNameInput = page.locator("//input[@id='boarding_name']");
               this.LandmarkInput = page.locator("//input[@id='landmark']")
}

async navigate (){
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/boarding_point_master",
        {
          waituntill:"load"
        }
    )
}

async addBoarding(BoardingName,Landmark) {
    // Navigate to Route Master
    // await this.transportMenu.click();
    // await this.masterMenu.click();
    // await this.BoardingPointMasterMenu.click();

    // Click Add New
    await this.addNewButton.click();

    // Fill route form
    await this.BoardingNameInput.fill(BoardingName);
    await this.LandmarkInput.fill(Landmark);
    
    // Submit
    await this.submitButton.click();

}

}
module.exports = {BoardingPointMaster}