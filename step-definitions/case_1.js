let { $, sleep } = require("./funcs");
    let namn = "gsimnett0";
    let pw = "TbObbUKQ";
    let balance
    let bgkonto = "111-1111"
    let pgkonto = "111111-1"
    let akonto = "123456789-10"
    let amount = "1"
    let message = `vi skickar ${amount} till ${bgkonto}`

module.exports = function() {
    this.Given(/^Överföringar andra konton has loaded$/,async function () {
        await helpers.loadPage("http://localhost:3000/#login");
        //sends the login info.
        let input = await $("input#username");
        let password = await $("input#password");
        input.sendKeys(namn);
        password.sendKeys(pw);
        //clicks the submit.
        let logon = await $(".login-form button");
        await logon.click();
        await sleep(500)
        //getting balance to compare later.
        let myAccount = await $(".nav li:nth-of-type(4)");
        await myAccount.click();
        await sleep(500)
        balance = await driver.findElement(by.css('tr:nth-child(1) > td.text-right')).getText()
        //remove all characters that are not numbers, and converting to an int.
        balance = balance.replace(/\D/g, '') / 100;
        //Enters the transfer page
        let myTransfer = await $(".nav li:nth-of-type(5)");
        await myTransfer.click();
        await sleep(500)
        let siteCheck = await driver.findElement(by.css(".row article p")).getText()
        assert(siteCheck === "Skriv in kontouppgifter för önskat konto att skicka pengar till.");
      });

      this.Given(/^I have Entered the correct BG information$/,async function () {
        //Fill the send Form.
        await driver.findElement(by.css("input[value='bg']")).click()
        await driver.findElement(by.css("input#toAccountNumber.form-control")).sendKeys(bgkonto)
        await driver.findElement(by.css("input#sum.form-control")).sendKeys(amount)
        await driver.findElement(by.css("input#label.form-control")).sendKeys(message)
      });
      
      this.When(/^i click the send button$/,async function () {
        //clicks submit.
        let submit = await $(".transfer-form button");
        await submit.click();
      });     

      this.When(/^i Click the confirmation promt$/,async function () {
        //clicks the alert prompt.
        let alert = await driver.switchTo().alert()
        await alert.accept()
      });

      this.Then(/^i should have the sum taken from my account$/,async function () {
        balanceAfter = await driver.findElement(by.css('tr:nth-child(1) > td.text-right')).getText()
        //remove all characters that are not numbers, and converting to an int.
        balanceAfter = balanceAfter.replace(/\D/g, '') / 100;
        //comparing expected value with real value.
        assert(balance - amount === balanceAfter,"fel")
      });

      this.Given(/^I have Entered the correct PG information$/,async function () {
        //Fill the send Form.
        await driver.findElement(by.css("input[value='pg']")).click()
        await driver.findElement(by.css("input#toAccountNumber.form-control")).sendKeys(pgkonto)
        await driver.findElement(by.css("input#sum.form-control")).sendKeys(amount)
        await driver.findElement(by.css("input#label.form-control")).sendKeys(message)
      });

      this.Given(/^I have Entered the correct Other information$/,async function () {
        //Fill the send Form.
        await driver.findElement(by.css("input[value='ta']")).click()
        await driver.findElement(by.css("input#toAccountNumber.form-control")).sendKeys(akonto)
        await driver.findElement(by.css("input#sum.form-control")).sendKeys(amount)
        await driver.findElement(by.css("input#label.form-control")).sendKeys(message)
      });

      this.Given(/^I have Entered the correct information for transfer over the limit$/,async function () {
        //Fill the send Form.
        await driver.findElement(by.css("input[value='ta']")).click()
        await driver.findElement(by.css("input#toAccountNumber.form-control")).sendKeys(akonto)
        await driver.findElement(by.css("input#sum.form-control")).sendKeys("50000")
        await driver.findElement(by.css("input#label.form-control")).sendKeys(message)
      });

      this.Then(/^I should recieve an error message$/,async function () {
        let errorCheck = await driver.findElement(by.css("small.error")).getText()
        assert(errorCheck === "Du kan inte överföra över 30000 under de senaste 7 dagarna." || "Du har inte tillräckligt med pengar.");
        console.log(errorCheck)
      });

      this.Given(/^I have Entered the correct information for transfer over the account balance$/,async function () {
        //Fill the send Form.
        await driver.findElement(by.css("input[value='ta']")).click()
        await driver.findElement(by.css("input#toAccountNumber.form-control")).sendKeys(akonto)
        await driver.findElement(by.css("input#sum.form-control")).sendKeys("5000000")
        await driver.findElement(by.css("input#label.form-control")).sendKeys(message)
      });
};
