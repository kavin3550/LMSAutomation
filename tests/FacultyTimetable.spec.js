const { test, expect } = require('@playwright/test');
const { FacultyTimeTable } = require('../page/LMS/Academics/LandingLms/FacultyTimetable');
const { LoginPage } = require('../page/Loginpage');
const { getTestData } = require('../datadriven/readexcel');

// Load Excel Data

const facultyTimetableData = getTestData("./excel/ft.xlsx", "ft");

test.describe('📘 Faculty Timetable Tests', () => {

  // run once before all tests
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com','123456');
    //await page.expect(page).toHaveURL("https://jubilant-darkness-qidltchfum5o.on-vapor.com/admin/principal-dashboard", { timeout: 10000 });
  });

  // loop through Excel rows
  facultyTimetableData.forEach((row, index) => {
    test(`Row ${index + 1} - ${row.programmeName || 'No Programme'}`, async ({ page }) => {
      console.log(`Running test with data: ${JSON.stringify(row)}`);

      const facultyTimetable = new FacultyTimeTable(page);
      await facultyTimetable.navigateToFacultyTimeTable();
      await facultyTimetable.fillFacultyTimeTable(row);
      await facultyTimetable.showclick();

      // Example assertion
      //await expect(page.locator('text=Faculty Time Table')).toBeVisible();
      //await page.waitForTimeout(3000); 
      await page.screenshot({ path: `screenshots/FacultyTimetable_Row${index + 1}.png`});

    });
  });
});
