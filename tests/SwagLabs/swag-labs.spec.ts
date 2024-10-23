import { test, expect } from '@playwright/test';
import { SwagLoginPage } from '../../pages/SwagLabs/SwagLoginPage';
import { SwagStorePage } from '../../pages/SwagLabs/SwagStorePage';

test('can login', async ({ page }) => {
  await page.goto(SwagLoginPage.LOGIN_PAGE_URL);

  await page.locator(SwagLoginPage.USERNAME_INPUT).fill('standard_user');
  await page.locator(SwagLoginPage.PASSWORD_INPUT).fill('secret_sauce');
  await page.locator(SwagLoginPage.LOGIN_BUTTON).click();

  await expect(page.locator(SwagStorePage.SHOPPING_CART_CONTAINER)).toBeVisible();
});

test('can add to cart and complete purchase', async ({ page }) => {
  await page.goto(SwagStorePage.INVENTORY_PAGE_URL);

  await page.getByRole('button', { name: SwagStorePage.ADD_TO_CART_REGEX }).nth(1).click();

  await page.locator(SwagStorePage.CART_LINK).click();
  await page.locator(SwagStorePage.CHECKOUT_STEP_ONE_LINK).click();
  
  await page.locator(SwagStorePage.FIRST_NAME_INPUT).fill('Hannibal');
  await page.locator(SwagStorePage.LAST_NAME_INPUT).fill('Lecter');
  await page.locator(SwagStorePage.POSTAL_CODE_INPUT).fill('12345');
  await page.getByRole('button', { name: SwagStorePage.CONTINUE_BUTTON_VALUE }).click();

  await expect(page.locator(SwagStorePage.SUMMARY_QUANTITY_XPATH)).toContainText('1');
  await page.getByRole('link', { name: SwagStorePage.FINISH_BUTTON_VALUE }).click();
  
  await expect(page.locator(SwagStorePage.CHECKOUT_COMPLETE_CONTAINER)).toBeVisible()
});