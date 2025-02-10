import checkboxPage from "../../pages/checkbox.page";

describe('Checkboxes Test', () => {
    

    it('Based on checked & notchecked', async () => {
        await browser.pause(2000);
        await checkboxPage.open();
        await browser.pause(2000);

        await checkboxPage.clickcheckbox();
        //await checkboxPage.verifycheck2();
        await browser.pause(2000);


    });
});