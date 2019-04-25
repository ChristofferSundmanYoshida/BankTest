let { $, sleep } = require('./funcs');

let namn = 'David'
let pw = '123456'

'body > main > div > aside > nav > ul > li:nth-child(3) > button'

module.exports = function () {

      this.Given(/^start page loaded$/, async function () {

            await helpers.loadPage('http://localhost:3000/#start')

            await sleep(100)

            await sleep(100)

      });

      this.When(/^I click the add account button$/, async function () {

            await driver.findElement(by.css('body > main > div > aside > nav > ul > li:nth-child(3) > button')).click()

      });
      this.When(/^I enter a new account name, a new password and reapeat my password$/, async function () {

            let inputUsername = await driver.findElement(by.css('input#username'))
            let password = await driver.findElement(by.css('input#password'))
            let inputRepeated = await driver.findElement(by.css('input#passwordRepeated'))

            await inputUsername.sendKeys(namn)
            await password.sendKeys(pw)
            await inputRepeated.sendKeys(pw)

      });
      this.When(/^press Add account$/, async function () {

            await driver.findElement(by.css('body > main > div > article > form > button')).click()

      });

      this.Then(/^a new account named David should have been created$/, async function () {

            await sleep(500)

            konto = await driver.findElement(by.css('body header small span')).getText()

            console.log(konto)

            assert(konto === 'David', 'fel')

            await sleep(100)

      });

}