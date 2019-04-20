module.exports = function() {

      this.When(/^I click the add account button$/, async function () {
            await helpers.loadPage('http://localhost:3000/#my-accounts')


        

      });

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