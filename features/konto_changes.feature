Feature: As a customer I want to be able to create, change and delete accounts.

Scenario: Creating and renaming an account
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter TestKonto1 as name
And I press the configure account button on Testkonto1
And I rename it to TestKonto2
Then TestKonto1 is renamed TestKonto2

Scenario: Removing an existing account.
Given my-accounts page loaded
When I click the remove account button on Testkonto2
And I get prompted to confirm my action
And I confirm the action
Then the account TestKonto2 should have been removed


