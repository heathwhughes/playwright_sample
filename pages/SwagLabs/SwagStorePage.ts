import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class SwagStorePage extends BasePage {
  readonly shoppingCartContainer = 'id=shopping_cart_container';
  readonly addToCartRegex = /ADD TO CART/i;
  readonly cartLink = 'data-test=shopping-cart-link';
  readonly checkoutStepOneLink = 'data-test=checkout';
  readonly firstNameInput = 'data-test=firstName';
  readonly lastNameInput = 'data-test=lastName';
  readonly postalCodeInput = 'data-test=postalCode';
  readonly continueButtonValue = 'CONTINUE';
  readonly summaryQuantityXpath = 'xpath=//*[@data-test="item-quantity"]';
  readonly finishButton = 'data-test=finish';
  readonly checkoutCompleteContainer = 'id=checkout_complete_container';

  async goToInventoryPage() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addItemToCart(index: number) {
    await this.page.getByRole('button', { name: this.addToCartRegex }).nth(index).click();
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.cartLink).click();
    await this.page.locator(this.checkoutStepOneLink).click();
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
    await this.page.getByRole('button', { name: this.continueButtonValue }).click();
  }

  async verifyOneItemInCart() {
    await expect(this.page.locator(this.summaryQuantityXpath)).toHaveText('1');
  }

  async clickFinish() {
    await this.page.locator(this.finishButton).click();
  }

  async verifyCheckoutComplete() {
    await expect(this.page.locator(this.checkoutCompleteContainer)).toBeVisible()
  }
}
  