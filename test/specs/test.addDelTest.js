import AddDelPage from '../pageobjects/addDel.page.js'

describe('Add/Remove Elements Page', () => {
    beforeEach(async () => {
        // Navigate to the Add/Remove Elements page
        await AddDelPage.open()
    });

    it('should add a single element', async () => {
        // Add an element
        await AddDelPage.addElement();

        // Verify that one delete button is displayed
        const count = await AddDelPage.getDeleteButtonsCount();
        expect(count).toBe(1);
    });


    it('should add multiple elements and verify the count', async () => {
        // Add multiple elements
        await AddDelPage.addElement();
        await AddDelPage.addElement();
        await AddDelPage.addElement();

        // Verify the number of delete buttons
        const count = await AddDelPage.getDeleteButtonsCount();
        expect(count).toBe(3);
    });


    it('should delete an element and verify the count', async () => {
        // Add multiple elements
        await AddDelPage.addElement();
        await AddDelPage.addElement();
    
        // Confirm elements are added
        const initialCount = await AddDelPage.getDeleteButtonsCount();
        expect(initialCount).toBe(2);
    
        // Delete the first element
        await AddDelPage.deleteElement(0);
    
        // Verify the count decreases
        const finalCount = await AddDelPage.getDeleteButtonsCount();
        expect(finalCount).toBe(1);
    });

    

});
    