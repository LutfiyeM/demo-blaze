import { Given } from 'cucumber';

const { config } = require('../../wdio.conf');

Given(/^the user navigates to the website$/, () => {
    browser.url(config.baseUrl);
});
