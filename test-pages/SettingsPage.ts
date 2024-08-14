import { Page, Locator, expect } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {

  page: Page;
  name: Locator;
  bio: Locator;
  email: Locator;
  password: Locator;
  updateBtn: Locator;
  logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.getByPlaceholder("Your Name");
    this.bio = page.getByPlaceholder("Short bio about you");
    this.email = page.getByPlaceholder("Email");
    this.password = page.getByPlaceholder("Password");
    this.updateBtn = page.locator(".btn-lg");
    this.logoutBtn = page.locator("btn btn-outline-danger");
  }

  async goToSettings() {
    await this.page.goto("http://localhost:3000/settings");
  }

  async clickUpdateBtn() {
    await this.updateBtn.click();
  }

  async changeName() {
    await this.name.fill(process.env.UPDATE_NAME);
    expect(this.name).toHaveValue(process.env.UPDATE_NAME);
  }

  async changeBio() {
    const randomNumber = Math.floor(Math.random() * 5);
    await this.bio.fill(`Random text ${randomNumber}`);
    expect(this.bio).toHaveValue(`Random text ${randomNumber}`);
  }

  async changeEmail() {
    await this.email.fill(process.env.UPDATE_EMAIL);
    expect(this.email).toHaveValue(process.env.UPDATE_EMAIL);
  }

  async changePassword() {
    await this.password.fill(process.env.UPDATE_PASSWORD);
    expect(this.password).toHaveValue(process.env.UPDATE_PASSWORD);
  }

  async clickLogutBtn() {
    await this.logoutBtn.click();
  }
}