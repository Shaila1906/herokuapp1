import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for basic auth page
 */
class BasicAuthPage extends Page {

//     /**
//      * define selectors using getter methods
//      */
    


    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('basic_auth/');
    }
}

export default new BasicAuthPage();
