#Tomas
Feature: As a customer I want to transfer money between my own accounts

Scenario: Transfer 100 SEK from 1st account to 2nd account
Given transfermyaccount page loaded
When I choose my 1st account as Konto
And I enter amount 100 as Summa (SEK)
And I choose my 2nd account as Konto
And I click Utför
Then 100 SEK should be moved from my 1st account to my 2nd account

