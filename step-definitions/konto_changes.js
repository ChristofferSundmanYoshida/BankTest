let {$, sleep} = require('./funcs');

let namn = 'TestKonto1'
let pw = '123456'
let accountName = 'TestKonto1'
let accountName2 = 'TestKonto2'

module.exports = function() {
           

      this.Given(/^my\-accounts page loaded$/, async function () {
            
            await helpers.loadPage('http://localhost:3000/#login')
            
            let input = await driver.findElement(by.css('input#username'))
            let password = await driver.findElement(by.css('input#password'))

            await input.sendKeys(namn)
            await password.sendKeys(pw)

            await sleep(400)
            
            await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()

            await sleep(400) 

            await helpers.loadPage('http://localhost:3000/#my-accounts')

      });

   

      this.When(/^I click the add account button I get prompted to enter a name for the account$/, async function () {

            await sleep (400)
            
            await driver.findElement(by.css('.row.px-2 button')).click()

            clicked = await driver.findElement(by.css('input#newAccountName')).getAttribute('placeholder')

            await sleep(400)

            assert(clicked === "Ange ett valfritt kontonamn", 'fel')

            await sleep(400)
          
      });

      this.When(/^I enter TestKonto(\d+) as name and click the add button$/, async function (arg1) {    

            let input = await driver.findElement(by.css('input#newAccountName'))

            await input.sendKeys(accountName)

            await sleep(400)

            await driver.findElement(by.css('button.add-account-btn.btn.btn-primary')).click()

            await sleep(400)

            
          });

          
      this.Then(/^the account TestKonto(\d+) is created$/, async function (arg1) {

            konto = await driver.findElement(by.css('.accounts tr a')).getText()
            await konto[0]

            await sleep(400)

            assert(konto === 'TestKonto1', 'fel')

            await sleep(400)


          });

      this.When(/^I click the configure account I should get prompted to change the name$/, async function () {
            
            await sleep (400)
            
            await driver.findElement(by.css('button.changers.btn.btn-primary')).click()

            clicked = await driver.findElement(by.css('input#changeName')).getAttribute('placeholder')

            await sleep(400)

            assert(clicked === "Ange ett valfritt kontonamn", 'fel')

            await sleep(400)

          });

          this.When(/^when I enter TestKonto(\d+) as name and I click the save changes button$/, async function (arg1) {

            let input = await driver.findElement(by.css('input#changeName'))

            await input.sendKeys(accountName2)

            await sleep(400)

            await driver.findElement(by.css('div#changeNameModal .change-account-btn')).click()

            await sleep(400)


          });

          this.Then(/^TestKonto(\d+) is renamed TestKonto(\d+)$/, async function (arg1, arg2) {

            konto = await driver.findElement(by.css('.accounts tr a')).getText()
            await konto[0]
  
            await sleep(400)
  
            assert(konto === 'TestKonto2', 'fel')
  
            await sleep(400)

          });

          /*
          this.When(/^I click the remove account button on Testkonto(\d+) and I get prompted to confirm my action$/, async function (arg1) {

            // There is no prompt, the account just gets deleted

            await sleep(400)
            
            await driver.findElement(by.css('tbody td .remove-account')).click()

            await sleep(400)


          });
          
          this.When(/^I click the remove account button on Testkonto(\d+)$/, async function (arg1) {

            konto = await driver.findElement(by.css('.accounts tbody')).getText()
            await konto[0]
  
            await sleep(400)
  
            assert(konto === '', 'fel')

          });
          */

         this.When(/^I click the remove account button on Testkonto(\d+)$/, async function (arg1) {

            // There is no prompt, the account just gets deleted

            await sleep(400)
            
            await driver.findElement(by.css('tbody td .remove-account')).click()

            await sleep(400)


          });

          this.Then(/^the account TestKonto(\d+) should have been removed$/, async function (arg1) {
            // Write code here that turns the phrase above into concrete actions
            konto = await driver.findElement(by.css('.accounts tbody')).getText()
            await konto[0]
  
            await sleep(400)
  
            assert(konto != 'TestKonto2', 'fel')

          });
   



}
