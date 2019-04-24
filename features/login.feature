Feature: As a customer I want to be able to create a bank account.

Scenario: Adding a new account named dav
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter dav as name
And press Add account
Then a new account named dav should have been created