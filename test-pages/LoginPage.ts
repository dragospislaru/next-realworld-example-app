import { Page, Locator, expect } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {

  page: Page;
  submitSignInButton: Locator;
  email: Locator;
  password: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitSignInButton = page.locator("button:has-text('Sign in')");
    this.email = page.getByPlaceholder("Email");
    this.password = page.getByPlaceholder("Password");
  }

  async checkSuccessfullLogin() {
    await this.email.fill(process.env.LOGIN_EMAIL);
    await this.password.fill(process.env.LOGIN_PASSWORD);
    await this.submitSignInButton.click();
  };

  async checkInvalidLogin() {
    await this.email.fill("invalidData@gmail.com");
    await this.password.fill("invalidData");
    await this.submitSignInButton.click();
    expect(this.page.locator(".error-messages li").isVisible());
  }
}