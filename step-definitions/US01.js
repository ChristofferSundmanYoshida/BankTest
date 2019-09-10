// This test requires you to manually delete David and David-123456 from the JSON directories
// We know how to solve this, either by creating a variable that holds randomized names and creates those
// or, delete the JSON files in the beginning of the test (this we dont know how to yet tho).
// Due to time constraints we were not able to do this before sprint end.
const ares = require('ares-helper');
let { $, sleep, moduleUs } = require('./funcs');
let scenario, scenarioName
let moduleCount = 1
let namn = 'David'
let pw = '123456'
ares.setProjectInfo({
      "userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njc1OTczMzQsImVtYWlsIjoiZGFuLm9sc2VuODVAZ21haWwuY29tIiwiaWF0IjoxNTY3NTEwOTM0fQ.LfmPZV2F_YJ7QBNuvrlufvt-j0yt0UQHgm6LTwsFEqU",
      "workspaceName": "fyrairad",
      "projectKey": "5d6e11c43e47305847483dcb",
      "projectName": "Banktest"
    })

module.exports = function () {

      this.Before(function(scenario, callback) {
            scenarioName = scenario;
            callback();
          });

      this.After(async function () {
            if (scenarioName.isSuccessful() === true) {
                  //  block of code to be executed if condition1 is true
                  await ares.testResult({
                        moduleName: moduleUs.name,
                        title: scenarioName.getName(),
                        passed: true
                  })
            } else
            {
                  //  block of code to be executed if the condition1 is false and condition2 is true
                  await ares.testResult({
                        moduleName: moduleUs.name,
                        title: scenarioName.getName(),
                        passed: false,
                        errorMessage: 'Could not compute!'
                  })
            }
                     

      });

      this.AfterFeature( async function() {
            await ares.endModule({moduleName:  moduleUs.name,});
            if (moduleUs.name === 'US11'){await ares.endTests();}
                      console.log(moduleUs.name)
          });


      this.Given(/^start page loaded$/, async function () {
            moduleUs.name = 'US01'
            ares.debug = false;

            await ares.startTests();

            await ares.startModule({
                  moduleName:  moduleUs.name,
                  totalTests: moduleCount
                  });

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

            await sleep(100)

            assert(konto === 'David', 'fel')

      });

}