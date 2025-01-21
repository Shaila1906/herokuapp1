import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ABTestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeading() {
        return $('h3'); // Example for a heading element
    }

   
    get descriptionText() {
        return $('p'); // The paragraph element
    }

    async verifyHeading(expectedHeading) {
        await expect(this.pageHeading).toHaveText(expectedHeading);
    }

    async verifyDescriptionContains(expectedText) {
        await expect(this.descriptionText).toHaveText(expectedText);
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('abtest');
    }
}

export default new ABTestPage();
