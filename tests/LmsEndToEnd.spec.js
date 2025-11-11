import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// ===== Import Page Objects =====
import { LoginPage } from '../page/Loginpage.js';
import { TeachingAids } from '../page/LMS/Academics/LandingLms/TeachingAids.js';
import { TeachingMethods } from '../page/LMS/Academics/LandingLms/TeachingMethods.js';
import { CourseContentsPlan } from '../page/LMS/Academics/LandingLms/CourseContentsPlan.js';
import { FacultyTimeTable } from '../page/LMS/Academics/LandingLms/FacultyTimetable.js';
import { CoursePlanCompletionPage } from '../page/LMS/Academics/LandingLms/CoursePlanCompletion.js';
import { CoursePlanCompletionFeedback } from '../page/LMS/Academics/LandingLms/CoursePlanCompletionFeedback.js';
import { AcademicActivitiesPage } from '../page/LMS/Academics/LandingLms/AcademicActivitiesPage.js';
import { ResearchRepository } from '../page/LMS/Academics/LandingLms/ResearchRepository.js';
import { SelfAppraisal } from '../page/LMS/Academics/LandingLms/SelfAppraisal.js';
import { FacultyParticipation } from '../page/LMS/Academics/LandingLms/FacultyParticipation.js';

// ===== Load JSON Data =====
const courseContentsPath = path.join(__dirname, './testdata/CourseContentsAndPlan.json');
const courseContentsData = JSON.parse(fs.readFileSync(courseContentsPath, 'utf-8'));

const coursePlanCompletionPath = path.join(__dirname, './testdata/CoursePlanCompletion.json');
const coursePlanData = JSON.parse(fs.readFileSync(coursePlanCompletionPath, 'utf-8'));

const academicActivitiesPath = path.join(__dirname, './testdata/AcademicActivitiesData.json');
const academicActivitiesData = JSON.parse(fs.readFileSync(academicActivitiesPath, 'utf-8'));

const researchRepoPath = path.join(__dirname, './testdata/PhdInfoData.json');
const researchRepoData = JSON.parse(fs.readFileSync(researchRepoPath, 'utf-8'));

// =========================================================
// 🔹 TEST SUITE: LMS - End to End Flow
// =========================================================
test.describe('LMS - End to End Testing Suite', () => {

  // =========================================================
  // 1️⃣ Login before each test
  // =========================================================
  test.beforeEach(async ({ page }) => {
    console.log('🔐 Logging in...');
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('admin@saarcmasts.com', '123456');
    await page.waitForTimeout(2000);
    console.log('✅ Logged in successfully');
  });

  // =========================================================
  // 2️⃣ Teaching Aids
  // =========================================================
  test('Add New Teaching Aid', async ({ page }) => {
    const teachingAids = new TeachingAids(page);
    await teachingAids.addTeachingAids();
    await page.screenshot({ path: 'screenshots/TeachingAids.png' });
    console.log('✅ Teaching Aid added successfully');
  });

  // =========================================================
  // 3️⃣ Teaching Methods
  // =========================================================
  test('Add New Teaching Method', async ({ page }) => {
    const teachingMethods = new TeachingMethods(page);
    await teachingMethods.addTeachingMethods();
    await page.screenshot({ path: 'screenshots/TeachingMethods.png' });
    console.log('✅ Teaching Method added successfully');
  });

  // =========================================================
  // 4️⃣ Course Contents Plan (Positive)
  // =========================================================
  for (const data of courseContentsData.positive) {
    test(`Add Course Contents Plan - ${data.testName}`, async ({ page }) => {
      const courseContents = new CourseContentsPlan(page);
      await courseContents.navigate();
      await courseContents.fillCourseContentsPlan(data);
      await page.screenshot({ path: `screenshots/CourseContentsPlan_${data.testName}.png` });
      console.log(`✅ Verified success: ${data.expectedStatus}`);
    });
  }

  // =========================================================
  // 5️⃣ Faculty Time Table
  // =========================================================
  test('View Faculty Time Table', async ({ page }) => {
    const facultyTimetable = new FacultyTimeTable(page);
    await facultyTimetable.navigateToFacultyTimeTable();
    await facultyTimetable.fillFacultyTimeTable({
      academicSession: '2025-2026 (ODD)',
      semester: 'Sem 3',
      programmeName: 'B.B.A',
    });
    await facultyTimetable.showclick();
    await page.screenshot({ path: 'screenshots/FacultyTimetable.png' });
    console.log('✅ Faculty Time Table displayed successfully');
  });

  // =========================================================
  // 6️⃣ Course Plan Completion
  // =========================================================
  test('Fill Course Plan Completion', async ({ page }) => {
    const coursePlan = new CoursePlanCompletionPage(page);
    await coursePlan.navigate();

    for (const data of coursePlanData) {
      await coursePlan.fillCoursePlan(data);
      console.log(`✅ Course Plan Completion filled for: ${data.programmeName || 'N/A'}`);
    }

    await page.screenshot({ path: 'screenshots/CoursePlanCompletion.png' });
  });

  // =========================================================
  // 7️⃣ Course Plan Completion Feedback
  // =========================================================
  test('Course Plan Completion Feedback', async ({ page }) => {
    const feedback = new CoursePlanCompletionFeedback(page);
    await feedback.addCoursePlanCompletionFeedback();
    await page.screenshot({ path: 'screenshots/CoursePlanCompletionFeedback.png' });
    console.log('✅ Course Plan Completion Feedback viewed successfully');
  });

  // =========================================================
  // 8️⃣ Academic Activities
  // =========================================================
  for (const data of academicActivitiesData) {
    test(`Add Academic Activity - ${data.programmeTitle}`, async ({ page }) => {
      const academic = new AcademicActivitiesPage(page);
      await academic.addActivity(data);
      await page.screenshot({ path: `screenshots/AcademicActivity_${data.programmeTitle}.png` });
      console.log(`✅ Academic Activity submitted: ${data.programmeTitle}`);
    });
  }

  // =========================================================
  // 9️⃣ Research Repository
  // =========================================================
  for (const data of researchRepoData) {
    test(`Add Research Repository Entry - ${data.discipline}`, async ({ page }) => {
      const repo = new ResearchRepository(page);
      await repo.addResearchRepository(data);
      await page.screenshot({ path: `screenshots/ResearchRepository_${data.discipline}.png` });
      console.log(`✅ Research Repository entry added for discipline: ${data.discipline}`);
    });
  }

  // =========================================================
  // 🔟 Self Appraisal
  // =========================================================
  test('Submit Self Appraisal', async ({ page }) => {
    const appraisal = new SelfAppraisal(page);
    await appraisal.addSelfAppraisal();
    await page.screenshot({ path: 'screenshots/SelfAppraisal.png' });
    console.log('✅ Self Appraisal submitted successfully');
  });

  // =========================================================
  // 1️⃣1️⃣ Faculty Participation
  // =========================================================
  test('Add Faculty Participation', async ({ page }) => {
    const participation = new FacultyParticipation(page);
    await participation.addFacultyParticipation();
    await page.screenshot({ path: 'screenshots/FacultyParticipation.png' });
    console.log('✅ Faculty Participation submitted successfully');
  });

});
