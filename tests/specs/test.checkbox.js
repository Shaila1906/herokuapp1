import checkboxPage from "../../pages/checkbox.page";

describe('Checkboxes Test', () => {
    it('should verify checkboxes are checked', async () => {

        await checkboxPage.open();
        await checkboxPage.clickcheck();
        await checkboxPage.verifycheck();




    });
});