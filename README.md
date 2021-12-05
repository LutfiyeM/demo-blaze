Demo Blaze Test Automation
====================

This project is fully integrated with [WebdriverIO](http://webdriver.io/) and supports Page Object Model Design Pattern. This repository contains automation script using the Cucumber (v6.x) BDD framework. It uses the chromedriver NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

## Features

- WebDriverIO
- Page Object Model
- Headless

## Requirements

- Node version 14 or higher
- npm version 6.14.13 or higher
- Preinstalled browser driver

 This project works fine with both with NPM and Yarn.

## Installation

1. Running `git clone https://github.com/lutfiyem/demo-blaze.git`
2. Running `npm install`

# How to write a test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./src/features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

# How to run the test

To run your tests just call the [WDIO runner](https://webdriver.io/docs/configurationfile/):

```sh
$ npm run test
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

# Configurations

To configure your tests, checkout the [`wdio.conf.js`]

If headless mode needs to be run, the chromeOptions [`'--headless'`] should be uncommented in the [`wdio.conf.js`]

# Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

```sh
$ npx wdio wdio.conf.js --spec ./features/*.feature
```

# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Tag or @AnotherTag'
```

Some tag scripts have been prepared in package.json for the run:

```sh
$ npm run AddProduct
```

```sh
$ npm run Purchase
```

```sh
$ npm run ShoppingCart
```

For more tag options please see the [Cucumber.js documentation](https://docs.cucumber.io/tag-expressions/)
