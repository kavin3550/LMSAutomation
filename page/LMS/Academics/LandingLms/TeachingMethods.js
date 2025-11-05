class TeachingMethods {
    constructor(page) {
      this.page = page;
  
      this.AcademicsMenu = page.locator("(//a[@href='#Academics'])[1]");
      this.LMSMenu = page.locator("//a[normalize-space()='LMS']");
      this.TeachingMethodsMenu = page.locator("//div[@id='Lmsdashboad']//li[2]");
      this.AddNewButton = page.locator("//a[@id='addRow']");
      this.MethodNameInput = page.locator("//input[@id='teaching_aids_cl']");
      this.ShortNameInput = page.locator("//input[@id='short_name_cl']");
      this.IsactiveCheckbox = page.locator("//input[@id='inlineRadio_sp_yes']");
      this.SubmitButton = page.locator("//button[@id='add-teaching-aids']");
    }
  
    async addTeachingMethods() {
      await this.page.waitForTimeout(5000);
      await this.AcademicsMenu.click();
      await this.LMSMenu.click();
      await this.TeachingMethodsMenu.click();
      await this.AddNewButton.click();
      await this.MethodNameInput.fill('Interactive Learning');
      await this.ShortNameInput.fill('InterLearn');
      await this.IsactiveCheckbox.check();
      await this.SubmitButton.click();
      await this.page.waitForTimeout(3000);
      console.log('Teaching Method added successfully!');
    }
  }
  
  //Proper export syntax
  module.exports = { TeachingMethods };
  