import { expect } from '@wdio/globals';
import Page1 from '../pageobjects/page1.js';
import AbTestPage from '../pageobjects/abtest.page1.js';

describe('AB Testing Example', () => {
    it('should verify the page title and header', async () => {
        // Open the main page
        await Page1.open();

        // Navigate to the AB Testing page
        await Page1.ForAbtest.click();
        await AbTestPage.landOnPage();

        // Verify the page title
        const title = await browser.getTitle();
        expect(title).toContain('A/B Testing');

        // Verify the header
        const header = await $('h3');
        const headerText = await header.getText();
        expect(headerText).toMatch(/A\/B Testing/);
    });
});
