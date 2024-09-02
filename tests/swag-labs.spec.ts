import { test, expect } from '@playwright/test';

test('can login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  await page.locator('data-test=username').fill('standard_user');
  await page.locator('data-test=password').fill('secret_sauce');
  await page.locator('id=login-button').click();
  await page.locator('id=shopping_cart_container').click();
});
