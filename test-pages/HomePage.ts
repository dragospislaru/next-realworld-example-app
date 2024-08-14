import { Page, Locator, expect } from "@playwright/test";

export class HomePage {

  page: Page;
  articles: Locator;
  tag: Locator;
  author: Locator;
  likeBtn: Locator;
  goToSignInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articles = page.locator(".article-preview").first();
    this.tag = page.locator("//*[@id='__next']/div/div[2]/div/div[2]/div/div/a[1]/span").first();
    this.author = page.locator(".author span").first();
    this.goToSignInBtn = page.locator("//a[@href='/user/login']");
    this.likeBtn = page.locator("div button").first();
  }

  async goTo() {
    await this.page.goto("http://localhost:3000/");
  }

  async getTitle() {
    const title = await this.page.title();
    expect(title).toEqual("HOME | NEXT REALWORLD");
  }

  async goToSignIn() {
    await this.goToSignInBtn.click();
  }

  async verifyArticlesAreDisplayed() {
    await this.articles.waitFor();
    await expect(this.articles).not.toBeEmpty();
  }

  async verifyTagsAreDisplayed() {
    await this.tag.waitFor();
    await expect(this.tag).not.toBeEmpty();
    console.log(`Tag name: ${await this.tag.textContent()}`);
  }

  async clickOnAuthor() {
    const [firstName, lastName] = (await this.author.textContent()).split(" ");
    await this.author.click();
    await expect(this.page).toHaveURL(`http://localhost:3000/profile/${firstName}%20${lastName}`);
    console.log(`User profile: ${this.page.url()}`);
  }

  async likeArticle() {
    await this.likeBtn.click();
    // const likesNumber = await this.likeBtn.textContent();
    // expect(likesNumber).toEqual(" 961");
  }

  async clickOnArticle() {
    await this.articles.click();
    await this.page.waitForURL('**/article/*');
    expect(this.page).toHaveURL(/article/);
  }
}