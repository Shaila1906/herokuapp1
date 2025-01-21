import { expect } from '@wdio/globals'
import ABTestPage from '../pageobjects/abtest.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('A/B Test Page', () => {
    it('should verify the heading and description', async () => {
        // Navigate to the A/B Test page
        await browser.url('https://the-internet.herokuapp.com/abtest');

        // Verify the heading matches the expected text
        await ABTestPage.verifyHeading('A/B Test Variation 1'); // Replace with the actual heading

        // Verify the description contains specific text
        await ABTestPage.verifyDescriptionContains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'); // Replace with actual text
    });
});
