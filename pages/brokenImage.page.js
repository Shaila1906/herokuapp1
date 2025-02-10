import { $$ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BrokenImagePage extends Page {
    /**
     * define selectors using getter methods
     */
    get images() {
        console.log("xx");
        return $('img'); // $$ returns all matching elements (images in this case)
    }

   
    async verifyImagesVisibility() {
        this.images.forEach((img) => {
            //expect(img.isDisplayed()).toBe(true);  // Check if each image is displayed
            expect(img.naturalWidth).toBeGreaterThan(0);
            

        });
        // const first = this.images[0];
        // expect(first.isDisplayed()).toBe(true);
        // const second = this.images[1];
        // expect(second.isDisplayed()).toBe();
    }

    async getImageUrl(){

        const image = await $$('img');

        const imgUrl = await image[0].getAttribute('src');
        console.log("s", imgUrl);
            
        
    }

    

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('broken_images');
    }
}

export default new BrokenImagePage();
