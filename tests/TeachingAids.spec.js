const {test, expect} = require('@playwright/test');
const { TeachingAids } = require('../page/LMS/Academics/LandingLms/TeachingAids.js');



test('Teaching Aids Test', async ({page}) => {
    const teachingAids = new TeachingAids(page);
    await teachingAids.navigate();
    await teachingAids.addTeachingAids();
});
