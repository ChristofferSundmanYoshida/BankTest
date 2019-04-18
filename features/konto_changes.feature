Feature: As a customer I want to be able to create, change and delete accounts.

Scenario: Adding a new account named Test1
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter Test1 as name
And press Add account
Then a new account named Test1 should have been created

Scenario: Changing name on an existing account.
Given my-accounts page loaded
When I click the change account name button
And I get prompted to enter a new name for the account
And I enter Test2 as name
And press accept changes
Then the account should have changed name to Test2

Scenario: Deleting an existing account
Given my accounts-page loaded
When I click the button to remove account
Then I should be asked to confirm
And after confirming the prompt the accound should be deleted
