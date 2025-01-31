import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for basic auth page
 */
class BasicAuthPage extends Page {

    //     /**
    //      * define selectors using getter methods
    //      */

    get successMessage() { 
        return $('p'); 
    }


    get header() { 
        return $('h3'); 
    }
 

    //methofd to verify
    
    async verifyHeader(expectedHeader) {
        await expect(this.header).toHaveText(expectedHeader);
    }




    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    }
}

export default new BasicAuthPage();
