const { When, Then } = require('cucumber');
const homePage = require('../page_objects/homepage');
const ShoppingCartPage = require('../page_objects/shopping_cart_page');
const ProductPage = require('../page_objects/product_page');
const TestData = require('../test_data/data');

Then(/^the products are listed on the shopping cart$/, () => {
    homePage.clickCartLinkOnHeader();
    expect(ShoppingCartPage.productImage).toBeExisting();
    expect(ShoppingCartPage.productTitle).toBeExisting();
    expect(ShoppingCartPage.productPrice).toBeExisting();
    expect(ShoppingCartPage.productDeleteLink).toBeExisting();
    expect(ShoppingCartPage.productImage.getAttribute('src')).toEqual(ProductPage.returnProductImage());
    expect(ShoppingCartPage.productTitle.getText()).toEqual(ProductPage.returnProductTitle());
    expect(ShoppingCartPage.productPrice.getText()).toEqual(ProductPage.returnProductPrice());
});

Then(/^the shopping cart components should be seen properly$/, () => {
    homePage.clickCartLinkOnHeader();
    expect(ShoppingCartPage.pageTitle.getText()).toEqual('Products');
    expect(ShoppingCartPage.totalText.getText()).toEqual('Total');
    expect(ShoppingCartPage.titleOfPictureOnTheHeader.getText()).toEqual('Pic');
    expect(ShoppingCartPage.titleOnTheHeader.getText()).toEqual('Title');
    expect(ShoppingCartPage.titleOfPriceOnTheHeader.getText()).toEqual('Price');
    expect(ShoppingCartPage.titleOfDeleteOnTheHeader.getText()).toEqual('x');
});

When(/^the user places an order with*(out)* filling all relevant fields in the payment form$/, (falseCase) => {
    homePage.clickCartLinkOnHeader();
    ShoppingCartPage.getCartTotal();
    ShoppingCartPage.placeOrder(falseCase);
});

Then(/^the order should *(not)* be completed$/, (falseCase) => {
    if (!falseCase) {
        expect(ShoppingCartPage.placeOrderSuccessModal).toBeVisible();
        expect(ShoppingCartPage.placeOrderSuccessModalMessageText.getText()).toEqual(TestData.success_message);
        expect(ShoppingCartPage.placeOrderSuccessModalInfoText).toBeExisting();
        expect(ShoppingCartPage.placeOrderSuccessModalOkButton).toBeClickable();
        ShoppingCartPage.getPurchaseInfoFromSuccessModal();
        expect(ShoppingCartPage.returnOrderId).not.toBeNull();
        expect(ShoppingCartPage.returnAmount().includes(ShoppingCartPage.getCartTotal())).toBe(true);
        expect(ShoppingCartPage.returnCardNumber().includes(TestData.card_number)).toBe(true);
        expect(ShoppingCartPage.returnCardName().includes(TestData.name)).toBe(true);
        expect(ShoppingCartPage.returnCardMonth()).toEqual(TestData.card_month);
        expect(ShoppingCartPage.returnCardYear()).toEqual(TestData.card_year);
        expect(ShoppingCartPage.placeOrderSuccessModalOkButton).toBeClickable();
    } else {
        expect(ShoppingCartPage.unSuccessfulOrderAlertMessage()).toEqual(TestData.unSuccessful_message);
    }
});
