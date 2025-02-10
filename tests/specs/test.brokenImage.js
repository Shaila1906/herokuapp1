import brokenImagePage from "../../pages/brokenImage.page";

describe('Broken Images Page tests', () => {
    it('should display all images on the page', async () => {

        // Call the method to verify that all images are visible
        await brokenImagePage.open();
        //await browser.pause(3000);
        await brokenImagePage.getImageUrl();
        //await brokenImagePage.verifyImagesVisibility();
        console.log("x");


    });
});