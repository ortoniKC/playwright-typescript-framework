import { test } from '@playwright/test';

test('test', async ({ page }) => {

  const locators = {
    nameInput: "//input[@id='surname' or @id='name']"
  }

  await page.goto(process.env.url);
  // await page.locator("#name, #surname").fill("koushik")
  await page.locator(locators.nameInput).fill("koushik")

});