import { expect } from '@wdio/globals'
import BasicAuthPage from '../../pages/basicAuth.page.js'

describe('Basic Auth Page Test', () => {
    it('should login with valid credentials', async () => {

        // Navigate to the Basic Auth Test page
        await BasicAuthPage.open();

        // Verifying the header
        await BasicAuthPage.verifyHeader('Basic Auth');
        
    });
});
