class TeachingMethods {
    constructor(page) {
      this.page = page;
 

      this.AddNewButton = page.locator("//a[@id='addRow']");
      this.MethodNameInput = page.locator("//input[@id='teaching_aids_cl']");
      this.ShortNameInput = page.locator("//input[@id='short_name_cl']");
      this.IsactiveCheckbox = page.locator("//input[@id='inlineRadio_sp_yes']");
      this.SubmitButton = page.locator("//button[@id='add-teaching-aids']");
    }

      async navigate() {
        await this.page.goto(
            "https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/teaching_methods",
            { waitUntil: "networkidle" }
        );
    }
  
    async addTeachingMethods() {
      await this.page.waitForTimeout(5000);
      await this.AddNewButton.click();
      await this.MethodNameInput.fill('Interactive Learning');
      await this.ShortNameInput.fill('InterLearn');
      await this.IsactiveCheckbox.check();
      await this.SubmitButton.click();
      await this.page.waitForTimeout(3000);
      console.log('Teaching Method added successfully!');
    }
  }
  

  module.exports = { TeachingMethods };
  