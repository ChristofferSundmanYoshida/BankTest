Feature: usc_1

   as a customer i want to be able to view more information/transactions by clicking more.

Scenario: I want to be able to press "Show more" to view all the transaction for a specific account.
Given my-accounts page loaded
And i have enterd my account
When And i Click Visa mer
Then i should see more of my transaction history for that account