let mProductImage;
let mProductTitle;
let mProductPrice;

class Product_Page {
    //#region 'Product Page Elements'
    get addToCartButton() {
        return $('.btn-success');
    }

    get productImage() {
       return $('div#imgp  img');
    }

    get productTitle() {
        return $('div#tbodyid > .name');
    }

    get productPrice() {
        return $('div#tbodyid > .price-container');
    }
    //#endregion
    clickAddToCartButton() {
        this.addToCartButton.click();
        browser.pause(1000);
        browser.acceptAlert();
    }

    getProductInfo() {
        mProductImage = this.productImage.getAttribute('src');
        mProductTitle = this.productTitle.getText();
        mProductPrice = this.productPrice.getText().replace('$', '').replace('*includes tax', '').trim();
    }

    returnProductImage() {
        return mProductImage;
    }

    returnProductTitle() {
        return mProductTitle;
    }

    returnProductPrice() {
        return mProductPrice;
    }
}

module.exports = new Product_Page();
