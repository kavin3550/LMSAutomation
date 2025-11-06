const { test, expect } = require('@playwright/test');
const { CoursePlanCompletionFeedback } = require('../page/LMS/Academics/LandingLms/CoursePlanCompletionFeedback');
const { LoginPage } = require('../page/Loginpage');

test('Course Plan Completion Feedback Test', async ({ page }) => {
  // ===== Login =====
  const login = new LoginPage(page);
  await login.navigate();
  await login.login('admin@saarcmasts.com', '123456');
  await page.waitForTimeout(3000);

  // ===== Navigate to Course Plan Completion Feedback =====
  const coursePlanFeedback = new CoursePlanCompletionFeedback(page);
  await coursePlanFeedback.addCoursePlanCompletionFeedback();

});
