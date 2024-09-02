import { test, expect } from '@playwright/test';

test('can login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  await page.locator('data-test=username').fill('standard_user');
  await page.locator('data-test=password').fill('secret_sauce');
  await page.locator('id=login-button').click();

  await expect(page.locator('id=shopping_cart_container')).toBeVisible();
});

test('can add to cart and complete purchase', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/inventory.html');

  await page.getByRole('button', { name: /ADD TO CART/i }).nth(1).click();

  await page.locator('[href*="./cart.html"]').click();
  await page.locator('[href*="./checkout-step-one.html"]').click();
  
  await page.locator('data-test=firstName').fill('Hannibal');
  await page.locator('data-test=lastName').fill('Lecter');
  await page.locator('data-test=postalCode').fill('12345');
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  await expect(page.locator('xpath=//*[@id="checkout_summary_container"]//*[@class="summary_quantity"]')).toContainText('1')
  await page.getByRole('link', { name: 'FINISH' }).click();
  
  await expect(page.locator('id=checkout_complete_container')).toBeVisible();
});