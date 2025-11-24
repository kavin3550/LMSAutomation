const { expect } = require('@playwright/test');
const path = require('path');

class DriverMaster {
  constructor(page) {
    this.page = page;

    // ===== Buttons =====
    this.addNewButton = page.locator("(//a[@class='btn btn-primary waves-effect waves-light mr-1 btn-sm'])[1]");
    this.saveButton = page.locator("(//button[normalize-space()='Save'])[1]");

    // ===== Input Fields =====
    this.firstNameInput = page.locator("//input[@id='first_name']");
    this.lastNameInput = page.locator("(//input[@placeholder='Last Name'])[1]");
    this.genderMale = page.locator("(//input[@value='m'])[1]");
    this.genderFemale = page.locator("(//input[@value='f'])[1]");
    this.dateOfBirthInput = page.locator("//input[@id='dob']");
    this.mobileInput = page.locator("(//input[@id='mobile'])[1]");
    this.officialEmailInput = page.locator("//input[@id='official_email']");
    this.aadhaarNoInput = page.locator("//input[@id='aadhar_no']");
    this.currentAddressInput = page.locator("(//textarea[@placeholder='Current Address'])[1]");
    this.stateDropdown = page.locator("(//div[@role='listbox'])[1]");
    this.searchDropdown = page.locator("(//div[@class='choices__list choices__list--dropdown'])[1]")
    this.pincodeInput = page.locator("//input[@id='pincode']");
    this.bloodGroupDropdown = page.locator("//select[@name='bloodgroup']");
    this.personalEmailInput = page.locator("//input[@id='personal_email']");
    this.districtDropdown = page.locator("(//div[@class='choices__item choices__placeholder choices__item--selectable'][normalize-space()='-- District --'])[1]");
    this.searchDistrictDropdown = page.locator("(//div[@class='choices__list choices__list--dropdown'])[2]")
    this.bankNameInput = page.locator("(//input[@placeholder='Bank Name'])[1]");
    this.accountNumberInput = page.locator("//input[@id='account_number']");
    this.ifscCodeInput = page.locator("//input[@id='ifsc_code']");
    this.panNumberInput = page.locator("//input[@id='pan_number']");
    this.epfNumberInput = page.locator("//input[@id='epf_number']");
    this.licenseNumberInput = page.locator("//input[@id='licence_no']");

    // ===== File Uploads =====
    this.aadhaarCopyInput = page.locator("(//input[@id='aadhar_copy'])[1]");
    this.licenseCopyInput = page.locator("(//input[@id='license_copy'])[1]");
    this.photoUploadInput = page.locator("(//span[@class='drop-zone__prompt'])[1]/ancestor::div[contains(@class,'drop-zone')]//input[@type='file']");
    // this.cropphotoUploadInput = page.locator("//button[@id='crop']");

  }
  async navigate(){
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/transport/driver_master",{
      waitUntil:"load"
    });
  }
   
  async addDriver(data) {
    // Navigate
    // await this.transportMenu.click();
    // await this.masterMenu.click();
    // await this.driverMasterMenu.click();
    await this.addNewButton.click();

    await this.photoUploadInput.setInputFiles(path.resolve(data.photoPath));
    await this.page.locator("//button[normalize-space(text())='Crop']").click();
    




    // Fill inputs
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    if (data.gender === "Male") await this.genderMale.check();
    else await this.genderFemale.check();

    await this.dateOfBirthInput.fill(data.dateOfBirth);
    await this.mobileInput.fill(data.mobile);
    await this.officialEmailInput.fill(data.officialEmail);
    await this.aadhaarNoInput.fill(data.aadhaarNo);
    await this.currentAddressInput.fill(data.currentAddress);

   // Click to open dropdown
await this.stateDropdown.click();

// Wait for dropdown options to appear and click matching text
await this.page.locator(`//div[contains(@class,'choices__item') and text()='${data.state}']`).click();

    await this.pincodeInput.fill(data.pincode);
// Click to open the Blood Group dropdown
await this.bloodGroupDropdown.click();

// Click the option that matches your data

     await this.bloodGroupDropdown.selectOption(String(data.bloodGroup));

    await this.personalEmailInput.fill(data.personalEmail);
    // Click to open the custom dropdown
await this.districtDropdown.click();

// Wait for the dropdown list to appear and click the matching option
await this.page.locator(`//div[contains(@class,'choices__item') and normalize-space(text())='${data.district}']`).click();

    //await this.districtDropdown.selectOption(String(data.district));
    await this.bankNameInput.fill(data.bankName);
    await this.accountNumberInput.fill(data.accountNumber);
    await this.ifscCodeInput.fill(data.ifscCode);
    await this.panNumberInput.fill(data.panNumber);
    await this.epfNumberInput.fill(data.epfNumber);
    await this.licenseNumberInput.fill(data.licenseNumber);

    // Upload files (using path.resolve to avoid ENOENT errors)
    await this.aadhaarCopyInput.setInputFiles(path.resolve(data.aadhaarCopyPath));
    await this.licenseCopyInput.setInputFiles(path.resolve(data.licenseCopyPath));
    //await this.photoUploadInput.setInputFiles(path.resolve(data.photoPath));
    

    // Submit
    await this.saveButton.click();
  }
}

module.exports = { DriverMaster };
