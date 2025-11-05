const FacultyTimetable = require('./FacultyTimetable');


class FacultyTimeTable {
    constructor(page) {
      this.page = page;
  
      // Menu Locators
      this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
      this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
      this.facultyTimeTable = page.locator("//span[contains(text(),'Faculty Time')]");
  
      // Form Locators
      this.academicSessionDropdown = page.locator("//select[@id='academic_session']");
      this.semesterDropdown = page.locator("//select[@id='semester_seasion']");
      this.programmeNameDropdown = page.locator("//div[@class='choices__inner']");
      this.searchProgrammeOption = page.locator("//input[@aria-label='Select Programme']")
      // this.departmentInput = page.locator("//input[@id='department']");

       this.courseDropdown = page.locator("//select[@id='courses_list']");
     
       this.showTimeTableBtn = page.locator("//button[normalize-space()='Show Time Table']");
    }
  
    async navigateToFacultyTimeTable() {
      await this.academicsMenu.click();
      await this.page.waitForTimeout(1000);
      await this.lmsMenu.click();
      await this.page.waitForTimeout(1000);
      await this.facultyTimeTable.click();
      //await this.courseDropdown.waitFor({ state: 'visible', timeout: 10000 });
      //await this.page.waitForSelector("text=Faculty Time Table", { timeout: 10000 });
      
    }

    // Ensure values are strings (Excel numbers become JS numbers)
    async fillFacultyTimeTable(data) {
      console.log('Filling Faculty Time Table with:', data);    
      await this.academicSessionDropdown.selectOption(String(data.academicSession));
        await this.semesterDropdown.selectOption(String(data.semester));
        await this.programmeNameDropdown.click();
        await this.searchProgrammeOption.fill(String(data.programmeName));
        await this.searchProgrammeOption.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector('#courses_list', { state: 'visible' });

// Wait until the dropdown actually has options (excluding the “Select Course” default)
await this.page.waitForFunction(() => {
  const el = document.querySelector('#courses_list');
  return el && el.options.length > 1;
}, { timeout: 15000 });

// Now safely select your course
await this.courseDropdown.selectOption({ label: '3FB-Advanced Tamil' });

// Optional verification
const selected = await this.page.locator('#courses_list >> option:checked').textContent();
console.log('✅ Selected course:', selected);


        // await this.courseDropdown.click();
        // await this.page.waitForSelector('#courses_list option', { state: 'attached', timeout: 5000 });
        // await this.page.selectOption('#courses_list', { label: String(data.course) });
        //await this.courseDropdown.selectOption(String(data.course));
        
    }
    async showclick(){
       // await this.page.waitForTimeout(3000);
        await this.showTimeTableBtn.click();
       // await this.page.waitForTimeout(3000);
        await console.log('Faculty Time Table form submitted');
    }
   
  
}
  

  
  module.exports = { FacultyTimeTable };
  