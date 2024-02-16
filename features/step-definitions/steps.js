import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, $ } from "@wdio/globals";

Given("Iam on login page", async function() {
    await browser.navigateTo("https://the-internet.herokuapp.com/login");
});

When('I enter a "tomsmith" username', async function() {
    await $("#username").setValue("tomsmith");
});

When('I enter a "sfds" username', async function() {
    (await $("#username")).setValue("sfds");
});

When('I enter a "SuperSecretPassword!" password', async function() {
    const passwordInput = await $('#password');
    passwordInput.setValue("SuperSecretPassword!");
});

When('I enter a "fsfds!" password', async function() {
    const passwordInput = await $('#password');
    passwordInput.setValue("fsfds");
});

When('I press on Login button', async function() {
  const button = await $("button[type=submit]");
  button.click();
});

Then('I see a message "You logged into a secure area!"', async function() {
    const flashMessage = await $("#flash");
    await expect(flashMessage)
        .toHaveText(expect.stringContaining("You logged into a secure area!"));
});

Then('I see a message "Your username is invalid!"', async function() {
    const flashMessage = await $("#flash");
    await expect(flashMessage)
        .toHaveText(expect.stringContaining("Your username is invalid!"));
  });

Then('I see the Logout button', async function() {
   const logoutButton = await $("i*=Logout");
   await expect(logoutButton).toBeDisplayed();
 
});

Then("I don't see the Logout button", async function() {
    const logoutButton = await $("i*=Logout");
    await expect(logoutButton).not.toBeDisplayed();
});








    
    
    