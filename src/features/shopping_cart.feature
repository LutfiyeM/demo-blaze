@ShoppingCart
Feature: Shopping cart features
    As a customer
    I can see the shopping cart page loaded with expected content

    Background:
        Given the user navigates to the website

    Scenario: 4 - the shopping cart default components
        Then the shopping cart components should be seen properly
