class Hodconfig {
    constructor(page) {
      this.page = page;
  
      this.addNewButton = page.locator("//a[@id='addNewButton']");
      this.leavetype = page.locator("(//div[@class='choices__inner'])[1]");
      this.leavetypeoption = page.locator("//div[@id='choices--leave_type_id-item-choice-3']");
      this.iconclick = page.locator("(//button[@id='leave_add_config'])[1]");
      
    }

          async navigate() {
      await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/leave/emp_leave_config",{
      waitUtill : "networkidle"
    })
  }
  
    async configureHod() {

      await this.addNewButton.click();
      await this.leavetype.click();
      await this.page.waitForTimeout(2000);
      await this.leavetypeoption.click();
      await this.iconclick.click();
      await this.page.waitForTimeout(3000);
      // Add more steps as needed for the HOD configuration
    }
  }
  
  module.exports = { Hodconfig };
  