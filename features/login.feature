Feature: As a customer I want to be able to create a bank account.

Scenario: Adding a new account named david
Given start page loaded
When I click the add account button
And I enter a new account name, a new password and reapeat my password
And press Add account
Then a new account named David should have been created