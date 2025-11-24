const { test, expect } = require('@playwright/test');
const { CoursePlanCompletionFeedback } = require('../page/LMS/Academics/LandingLms/CoursePlanCompletionFeedback');


test('Course Plan Completion Feedback Test', async ({ page }) => {
  // ===== Login =====

  // ===== Navigate to Course Plan Completion Feedback =====
  const coursePlanFeedback = new CoursePlanCompletionFeedback(page);
  await coursePlanFeedback.navigate();
  await coursePlanFeedback.addCoursePlanCompletionFeedback();

});
