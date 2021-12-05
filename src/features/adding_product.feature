@AddProduct
Feature: Add a product to the shopping cart
    As a customer
    I can add the product to the shopping cart

    Background:
        Given the user navigates to the website

    Scenario Outline: 1 - user adds a product to the cart
        When the user navigates to product page "<pid>"
        And the user adds the product to the shopping cart
        Then the products are listed on the shopping cart
        Examples:
            | pid |
            | 9   |
            | 14  |
