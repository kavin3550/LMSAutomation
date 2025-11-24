const {test, expect} = require('@playwright/test');
//const { LoginPage } = require('../page/Loginpage');
const {LeaveAdjustmentPage} = require('../page/LMS/LeaveAdjustment');     

//import { LoginPage } from '../page/loginpage.js';

test('Leave Adjustment Test', async ({ page }) => {


    const leaveAdjustment = new LeaveAdjustmentPage(page);
    await leaveAdjustment.LeaveAdjustmentPage();

    // Fill the Add Leave Balance Form
    await leaveAdjustment.addLeaveBalance('2025-2026 (Active)', 'Faculty', 'Abinaya K', 'casual', 5);
});