const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/Loginpage');   // Adjust path if needed

test.describe('Login Test', () => {

  test('Staff Login Test', async ({ page }) => {

    // Create object for LoginPage
    const login = new LoginPage(page);

    // Navigate to login page
    await login.navigate();

    // Call login function with username & password
    await login.login("admin", "Admin@123");

    // Assertion (example): Wait for dashboard or welcome text
    await expect(page.getByText('Dashboard')).toBeVisible(); // Change if needed

  });

});
