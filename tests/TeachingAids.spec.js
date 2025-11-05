const {test, expect} = require('@playwright/test');
const { TeachingAids } = require('../page/LMS/Academics/LandingLms/TeachingAids.js');
const {LoginPage} = require('../page/Loginpage.js');


test('Teaching Aids Test', async ({page}) => {
   //loginpage page instance
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(3000);
    //teachingAids page instance   
    const teachingAids = new TeachingAids(page);
    await teachingAids.addTeachingAids();
});
