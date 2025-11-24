//const { expect } = require('@playwright/test');

class CoursePlanCompletionPage {
  constructor(page) {
    this.page = page;

    // Menu Locators
    // this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
    // this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
    // this.coursePlanCompletion = page.locator("//span[normalize-space()='Course Plan Completion']");

    // Form locators
    this.academicSessionDropdown = page.locator("//select[@id='academic_session']");
    this.semesterDropdown = page.locator("//select[@id='semester_seasion']");
    this.programmeDropdown = page.locator("//div[@class='choices__inner']");
    this.searchProgrammeOption = page.locator("//input[@aria-label='Select Programme']");
    this.courseDropdown = page.locator("//select[@id='courses_list']");
    this.facultyDropdown = page.locator("//select[@id='faculty_list']");
    this.classDropdown = page.locator("//select[@id='classes']");
    this.showCoursePlanBtn = page.locator("//button[contains(.,'Show Course Plan Completion')]");
  }

  async navigate() {
    await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/lms?comp=course_plan_completion",{
      waitUntill:"networkidle"
    })

    // await this.academicsMenu.click();
    // await this.page.waitForTimeout(500);
    // await this.lmsMenu.click();
    // await this.page.waitForTimeout(500);
    // await this.coursePlanCompletion.click();
    // await this.page.waitForSelector("text=Course Plan Completion", { timeout: 10000 });
  }

  async fillCoursePlan(data) {
    console.log('🧾 Filling Course Plan Completion with:', data);

    // Academic Session
    if (data.academicSession && data.academicSession.trim() !== "") {
      await this.academicSessionDropdown.selectOption(String(data.academicSession));
    } else {
      console.log("⚠️ Skipping Academic Session (empty data)");
    }

    // Semester
    if (data.semester && data.semester.trim() !== "") {
      await this.semesterDropdown.selectOption(String(data.semester));
    } else {
      console.log("⚠️ Skipping Semester (empty data)");
    }

    // Programme
    if (data.programmeName && data.programmeName.trim() !== "") {
      await this.programmeDropdown.click();
      await this.searchProgrammeOption.fill(String(data.programmeName));
      await this.searchProgrammeOption.press('Enter');
      await this.page.waitForTimeout(1000);
    } else {
      console.log("⚠️ Skipping Programme (empty data)");
    }

    // Course
    if (data.course && data.course.trim() !== "") {
      await this.courseDropdown.selectOption(String(data.course));
    } else {
      console.log("⚠️ Skipping Course (empty data)");
    }

    // Faculty
    if (data.faculty && data.faculty.trim() !== "") {
      await this.facultyDropdown.selectOption(String(data.faculty));
    } else {
      console.log("⚠️ Skipping Faculty (empty data)");
    }

    // Class
    if (data.className && data.className.trim() !== "") {
      await this.classDropdown.selectOption(String(data.className));
    } else {
      console.log("⚠️ Skipping Class (empty data)");
    }

    // Submit
    await this.showCoursePlanBtn.click();
    console.log('📋 Clicked "Show Course Plan Completion"');
  }
}

module.exports = { CoursePlanCompletionPage };

