import { $ } from '@wdio/globals'
import Page1 from './page1.js';

class AbTestPage extends Page1 {

   

    async landOnPage () {
        
        await this.ForAbtest.click();
        await browser.pause(5000)
        //await expect(browser).toHaveUrl("/https://the-internet.herokuapp.com/abtest")
    }


}

export default AbTestPage;