import { expect } from '@wdio/globals'
import AbTestPage from '../pageobjects/abtest.page1.js'


describe('AB Testing Example', () => {
    it('should verify the page title and header', async () => {
        // Open the AB Testing page
        await browser.url('https://the-internet.herokuapp.com/abtest');

        // Verify the page title
        const title = await browser.getTitle();
        expect(title).toContain('A/B Testing'); // Title contains "A/B Testing"

        // Verify the header
        const header = await $('h3'); // Header element
        const headerText = await header.getText();
        expect(headerText).toMatch(/A\/B Testing/); // Matches "A/B Testing"
    });
});
