export class LoginPage {
  constructor(page) {
      this.page = page;
      this.staffLink = page.getByText('Staff');
      this.usernameInput = page.getByRole('textbox', { name: 'Enter username' });
      this.passwordInput = page.getByRole('textbox', { name: 'Enter password' });
      this.signInButton = page.getByRole('button', { name: 'Sign In' });
  }

  async navigate() {
      await this.page.goto("https://jubilant-darkness-qidltchfum5o.on-vapor.com/login");
  }

  async login(username, password) {
      await this.staffLink.click();
      await this.usernameInput.fill(username); // Use 'username' instead of 'usernameInput'
      await this.passwordInput.fill(password); // Use 'password' instead of 'passwordInput'
      await this.signInButton.click();
  }
}
module.exports = { LoginPage };
