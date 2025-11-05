class Hodconfig {
    constructor(page) {
      this.page = page;
  
     // this.dashboard = page.locator("//a[@class='nav-link menu-link']");
      this.lmsMenu = page.locator("//a[@href='#LeaveManagementModule']");
      this.facultleave = page.locator("//a[normalize-space()='Faculty Leave']");
      this.hodconfig = page.locator("(//span[contains(text(),'HOD Leave')])[1]");
      this.addNewButton = page.locator("//a[@id='addNewButton']");
      this.leavetype = page.locator("(//div[@class='choices__inner'])[1]");
      this.leavetypeoption = page.locator("//div[@id='choices--leave_type_id-item-choice-3']");
      this.iconclick = page.locator("(//button[@id='leave_add_config'])[1]");
      
    }
  
    async configureHod() {
      //await this.dashboard.click();
      await this.page.waitForTimeout(5000);
      await this.lmsMenu.click();
      await this.facultleave.click();
      await this.hodconfig.click();
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
  