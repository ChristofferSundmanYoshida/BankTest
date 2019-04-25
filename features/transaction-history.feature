Feature: As a customer I want to see a summary of all my account balances and my last five transactions (No matter which account).

Scenario: Checking #Start for account names, messages and balance
Given #Start page loaded properly
When the page is loaded
Then I can see that Testkonto-03 balance is 50300
And that Testkonto-03 under history has the message Större muta
And it has 300 as sum
