import { test, expect } from '@playwright/test';

test('English - can login', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.locator('id=js-link-box-en').click();
    await page.locator("//*[@id='pt-login-2']//a").click();
    await page.locator('id=wpName1').fill('tester01');
    await page.locator('id=wpPassword1').fill('testpassword');
    await page.locator('id=wpRemember').click();
    await page.locator('id=wpLoginAttempt').click();
});