
import BasicAuthPage from '../../pages/basicAuth.page.js'

describe('Basic Auth Page Test', () => {
    it('should login with valid credentials', async () => {

        // Navigate to the Basic Auth Test page
        await BasicAuthPage.open();

        await browser.pause(2000);

        await BasicAuthPage.clickonBasicAuth();

        await browser.pause(4000);
        await browser.auth('admin', 'admin');
        
        // Verify the heading matches the expected text
       // await ABTestPage.verifyHeading('A/B Test Variation 1'); // Replace with the actual heading

        // Verify the description contains specific text
        //await ABTestPage.verifyDescriptionContains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'); // Replace with actual text
    });
});
