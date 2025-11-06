class CoursePlanCompletionFeedback {
    constructor(page) {
      this.page = page;
  
      // ===== Menus =====
      this.academicsMenu = page.locator("(//a[@href='#Academics'])[1]");
      this.lmsMenu = page.locator("//a[normalize-space()='LMS']");
      this.coursePlanCompletionFeedbackMenu = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Course Plan')])[2]");
  
      // ===== Locators =====
      this.classDropdown = page.locator("//select[@id='classes']");
      this.courseDropdown = page.locator("//select[@id='courses_list']");
      this.searchButton = page.locator("//button[normalize-space()='Search']");
      this.clearButton = page.locator("//a[normalize-space()='Clear']");
    }
  
    async addCoursePlanCompletionFeedback() {
      console.log("Navigating to Course Plan Completion Feedback...");
      await this.page.waitForTimeout(2000);
  
      await this.academicsMenu.click();
      await this.page.waitForTimeout(1000);
  
      await this.lmsMenu.click();
      await this.page.waitForTimeout(1000);
  
      await this.coursePlanCompletionFeedbackMenu.click();
      await this.page.waitForTimeout(2000);

      
      await this.classDropdown.selectOption({ label: 'II - B.B.A. Logistics - A' });
      await this.page.waitForTimeout(1000);
    
      await this.courseDropdown.selectOption({ label: '31T-BBA LOG03-TAMIL-III - [Parimala A]' });
      await this.page.waitForTimeout(1000);
      await this.searchButton.click()
      await this.page.waitForTimeout(2000);
  

    }
  }
  
  module.exports = { CoursePlanCompletionFeedback };
  