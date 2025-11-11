class AcademicActivitiesPage {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
    this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
    this.AcademicActivitiesmenu = page.locator("//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Academic')]");
    // Button
    this.addButton = page.locator("//button[normalize-space()='Add Academic Activities']")
    // Add Academic Activities 
    this.academicSessionDropdown = page.locator("//form[@id='add-academic-programme']//select[@name='academic_session']")
    this.yearInput = page.locator("//input[@id='year']");
    this.departmentDropdown = page.locator("//form[@id='add-academic-programme']//select[@name='department']");
    this.programmeTitleInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Programme Title']");
    this.programmeTypeInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Programme Type']");
    this.fromDateInput = page.locator("//input[@id='from_date']");
    this.toDateInput = page.locator("//input[@id='to_date']");
    this.resourcePersonInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Resource Person Details']");
    this.participantsInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Total No.of Participants']");
    // this.fileNameInput = page.locator("//input[@placeholder='File Name']");
    // this.chooseFileInput = page.locator("input[type='file']");
    this.submitButton = page.locator("//button[@name='academic_programme_submit']");
    this.confirmButton = page.locator("//button[normalize-space()='confirm']")
    this.okButton = page.locator("//button[normalize-space()='ok']")

  }

  async addActivity(data) {
    console.log(`🧾 Adding Activity: ${data.programmeTitle}`);
    await this.academicsMenu.click();
    await this.lmsMenu.click();
    await this.AcademicActivitiesmenu.click();
     // Open Add Activity form
     await this.addButton.click();
     await this.page.waitForTimeout(1000);

     //Fill dropdowns and inputs
    //  await this.academicsMenu.click();
    await this.academicSessionDropdown.selectOption(String(data.academicSession));
    await this.yearInput.fill(String(data.year));
    await this.departmentDropdown.selectOption(String(data.department));
    await this.programmeTitleInput.fill(String(data.programmeTitle));
    await this.programmeTypeInput.fill(String(data.programmeType));
    await this.fromDateInput.evaluate((el, value) => el.value = value, data.fromDate);
    await this.toDateInput.evaluate((el, value) => el.value = value, data.toDate);
    await this.resourcePersonInput.fill(String(data.resourcePerson));
    await this.participantsInput.fill(String(data.participants));
  

    await this.submitButton.click();
    await this.confirmButton.click();
    await this.okButton.click();

    console.log(`✅ Submitted Activity: ${data.programmeTitle}`);

    //await this.page.waitForTimeout(2000);
  }
}
  module.exports = {AcademicActivitiesPage};


  