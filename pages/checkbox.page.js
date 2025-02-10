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

    get checkbox1(){
        return $('(//input[@type="checkbox" and not(@checked)])');
    }
    get checkbox2(){
        return $('(//input[@type="checkbox" and @checked])');
    }

    async clickcheckbox(){
        const checkBox2 = this.checkbox2();
        await this.checkbox1.click();
        await this.checkox2.click();
    }

    // Method to click the checkboxes
    async clickcheck() {
        await this.Checkboxes[0].click();
        await this.Checkboxes[1].click();

    }

    async verifycheck() {
        await expect(this.Checkboxes[0]).toHaveAttribute('checked', 'true');

        await expect(await this.Checkboxes[1].getAttribute('checked')).toBeNull();
    }

    async verifycheck2() {
        await expect(this.checkbox1).toHaveAttribute('checked', 'true');

        await expect(await this.checkbox2.getAttribute('checked')).toBeNull();
    }





    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
