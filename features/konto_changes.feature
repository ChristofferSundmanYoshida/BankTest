Feature: As a customer I want to be able to create, change and delete accounts.

Scenario: Creating an account
Given my-accounts page loaded
When I click the add account button I get prompted to enter a name for the account
And I enter TestKonto1 as name and click the add button
Then the account TestKonto1 is created 

Scenario: Renaming an account
Given my-accounts page loaded
When I click the configure account I should get prompted to change the name
And when I enter TestKonto2 as name and I click the save changes button
Then TestKonto1 is renamed TestKonto2

Scenario: Removing an existing account
Given my-accounts page loaded
When I click the remove account button on Testkonto2
Then the account TestKonto2 should have been removed


