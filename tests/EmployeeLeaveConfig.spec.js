const {test, expect} = require('@playwright/test');
const {EmployeeLeaveConfig} = require('../page/LMS/EmployeeLeaveConfig');      
const { LoginPage } = require('../page/Loginpage.js');


test('Employee Leave Config Test', async ({ page }) => {
    const login = new LoginPage(page);

    const data = { username: 'admin@saarcmasts.com', password: '123456' }; 

     await login.navigate();
     await login.login (data);
    // await login.login('admin@saarcmasts.com', '123456');    
     await page.waitForTimeout(3000);        
    const employeeLeaveConfig = new EmployeeLeaveConfig(page);
    await employeeLeaveConfig.configureLeave();
});
