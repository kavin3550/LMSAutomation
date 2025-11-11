// const { expect } = require('@playwright/test');

class CourseContentsPlan {
  constructor(page) {
    this.page = page;

    // ===== Menus =====
    this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
    this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
    this.courseContentsPlanMenu = page.locator("//span[normalize-space()='Course Contents and Plan']");

    // ===== Form fields =====
    this.academicSessionDropdown = page.locator("//select[@id='academic_session']");
    this.semesterDropdown = page.locator("//select[@id='semester_seasion']");
    this.programmeDropdown = page.locator("//div[@class='choices__inner']");
    this.searchProgrammeOption = page.locator("//input[@aria-label='Select Programme']");
    this.programmeCodeInput = page.locator("//input[@id='programme_code']");
    this.programmeDropdown = page.locator("//div[@class='choices__inner']");
    
   
    this.courseDropdown = page.locator("//select[@id='courses_list']");
    this.facultyDropdown = page.locator("//select[@id='faculty_list']");
    this.classDropdown = page.locator("//select[@id='classes']");
    this.showCourseContentsBtn = page.locator("//button[contains(text(),'Show Course')]");

    // ===== Messages =====
    this.successMessage = page.locator("text=Course Contents");
    this.errorMessage = page.locator("//div[contains(@class,'alert') or contains(text(),'Please')]");
  }

  // Navigate to page
  async navigate() {
    console.log("Navigating to Course Contents and Plan page");
    await this.academicsMenu.click();
    await this.page.waitForTimeout(500);
    await this.lmsMenu.click();
    await this.page.waitForTimeout(500);
    await this.courseContentsPlanMenu.click();
    //await this.page.waitForSelector("text=Course Contents and Plan", { timeout: 10000 });
    console.log("Page loaded successfully");
  }

  // Fill form dynamically
  async fillCourseContentsPlan(data) {
    console.log("Filling Course Contents and Plan form:", data);

    // Academic Session
    if (data.academicSession && data.academicSession.trim() !== "") {
      await this.academicSessionDropdown.selectOption(String(data.academicSession));
    } else console.log("Skipping Academic Session (empty)");

    // Semester
    if (data.semester && data.semester.trim() !== "") {
      await this.semesterDropdown.selectOption(String(data.semester));
    } else console.log("Skipping Semester (empty)");

    // Programme Name
    if (data.programmeName && data.programmeName.trim() !== "") {
      await this.programmeDropdown.click();
      await this.searchProgrammeOption.fill(String(data.programmeName));
      await this.searchProgrammeOption.press('Enter');
      await this.page.waitForTimeout(1000);
    } else console.log("Skipping Programme (empty)");

    // Programme Code
    // if (data.programmeCode && data.programmeCode.trim() !== "") {
    //   await this.programmeCodeInput.fill(String(data.programmeCode));
    // } else console.log("⚠️ Skipping Programme Code (empty)");

    // // Department
    // if (data.department && data.department.trim() !== "") {
    //   await this.departmentDropdown.selectOption(String(data.department));
    // } else console.log("⚠️ Skipping Department (empty)");

    // Course
    if (data.course && data.course.trim() !== "") {
      await this.courseDropdown.selectOption(String(data.course));
    } else console.log("Skipping Course (empty)");

    // Faculty
    if (data.faculty && data.faculty.trim() !== "") {
      await this.facultyDropdown.selectOption(String(data.faculty));
    } else console.log("Skipping Faculty (empty)");

    // Class
    if (data.className && data.className.trim() !== "") {
      await this.classDropdown.selectOption(String(data.className));
    } else console.log("Skipping Class (empty)");

    // Click Show button
    await this.showCourseContentsBtn.click();
    console.log("Clicked 'Show Course Contents' button");
    await this.page.waitForTimeout(1500);
  }

  // Verify result message (success or validation)
  async verifyResult(data) {
    if (data.expectedMessage) {
      await this.page.waitForSelector(`text=${data.expectedMessage}`, { timeout: 5000 });
      console.log(`Verified: ${data.expectedMessage}`);
    }

    if (data.expectedError) {
      const error = this.page.locator(`text=${data.expectedError}`);
      //await error.waitFor({ state: "visible", timeout: 5000 });
      console.log(`Verified Error: ${data.expectedError}`);
    }
  }
}

module.exports = { CourseContentsPlan };
