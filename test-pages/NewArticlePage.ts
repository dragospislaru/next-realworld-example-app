import { Page, Locator } from "@playwright/test";

export class NewArticlePage {

  page: Page;
  articleTitle: Locator;
  articleDescription: Locator;
  articleBody: Locator;
  articleTags: Locator;
  publicBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articleTitle = page.getByPlaceholder("Article Title");
    this.articleDescription = page.locator("//input[@name='description']");
    this.articleBody = page.locator("//textarea[@name='body']");
    this.articleTags = page.locator("//input[@name='tags']")
    this.publicBtn = page.locator(".btn-primary");
  }

  async fillArticleTitle(title: string) {
    this.articleTitle.fill(title);
  }

  async fillArticleDescription(description: string) {
    this.articleDescription.fill(description);
  }

  async fillArticleBody(text: string) {
    this.articleBody.fill(text);
  }

  async fillArticleTags(tag: string) {
    this.articleTags.fill(tag);
    await this.page.keyboard.press('Enter');
  }

  async publicArticle() {
    this.publicBtn.click();
  }
}