const ares = require('ares-helper');
let { $, sleep, moduleUs } = require('./funcs');
    let namn = "gsimnett0";
    let pw = "TbObbUKQ";

module.exports = function() {
  this.Given(/^my\-accounts page loaded$/, async function() {
    moduleCount = 1
    moduleUs.name = 'US06'

    await ares.startModule({
          moduleName:  moduleUs.name,
          totalTests: moduleCount
          });

    await helpers.loadPage("http://localhost:3000/#login");

    let input = await $("input#username");
    let password = await $("input#password");

    input.sendKeys(namn);
    password.sendKeys(pw);

    let logon = await $(".login-form button");
    await logon.click();
    let myAccount = await $(".nav li:nth-of-type(4)");
    await myAccount.click();
  });

  this.Given(/^i have enterd my account$/, async function() {
    let aTag = await $(".accounts tr a");
    await aTag[0].click();
  });

  this.When(/^And i Click Visa mer$/, async function() {
    let rowTest = await $(".history table tr");
    let nrow = rowTest.length - 1;
    assert(nrow <= 10);
    let merKnapp = await $("#show-button");
    await merKnapp.click();
  });

  this.Then(
    /^i should see more of my transaction history for that account$/,
    async function() {
      let rowTest = await $(".history table tr");
      let nrow = rowTest.length - 1;
      assert(nrow >= 10);
    }
  );
};
