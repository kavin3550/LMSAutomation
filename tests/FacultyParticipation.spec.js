const {test} = require('@playwright/test');
// const { LoginPage } = require('../page/Loginpage');
const {FacultyParticipation} = require('../page/LMS/Academics/LandingLms/FacultyParticipation')

test ('FacultyParticipation Test', async ({ page }) => {
    // const login = new LoginPage(page);
    // await login.navigate();
    // await login.login('admin@saarcmasts.com','123456');
    
    const Participation = new FacultyParticipation(page);
    await Participation.FacultyParticipationMenu();
    await Participation.addFacultyParticipation();


}
);

