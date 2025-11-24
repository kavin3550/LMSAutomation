const { test } = require('@playwright/test');
const { FacultyTimeTable } = require('../page/LMS/Academics/LandingLms/FacultyTimetable');
const { getTestData } = require('../datadriven/readexcel');

// Load Excel Sheet
const facultyTimetableData = getTestData("./excel/ft.xlsx", "ft");

facultyTimetableData.forEach((row, index) => {
    test(`Faculty TimeTable Row ${index + 1} - ${row.programmeName}`, async ({ page }) => {

        const facultyTimetable = new FacultyTimeTable(page);

        await facultyTimetable.facultytimetableMenu();
        await facultyTimetable.navigateToFacultyTimeTable();
        await facultyTimetable.fillFacultyTimeTable(row);
        await facultyTimetable.showclick();

        // Save Screenshot
        await page.screenshot({
            path: `screenshots/FacultyTimetable_Row${index + 1}.png`
        });
    });
});
