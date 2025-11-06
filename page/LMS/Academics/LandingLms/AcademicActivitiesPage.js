class AcademicActivitiesPage {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
    this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
    this.coursePlanCompletionFeedbackMenu = page.locator("//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Academic')]");
    // Button
    this.addButton = page.locator("//button[normalize-space()='Add Academic Activities']")
    // Add Academic Activities 
    this.academicSessionDropdown = page.locator("//form[@id='add-academic-programme']//select[@name='academic_session']")
    this.yearInput = page.locator("//input[@id='year']");
    this.departmentDropdown = page.locator("//form[@id='add-academic-programme']//select[@name='department']");
    this.programmeTitleInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Programme Title']");
    this.programmeTypeInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Programme Type']");
    this.fromDateInput = page.locator("//div[@class='flatpickr-calendar animate open arrowTop arrowLeft']//span[@aria-label='November 6, 2025'][normalize-space()='6']");
    this.toDateInput = page.locator("//div[@class='flatpickr-calendar animate open arrowTop arrowLeft']//span[@aria-label='November 6, 2025'][normalize-space()='6']");
    this.resourcePersonInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Resource Person Details']");
    this.participantsInput = page.locator("//form[@id='add-academic-programme']//input[@placeholder='Total No.of Participants']");
    // this.fileNameInput = page.locator("//input[@placeholder='File Name']");
    // this.chooseFileInput = page.locator("input[type='file']");
    this.submitButton = page.locator("//button[@name='academic_programme_submit']");

  }

  async addActivity(data) {
    console.log(`🧾 Adding Activity: ${data.programmeTitle}`);
     // Open Add Activity form
     await this.addButton.click();
     await this.page.waitForTimeout(1000);

     //Fill dropdowns and inputs
     await this.academicSessionDropdown.selectOption({label:data.academicSessionDropdown});
     await this.yearInput.fill(data.year);
     await this.departmentDropdown.selectOption({ label: data.department });
    await this.programmeTitleInput.fill(data.programmeTitle);
    await this.programmeTypeInput.fill(data.programmeType);
    await this.fromDateInput.fill(data.fromDate);
    await this.toDateInput.fill(data.toDate);
    await this.resourcePersonInput.fill(data.resourcePerson);
    await this.participantsInput.fill(data.participants);

    await this.submitButton.click();
    console.log(`✅ Submitted Activity: ${data.programmeTitle}`);

    await this.page.waitForTimeout(2000);
  }
}
  module.exports = { AddAcademicActivitiesPage };


  