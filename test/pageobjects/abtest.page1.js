import { $ } from '@wdio/globals'
import Page from './page1.js';

class AbTestPage extends Page1 {

   

    async landOnPage () {
        
        await this.ForAbtest.click();
    }


}