import  YopMail   from "../../pages/yopmail.page";

describe('YopMail Email Test', () => {
    let yopMail;

    // before(async () => {
    //     yopMail = new YopMail(); // Create an instance to use instance methods
    // });

    it('should open YopMail and generate an email with a counter', async () => {
        // Open YopMail website
        await YopMail.open();

        // Get the updated counter value
        const counter = await YopMail.updateCounter(); // Calling static method on the class

        // Generate a unique email using the counter
        const email = `test${counter}@yopmail.com`;
        console.log(`Generated email: ${email}`);

        // Enter email and check inbox
        await YopMail.makeMail(`test${counter}`); // Only pass the name part

        // Verify the entered email address
        const displayedEmail = await YopMail.getAddress();
        console.log(`Displayed email: ${displayedEmail}`);

        // Validate that the correct email is shown
        expect(displayedEmail).toContain(`test${counter}`);
    });
});
