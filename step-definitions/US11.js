let {$, sleep} = require('./funcs');

let namn = 'TestKonto3' //Inloggningsnamn för detta test, kan bytas ut för att kontrollera mot en annan befintlig användare.
let pw = '123456'   //Lösenord för ovan nämnda användare.


module.exports = function() {

    //Load login page, login using assigned account from test-manuscript and load #Start
    this.Given(/^\#Start page loaded properly$/, async function () {

        
        await helpers.loadPage('http://localhost:3000/#login')
            
        let input = await driver.findElement(by.css('input#username'))
        let password = await driver.findElement(by.css('input#password'))

        await input.sendKeys(namn)
        await password.sendKeys(pw)

        await sleep(100)
        
        await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()

        await sleep(100) 

        await helpers.loadPage('http://localhost:3000/#start')


      });

    this.When(/^the page is loaded$/, function () {

        //This test is not necessary, it is tested above.

      });

    //Checks the table after a balance, and asserts that against what it is supposed to be
    this.Then(/^I can see that Testkonto\-(\d+) balance is (\d+)$/, async function (arg1, arg2) {

        let balance1 = await driver.findElement(by.css('.accounts-start tr:nth-child(4) > td.text-right')).getText()
        balance1 = balance1.replace(/\D/g, '') / 100; //remove all characters that are not numbers, and converting to an int.

        assert(balance1 === 50300, 'fel')

      });

    //Asserts a specific cell in a specific table against expected result
    this.Then(/^that Testkonto-03 under history has the message Större muta$/, async function () {

        let muta1 = await driver.findElement(by.css('.start-history tr:nth-child(2) > th:nth-child(2)')).getText()

        console.log(muta1)
        
        assert(muta1 === 'Större muta', 'fel')

      });

    //Asserts a specific cell in a specific table against expected result
    this.Then(/^it has (\d+) as sum$/, async function (arg1) {

        let mutaSum = await driver.findElement(by.css('.start-history tr:nth-child(2) > td')).getText()

        console.log(mutaSum)
        
        assert(mutaSum === '300', 'fel')
    
      });

}