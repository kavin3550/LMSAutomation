const {test} = require('@playwright/test');
// const { LoginPage } = require('../page/Loginpage');
const {SelfAppraisal} = require('../page/LMS/Academics/LandingLms/SelfAppraisal')

test ('Self Appraisal Test', async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.navigate();
    // await login.login('admin@saarcmasts.com','123456');
    
    const appraisal = new SelfAppraisal(page);
    await appraisal.navigate();
    await appraisal.addSelfAppraisal();


}
);



