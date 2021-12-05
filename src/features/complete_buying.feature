@Purchase
Feature: Checkout features
    As a customer
    I can complete the checkout

    Background:
        Given the user navigates to the website

    Scenario: 2 - the payment completes with all relevant fields
        When the user selects a random product
        And the user adds the product to the shopping cart
        And the user places an order with filling all relevant fields in the payment form
        Then the order should be completed

    Scenario: 3 - the payment is not completed without entering all relevant fields
        When the user selects a random product
        And the user adds the product to the shopping cart
        And the user places an order without filling all relevant fields in the payment form
        Then the order should not be completed
