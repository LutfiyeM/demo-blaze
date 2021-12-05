import moment from 'moment';

const Test_Data = require('../test_data/data');

let mOrderId;
let mAmount;
let mCardNumber;
let mCardName;
let mCardDate;
let mCardMonth;
let mCardYear;
let CartTotalAmount;

class Shopping_Cart_Page {
    //#region 'Shopping Cart Page Elements'
    get productImage() {
        return $('tbody#tbodyid img');
    }

    get productTitle() {
        return $('tr > td:nth-of-type(2)');
    }

    get productPrice() {
        return $('tr > td:nth-of-type(3)');
    }

    get productDeleteLink() {
        return $('tbody#tbodyid a');
    }

    get pageTitle() {
        return $('[class=\'col-lg-8\'] h2');
    }

    get totalText() {
        return $('.col-lg-1 > h2');
    }

    get titleOfPictureOnTheHeader() {
        return $('tr > th:nth-of-type(1)');
    }

    get titleOnTheHeader() {
        return $('tr > th:nth-of-type(2)');
    }

    get titleOfPriceOnTheHeader() {
        return $('tr > th:nth-of-type(3)');
    }

    get titleOfDeleteOnTheHeader() {
        return $('tr > th:nth-of-type(4)');
    }

    get placeOrderButton() {
        return $('.btn.btn-success');
    }

    get placeOrderModalNameTextBox() {
        return $('#name');
    }

    get placeOrderModalCountryTextBox() {
        return $('#country');
    }

    get placeOrderModalCityTextBox() {
        return $('#city');
    }

    get placeOrderModalCreditCardTextBox() {
        return $('#card');
    }

    get placeOrderModalMonthTextBox() {
        return $('#month');
    }

    get placeOrderModalYearTextBox() {
        return $('#year');
    }

    get placeOrderPurchaseButton() {
        return $('div#orderModal > div[role=\'document\'] .btn.btn-primary');
    }

    get placeOrderSuccessModal() {
        return $('.stop-scrolling > .showSweetAlert.sweet-alert.visible');
    }

    get placeOrderSuccessModalMessageText() {
        return $('.showSweetAlert.sweet-alert.visible > h2');
    }

    get placeOrderSuccessModalInfoText() {
        return $('.showSweetAlert.sweet-alert.visible > .lead.text-muted');
    }

    get placeOrderSuccessModalOkButton() {
        return $('.btn.btn-lg.btn-primary.confirm');
    }

    get shoppingCartTotal() {
        return $('#totalp');
    }
    //#endregion
    getCartTotal() {
        CartTotalAmount = this.shoppingCartTotal.getText();
        return CartTotalAmount;
    }

    placeOrder(falseCase) {
        this.placeOrderButton.click();
        if (!falseCase) {
            this.placeOrderModalNameTextBox.waitForDisplayed({ timeout: 5000 });
            this.placeOrderModalNameTextBox.setValue(Test_Data.name);
            this.placeOrderModalCountryTextBox.setValue(Test_Data.country);
            this.placeOrderModalCityTextBox.setValue(Test_Data.city);
            this.placeOrderModalCreditCardTextBox.setValue(Test_Data.card_number);
            this.placeOrderModalMonthTextBox.setValue(Test_Data.card_month);
            this.placeOrderModalYearTextBox.setValue(Test_Data.card_year);
        }
        this.placeOrderPurchaseButton.waitForClickable({ timeout: 5000 });
        this.placeOrderPurchaseButton.click();
    }

    getPurchaseInfoFromSuccessModal() {
        let successMessageTextArray = this.placeOrderSuccessModalInfoText.getText().split(/\r?\n/);
        mOrderId = successMessageTextArray[0];
        mAmount =  successMessageTextArray[1];
        mCardNumber = successMessageTextArray[2];
        mCardName =  successMessageTextArray[3];
        mCardDate = successMessageTextArray[4];
    }

    returnOrderId() {
        return mOrderId;
    }

    returnAmount() {
        return mAmount;
    }

    returnCardNumber() {
        return mCardNumber;
    }

    returnCardName() {
        return mCardName;
    }

    returnCardMonth() {
        mCardMonth = moment(mCardDate).format('MM');
        return mCardMonth;
    }

    returnCardYear() {
        mCardYear = moment(mCardDate).format('YYYY');
        return mCardYear;
    }

    unSuccessfulOrderAlertMessage() {
        return browser.getAlertText();
    }
}

module.exports = new Shopping_Cart_Page();
