import {test, expect, chromium,Browser,BrowserContext,Page  } from '@playwright/test';

test('check t itle', async ({ page}) => {
  // //khoi tao browser
  // const bro wser: Browser = await chromium.launch();
  // //khoitao contenx
  // const context: BrowserContext = await browser.newContext();
  // //khoi tao page
  // const page: Page = await context.newPage();
  // await page.goto('https://pw-blog.congcu.org/');
  // await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/);
  // //tat broser
  // await browser.close();

  //su dung fixture co san cua Playwright
  await page.goto('https://pw-blog.congcu.org/');
  await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/);

});