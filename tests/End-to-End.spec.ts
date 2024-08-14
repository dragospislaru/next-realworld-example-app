import { test } from '@playwright/test';
import { HomePage } from 'test-pages/HomePage';
import { LoginPage } from 'test-pages/LoginPage';

test('Landing Page test', async ({ page }) => {
  const landingPage = new HomePage(page);
  const loginPage = new LoginPage(page);
  await landingPage.goTo();
  await landingPage.getTitle();
  // await landingPage.clickOnArticle();
  await landingPage.goToSignIn();

  await loginPage.checkSuccessfullLogin();
});