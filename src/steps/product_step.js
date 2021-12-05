const { When } = require('cucumber');
const ProductListPage = require('../page_objects/product_list_page');
const ProductPage = require('../page_objects/product_page');

// navigates to product detail page with specific product ID
When(/^the user navigates to product page "([^"]*)"$/, (pid) => {
    ProductListPage.goToProduct(pid);
    ProductPage.getProductInfo();
});

When(/^the user adds the product to the shopping cart$/, () => {
    ProductPage.clickAddToCartButton();
});

When(/^the user selects a random product$/, () => {
    ProductListPage.selectRandomProduct();
    ProductPage.getProductInfo();
});
