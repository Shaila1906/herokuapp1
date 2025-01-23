import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddDelPage extends Page {


    // Selector for the "Add Element" button
    get addElementButton() {
        return $('button[onclick="addElement()"]');
    }
   
    // Selector for the "Delete" buttons
    get deleteButtons() {
        return $$('button[onclick="deleteElement()"]');
    }

    // Method to click the "Add Element" button
    async addElement() {
        await this.addElementButton.click();
    }
    // Method to click the "Delete" button
    async deleteElement(index){

        await this.deleteButtons[index].click();
      }

     // Method to get the count of "Delete" buttons
     async getDeleteButtonsCount() {
        return await this.deleteButtons.length;
    }


     
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('add_remove_elements/');
    }
}

export default new AddDelPage();
