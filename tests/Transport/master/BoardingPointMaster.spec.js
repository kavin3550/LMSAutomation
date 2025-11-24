const {test} = require('@playwright/test');
// const {LoginPage} = require('../../../page/Loginpage');
const {BoardingPointMaster} = require('../../../page/Transport/master/BoardingPointMaster');

test('Boarding PointMaster Test',async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.navigate();
    // await login.login('admin@saarcmasts.com', '123456');

    const Boarding = new BoardingPointMaster(page);
    await Boarding.navigate();
    await Boarding.addBoarding('Title park','Automation Testing')

});

