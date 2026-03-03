import { test, expect } from '@playwright/test';
import { SwagLoginPage } from '../../pages/SwagLabs/SwagLoginPage';
import { SwagStorePage } from '../../pages/SwagLabs/SwagStorePage';

let loginPage: SwagLoginPage;
let storePage: SwagStorePage;

test.beforeEach(async ({ page }) => {
  loginPage = new SwagLoginPage(page);
  storePage = new SwagStorePage(page);
  await loginPage.login('standard_user', 'secret_sauce');
});

test('can add to cart and complete purchase', async ({ page }) => {
  await storePage.goToInventoryPage();
  await storePage.addItemToCart(1);
  await storePage.checkout('Hannibal', 'Lecter', '12345');
  await storePage.verifyOneItemInCart;
  await storePage.clickFinish();
  await storePage.verifyCheckoutComplete();
});