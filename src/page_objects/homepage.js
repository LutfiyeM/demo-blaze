class Homepage {
    get headerCartElement() {
        return $('#cartur');
    }

    clickCartLinkOnHeader() {
        this.headerCartElement.click();
    }
}

module.exports = new Homepage();
