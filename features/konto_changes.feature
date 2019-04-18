Feature: As a customer I want to be able to create, change and delete accounts.

Scenario: Adding a new account named Test1
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter Test1 as name
And press Add account
Then a new account named Test1 should have been created
