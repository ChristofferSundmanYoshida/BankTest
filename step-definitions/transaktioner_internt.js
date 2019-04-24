//Tomas
let { $, sleep } = require('./funcs');

let namn = 'tbiasini9'
let pw = 'hsshhCwQ'
let amount = 100 //amount of transaction
let balanceBefore1 //balance before transaction on "from" account
let balanceBefore2 //balance before transaction on "to" account
let balanceAfter1 //balance after transaction on "from" account
let balanceAfter2 //balance after tranaction on "to" account
let diff1 //the difference on the "from" account before-after. should be equal to the amount
let diff2 //the difference on the "to" account after-before. should also be equal to the amount

module.exports = function () {

  this.Given(/^transfermyaccount page loaded$/, async function () {
    await helpers.loadPage('http://localhost:3000/#login')

    let input = await driver.findElement(by.css('input#username'))
    let password = await driver.findElement(by.css('input#password'))

    input.sendKeys(namn)
<<<<<<< HEAD
    await sleep(500)

    password.sendKeys(pw)
    await sleep(500)

    await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()
    await sleep(500)

    // loadpage myaccounts so balances can be fetched
    await helpers.loadPage('http://localhost:3000/#my-accounts')
    await sleep(500)
=======
    await sleep(200)

    password.sendKeys(pw)
    await sleep(200)

    await driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()
    await sleep(200)

    // loadpage myaccounts so balances can be fetched
    await helpers.loadPage('http://localhost:3000/#my-accounts')
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452

    //fetching balance from account before the transaction
    balanceBefore1 = await driver.findElement(by.css('tr:nth-child(1) > td.text-right')).getText()
    balanceBefore1 = balanceBefore1.replace(/\D/g, '') / 100; //remove all characters that are not numbers, and converting to an int.

    //fetching balance from account before the transaction
    balanceBefore2 = await driver.findElement(by.css('tr:nth-child(2) > td.text-right')).getText()
    balanceBefore2 = balanceBefore2.replace(/\D/g, '') / 100; //remove all characters that are not numbers, and converting to an int.

<<<<<<< HEAD
    await sleep(500)

    //loading page for transfer between my accounts
    await helpers.loadPage('http://localhost:3000/#transfermyaccount')
    await sleep(500)
=======
    await sleep(200)

    //loading page for transfer between my accounts
    await helpers.loadPage('http://localhost:3000/#transfermyaccount')
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452

  });

  this.When(/^I choose my 1st account as Konto$/, async function () {
    //choosing 1st account as "from" account in drop down menu
    driver.findElement(by.css('select#fromAccountNumber.form-control > option:nth-child(1)')).click();
<<<<<<< HEAD
    await sleep(500)
=======
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452
  });

  this.When(/^I enter amount (\d+) as Summa \(SEK\)$/, async function (arg1) {
    //entering amount
    let inputAmount = await driver.findElement(by.css('input#sum.form-control'))
    inputAmount.sendKeys(amount)
<<<<<<< HEAD
    await sleep(500)
=======
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452
  });

  this.When(/^I choose my 2nd account as Konto$/, async function () {
    //choosing 2nd account as "to" account in drop down menu
    driver.findElement(by.css('select#toAccountNumber.form-control > option:nth-child(2)')).click();
<<<<<<< HEAD
    await sleep(500)
=======
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452
  });

  this.When(/^I click Utför$/, async function () {
    //click button for execute transaction "Utför"
    driver.findElement(by.css('button.btn.btn-primary.float-right.mt-3')).click()
<<<<<<< HEAD
    await sleep(500)
=======
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452
  });

  this.Then(/^(\d+) SEK should be moved from my (\d+)st account to my (\d+)nd account$/, async function (arg1, arg2, arg3) {
    //loading my account so balances after transaction can be fetched
    await helpers.loadPage('http://localhost:3000/#my-accounts')
<<<<<<< HEAD
    await sleep(500)
=======
    await sleep(200)
>>>>>>> 979a4b90830dd84d0ebee982dc1450e8b3b42452

    //fetching balance after the transaction 
    balanceAfter1 = await driver.findElement(by.css('tr:nth-child(1) > td.text-right')).getText()
    //remove all characters that are not numbers, and converting to an int.
    balanceAfter1 = balanceAfter1.replace(/\D/g, '') / 100;

    //fetching balance after the transaction
    balanceAfter2 = await driver.findElement(by.css('tr:nth-child(2) > td.text-right')).getText()
    //remove all characters that are not numbers, and converting to an int.
    balanceAfter2 = balanceAfter2.replace(/\D/g, '') / 100;

    diff1 = balanceBefore1 - balanceAfter1
    diff2 = balanceAfter2 - balanceBefore2
    assert(diff1 === amount, 'diff1 should be the same as the amount of the transaction, but it is not')
    assert(diff2 === amount, 'diff2 should be the same as the amount of the transaction, but it is not')

  });
}