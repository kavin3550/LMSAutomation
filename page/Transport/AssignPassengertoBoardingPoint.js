const { expect } = require('@playwright/test');

class PassengerDetailsPage {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    this.transportMenu = page.locator("//a[@href='#transport_menu']");
    //this.masterMenu = page.locator("//a[@href='#transportmasters']");
    this.AssignpassengertoboardingPoint = page.locator("(//span[contains(text(),'Assign passenger to boarding')])[1]")
    this.AssignPassenger = page.locator("(//button[@title='Assign Passenger'])[6]")

    // ===== Passenger Details Modal =====
    this.studentRadio = page.locator("(//input[@value='student'])[1]");
    this.RegisterNo = page.locator("(//input[@value='register'])[1]");
    this.enterIdInput = page.locator("(//textarea[@id='remarks'])[1]");
    this.addPassengerBtn = page.locator("//button[@id='addPassengerBtn']");
    this.finalizeSaveBtn = page.locator("//button[@id='saveAllPassengers']")


  }

  // ===== Function to Add Passenger =====
  async addPassenger(data) {
    console.log(`Adding Passenger: ${data.passengerName}`);

    // Navigate
    await this.transportMenu.click();
    await this.AssignpassengertoboardingPoint.click();
    await this.AssignPassenger.click();
    await this.studentRadio.click();
    await this.RegisterNo.click();
    await this.enterIdInput.fill(data.passengerId);
    await this.addPassengerBtn.click();
    await this.finalizeSaveBtn.click();

 

    console.log(`✅ Passenger Added Successfully: ${data.passengerName}`);
  }
}

module.exports = { PassengerDetailsPage };
