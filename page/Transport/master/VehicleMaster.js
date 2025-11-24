const { expect } = require('@playwright/test');

class VehicleMaster {
  constructor(page) {
    this.page = page;

    // // ===== Menus =====
    // this.transportMenu = page.locator("//a[@href='#transport_menu']");
    // this.masterMenu = page.locator("//a[@href='#transportmasters']");
    // this.vehicleMasterMenu = page.locator("(//span[contains(text(),'Vehicle')])[1]");

    // ===== Buttons =====
    this.addNewButton = page.locator("(//a[@class='btn btn-primary waves-effect waves-light mr-1 btn-sm'])[1]");
    this.submitButton = page.locator("//button[contains(.,'Submit')]");

    // ===== Input Fields =====
    this.vehicleNameInput = page.locator("//input[@id='vehicle_name']");
    this.vehicleCapacityInput = page.locator("(//input[@id='Vehicle_capacity'])[1]");
    this.brandNameInput = page.locator("//input[@id='brand_name']");
    this.registrationNumberInput = page.locator("//input[@id='registration_number']");
    this.vehicleTypeDropdown = page.locator("(//select[@id='transport_type'])[1]");
    this.registrationDateInput = page.locator("(//input[@placeholder='Enter Registration Date'])[2]");
    this.taxRenewalDateInput = page.locator("(//input[@placeholder='Enter Tax Renewal Date'])[2]");
    this.rcCopyInput = page.locator("(//input[@id='rc_copy'])[1]");
    this.activeCheckbox = page.locator("//input[@id='is_active_yes']");
    this.POCCopyInput = page.locator("//input[@id='poc_copy']");
    this.insuranceNumberInput = page.locator("//input[@id='insurance_number']");
    this.insuranceStartDateInput = page.locator("(//input[@placeholder='Enter Insurance Start Date'])[2]");
    this.insuranceRenewalDateInput = page.locator("(//input[@placeholder='Enter Insurance Renewal Date'])[2]");
    this.InsuranceCopyInput = page.locator("//input[@id='insurance_copy']");
  }

  async vehicleMenu(){
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/vehicle_master",{
      waitUntill : "networkidle"
    })
  }

  async addVehicle(data) {
    // Navigate to Vehicle Master
    // await this.transportMenu.click();
    // await this.masterMenu.click();
    // await this.vehicleMasterMenu.click();
    await this.addNewButton.click();

    // Fill fields
    await this.vehicleNameInput.fill(data.vehicleName);
    await this.vehicleCapacityInput.fill(data.vehicleCapacity);
    await this.brandNameInput.fill(data.brandName);
    await this.registrationNumberInput.fill(data.registrationNumber);

    // Dropdown select
    await this.vehicleTypeDropdown.selectOption({ label: data.vehicleType });

    await this.registrationDateInput.fill(data.registrationDate);
    await this.taxRenewalDateInput.fill(data.taxRenewalDate);
    await this.rcCopyInput.setInputFiles(data.rcCopyPath);
    await this.activeCheckbox.check();
    await this.POCCopyInput.setInputFiles(data.pocCopyPath);
    await this.insuranceNumberInput.fill(data.insuranceNumber);
    await this.insuranceStartDateInput.fill(data.insuranceStartDate);
    await this.insuranceRenewalDateInput.fill(data.insuranceRenewalDate);
    await this.InsuranceCopyInput.setInputFiles(data.insuranceCopyPath);

    // Submit form
    await this.submitButton.click();
  }
}

module.exports = { VehicleMaster };


