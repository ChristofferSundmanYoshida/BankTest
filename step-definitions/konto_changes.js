module.exports = function() {

    this.When(/^I click the add account button$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      this.When(/^I get prompted to enter a name for the account$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
      
      this.When(/^I enter Test(\d+) as name$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
      
      this.When(/^press Add account$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });

      this.Then(/^a new account named Test(\d+) should have been created$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
      });
}