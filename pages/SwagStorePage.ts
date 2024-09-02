export class SwagStorePage {
    static readonly INVENTORY_PAGE_URL = 'https://www.saucedemo.com/v1/inventory.html';
    static readonly SHOPPING_CART_CONTAINER = 'id=shopping_cart_container';
    static readonly ADD_TO_CART_REGEX = /ADD TO CART/i;
    static readonly CART_LINK = '[href*="./cart.html"]';
    static readonly CHECKOUT_STEP_ONE_LINK = '[href*="./checkout-step-one.html"]';
    static readonly FIRST_NAME_INPUT = 'data-test=firstName';
    static readonly LAST_NAME_INPUT = 'data-test=lastName';
    static readonly POSTAL_CODE_INPUT = 'data-test=postalCode';
    static readonly CONTINUE_BUTTON_VALUE = 'CONTINUE';
    static readonly SUMMARY_QUANTITY_XPATH = 'xpath=//*[@id="checkout_summary_container"]//*[@class="summary_quantity"]';
    static readonly FINISH_BUTTON_VALUE = 'FINISH';
    static readonly CHECKOUT_COMPLETE_CONTAINER = 'id=checkout_complete_container';
  }
  