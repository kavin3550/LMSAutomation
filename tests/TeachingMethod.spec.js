const { test, expect } = require('@playwright/test');
const { TeachingMethods } = require('../page/LMS/Academics/LandingLms/TeachingMethods.js');

test('Teaching Methods Test', async ({ page }) => {
  const teachingMethods = new TeachingMethods(page);
  await teachingMethods.navigate();
  await teachingMethods.addTeachingMethods();
});
