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

  async changeName(newName: string) {
    await this.name.fill(newName);
    expect(this.name).toHaveValue(newName);
  }

  async changeBio(newBio: string) {
    await this.bio.fill(`Random text ${newBio}`);
    expect(this.bio).toHaveValue(`Random text ${newBio}`);
  }

  async changeEmail(newEmail: string) {
    await this.email.fill(newEmail);
    expect(this.email).toHaveValue(newEmail);
  }

  async changePassword(newPassword: string) {
    await this.password.fill(newPassword);
    expect(this.password).toHaveValue(newPassword);
  }

  async clickLogutBtn() {
    await this.logoutBtn.click();
  }
}