const {test, expect} = require('@playwright/test');
const {EmployeeLeaveConfig} = require('../page/LMS/EmployeeLeaveConfig');      
//const { LoginPage } = require('../page/Loginpage.js');


test('Employee Leave Config Test', async ({ page }) => {
      
    const employeeLeaveConfig = new EmployeeLeaveConfig(page);
    await employeeLeaveConfig.navigate();
    await employeeLeaveConfig.configureLeave();
});
