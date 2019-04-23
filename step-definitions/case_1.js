let { $, sleep } = require("./funcs");
    let namn = "gsimnett0";
    let pw = "TbObbUKQ";

module.exports = function() {
    this.Given(/^Överföringar andra konton has loaded$/,async function () {
        await helpers.loadPage("http://localhost:3000/#login");

        let input = await $("input#username");
        let password = await $("input#password");
    
        input.sendKeys(namn);
        password.sendKeys(pw);
    
        let logon = await $(".login-form button");
        await logon.click();
        let myAccount = await $(".nav li:nth-of-type(5)");
        await myAccount.click();

//        let currUrl = driver.getCurrentUrl();
  //      console.log(currUrl[1])
       // assert(currUrl === "http://localhost:3000/#transfer", 'fel');


      });

      this.Given(/^I have Entered the correct information$/, function () {
      });
      
      this.When(/^i click the send button$/, function () {
      });     

      this.When(/^i Click the confirmation promt$/, function () {
      });

      this.Then(/^i should have the sum taken from my account$/, function () {
      });
};
