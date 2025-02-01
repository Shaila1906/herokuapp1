import { $$ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {


    // Selector for the checkboxes
    get Checkboxes() {
        return $$('input[type="checkbox"]');
    }



    // Method to click the "Add Element" button
    async clickcheck() {
        await this.Checkboxes[0].click();
        await this.Checkboxes[1].click();

    }

    async verifycheck() {
        await expect(this.Checkboxes[0]).toHaveAttribute('checked', 'true');

        await expect(await this.Checkboxes[1].getAttribute('checked')).toBeNull();
    }





    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
