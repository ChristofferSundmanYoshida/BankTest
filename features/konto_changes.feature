Feature: As a customer I want to be able to create, change and delete accounts.

Scenario: Adding a new account named TestKonto1
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter TestKonto1 as name
And press Add account
Then a new account named TestKonto1 should have been created

Scenario: Renaming an existing account and confirming the same name works on multiple accounts.
Given my-accounts page loaded
When I click the add account button
And I get prompted to enter a name for the account
And I enter TestKonto2 as name
And I press Add account
And I press the configure account button on Testkonto2
And I rename it to TestKonto1
Then a new account named TestKonto2 should have been created
And renamed TestKonto1

Scenario: Removing an existing account.
Given my-accounts page loaded
When I click the remove account button
And I get prompted to confirm my action
And I confirm the action
Then the account should have been removed

Scenario: test2
Given test2
Then test2
