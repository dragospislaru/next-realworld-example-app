import { Page } from "@playwright/test";

export class BaseModel {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getElementBy(by: string) {
    return this.page.locator(by);
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }

  async clickOnElement(by: string) {
    await this.getElementBy(by).click();
  }

  async getText(locator: string) {
    return await this.getElementBy(locator).textContent();
  }

  async fillField(by: string, value: string) {
    await this.getElementBy(by).fill(value);
  }
}