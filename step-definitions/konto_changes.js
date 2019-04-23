let {$, sleep} = require('./funcs');

module.exports = function() {
           

      this.Given(/^my\-accounts page loaded$/, async function () {
            // Write code here that turns the phrase above into concrete actions
            await helpers.loadPage('http://localhost:3000/#login')
            
            let input = await driver.findElement(by.css('input#username'))
            let password = await driver.findElement(by.css('input#password'))

            let namn = 'Christoffer'
            let pw = '123456'

            input.sendKeys(namn)
            password.sendKeys(pw)

            await sleep(1000)
            
            await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()

            await sleep(2000) 






            await helpers.loadPage('http://localhost:3000/#my-account')

      });

      /*
      this.When(/^I click the add account button$/, async function () {
            // Write code here that turns the phrase above into concrete actions
            let clicked = await driver.findElement(by.css('btn.btn-primary').click)

            assert(clicked === true, 'fel')
          
      });
      */        

      /*
      this.When(/^I get prompted to enter a name for the account$/, function () {
        

      });
      
      this.When(/^I enter Test(\d+) as name$/, function (arg1) {
        
      });
      
      this.When(/^press Add account$/, function () {

      });

      this.Then(/^a new account named Test(\d+) should have been created$/, function (arg1) {

      });
*/

}