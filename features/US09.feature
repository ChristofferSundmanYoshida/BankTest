Feature: usc_1

   As a customer i want to be able to send/pay other people 

Scenario: BG transfer
Given Överföringar andra konton has loaded
And I have Entered the correct BG information
When i click the send button
And i Click the confirmation promt
Then i should have the sum taken from my account

Scenario: PG transfer
Given Överföringar andra konton has loaded
And I have Entered the correct PG information
When i click the send button
And i Click the confirmation promt
Then i should have the sum taken from my account

Scenario: Other transfer
Given Överföringar andra konton has loaded
And I have Entered the correct Other information
When i click the send button
And i Click the confirmation promt
Then i should have the sum taken from my account

Scenario: over the transfer limit
Given Överföringar andra konton has loaded
And I have Entered the correct information for transfer over the limit
When i click the send button
Then I should recieve an error message

Scenario: over the account balance
Given Överföringar andra konton has loaded
And I have Entered the correct information for transfer over the account balance
When i click the send button
Then I should recieve an error message