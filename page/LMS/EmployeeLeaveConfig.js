class EmployeeLeaveConfig {
    constructor(page) {
        this.page = page;

        this.dashboard=page.locator("//a[@class='nav-link menu-link']")
        this.lmsMenu = page.locator("//a[@href='#LeaveManagementModule']");
        this.employeeLeave = page.locator("//a[normalize-space()='Employee Leave']");
        this.employeeLeaveConfig = page.locator("(//span[@class='mobile-change-d-none d-md-inline-block'][contains(text(),'Employee Leave')])[1]");
        this.addNewButton = page.locator("//a[@id='addNewButton']");

        this.leaveTypeDropdown = page.locator("(//div[@class='choices__inner'])[1]");
        this.leaveTypeOption = page.locator("//div[@id='choices--department_id-item-choice-2']");
        this.SelectEmployeePlaceholder = page.locator("(//div[@class='choices__inner'])[2]");
        this.employeeOption = page.locator("//div[@id='choices--employee_id-item-choice-2']");
        
        
    }
    async configureLeave() {
        await this.dashboard.click();
        await this.page.waitForTimeout(5000);
        await this.lmsMenu.click(); 
        await this.employeeLeave.click();
        await this.employeeLeaveConfig.click();
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
