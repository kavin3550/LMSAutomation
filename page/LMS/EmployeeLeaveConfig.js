class EmployeeLeaveConfig {
    constructor(page) {
        this.page = page;
        this.addNewButton = page.locator("//a[@id='addNewButton']");
        this.leaveTypeDropdown = page.locator("(//div[@class='choices__inner'])[1]");
        this.leaveTypeOption = page.locator("//div[@id='choices--department_id-item-choice-2']");
        this.SelectEmployeePlaceholder = page.locator("(//div[@class='choices__inner'])[2]");
        this.employeeOption = page.locator("//div[@id='choices--employee_id-item-choice-2']");
        
        
    }

      async navigate() {
      await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/leave/emp_leave_config",{
      waitUtill : "networkidle"
    })
  }

    
    async configureLeave() {
        await this.addNewButton.click();
        await this.leaveTypeDropdown.click();   
        await this.page.waitForTimeout(2000);
        await this.leaveTypeOption.click();
        await this.SelectEmployeePlaceholder.click();
        await this.page.waitForTimeout(2000);
        await this.employeeOption.click();
        await this.page.waitForTimeout(2000);
    }       

}
module.exports = { EmployeeLeaveConfig };
