import { BasePage } from '../BasePage';

export class SwagLoginPage extends BasePage {
  readonly loginPageUrl = 'https://www.saucedemo.com/v1/';
  readonly usernameInput = 'data-test=username';
  readonly passwordInput = 'data-test=password';
  readonly loginButton = 'id=login-button';

  async login(username: string, password: string) {
    await this.page.goto(this.loginPageUrl);
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}