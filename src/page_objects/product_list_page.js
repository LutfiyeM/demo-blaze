const { config } = require('../../wdio.conf');

class Product_List_Page {
    //#region 'Product List Page Elements'
    get productTitleText() {
        return $('.card-title');
    }

    getProductTitleList() {
        return $$('.card-title');
    }
    //#endregion

    goToProduct(pid) {
        console.log('the user opens the page: ', `${config.baseUrl}/prod.html?idp_=${pid}`);
        browser.url(`${config.baseUrl}/prod.html?idp_=${pid}`);
    }

    // Select random product
    selectRandomProduct() {
        const productList = [];
        this.productTitleText.waitForDisplayed({ timeout: 10000 });
        this.getProductTitleList().forEach((j) => {
            productList.push(j);
        });
        const randomProduct = Math.floor(Math.random() * this.getProductTitleList().length);
        productList[randomProduct].click();
    }
}

module.exports = new Product_List_Page();
