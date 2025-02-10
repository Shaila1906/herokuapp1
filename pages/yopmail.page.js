import { $ } from '@wdio/globals'
import fs from 'fs';
import path from 'path';

export class YopMail {

    filePath = path.join(process.cwd(), 'counter.txt'); // Static property

    

    get mailField () {
        return $('input[id ="login"]');
    }

    get enterBtn () {
        return $('button[title = "Check Inbox @yopmail.com"]');
    }

    get mailAddress () {
        return $('div[class = "bname"]');
    }


    async clickBtn () {

        await this.enterBtn.click();
    }
    async makeMail (a) {
        await this.mailField.setValue(a);
        await this.enterBtn.click();
    }

    async getAddress () {
        const address = await this.mailAddress.getText();
        return address; 
    }

    async updateCounter() {
        let counter = 1; // Default starting value

        // Check if the file exists
        if (fs.existsSync(this.filePath)) {
            // If the file exists, read the value from it
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            counter = parseInt(fileContent, 10) + 1; // Increment the counter
        }

        // Write the updated counter value back to the file
        fs.writeFileSync(this.filePath, counter.toString());

        console.log(`The current counter value is: ${counter}`);
        return counter;
    }



    open () {
        return browser.url(`https://yopmail.com/`);
    }
}


export default new YopMail();
