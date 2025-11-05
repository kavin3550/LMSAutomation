const {test, expect} = require('@playwright/test');
const {LeaveAdjustmentPage} = require('../page/LMS/LeaveAdjustment');     
const { LoginPage } = require('../page/loginpage.js');
//import { LoginPage } from '../page/loginpage.js';

test('Leave Adjustment Test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');    
    await page.waitForTimeout(3000);

    const leaveAdjustment = new LeaveAdjustmentPage(page);
    await leaveAdjustment.navigate();

    // Fill the Add Leave Balance Form
    await leaveAdjustment.addLeaveBalance('2025-2026 (Active)', 'Faculty', 'Abinaya K', 'casual', 5);
});