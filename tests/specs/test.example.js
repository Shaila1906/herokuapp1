import axios from 'axios';
import { browser } from '@wdio/globals'

describe('Broken Images Test', () => {
    it('should verify all images are loading correctly', async () => {
        await browser.url('https://the-internet.herokuapp.com/broken_images');

        // Get all image elements
        const images = await $$('img');

        for (let img of images) {
            const src = await img.getAttribute('src'); // Get image URL

            try {
                // Send HTTP request to check image status
                const response = await axios.get(src);

                // Log detailed HTTP response
                console.log(`✅ Image Loaded: ${src}`);
                console.log(`   - HTTP Status: ${response.status}`);
                console.log(`   - Status Text: ${response.statusText}`);
                console.log(`   - Headers:`, response.headers);

            } catch (error) {
                // Log the error response if the request fails
                if (error.response) {
                    console.log(`❌ Broken Image: ${src}`);
                    console.log(`   - HTTP Status: ${error.response.status}`);
                    console.log(`   - Status Text: ${error.response.statusText}`);
                    console.log(`   - Headers:`, error.response.headers);
                } else {
                    console.log(`❌ Error fetching image: ${src}`);
                    console.log(`   - Error Message: ${error.message}`);
                }
            }
        }
    });
});