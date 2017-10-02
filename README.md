# flights-search-qpx-gas
Flights search using QPX API and Google App Script.

Поиск авиа-рейсов с помощью QPX API и Google App Script. Как использовать написано ниже.

# What it can do
## Quick start
* Complete How-to guide.
* Input Home & Destination airport IATA Codes and hit Flights -> Get Flights.

## Common use case
You want to visit Serfaus village in Austria and buy best tickets for your requirements.
Your requirements are:
* You want to buy tickets now
* You want to stay for 6-8 days
* You want to make this trip in next 4 weeks

Your solution path is:
* Find your home airport: Moscow (MOW)
* Find Serfaus nearest airports: Innsbruck (INN), Munchen (MUC), Verona (VRN).
* Use flights-search-qpx-gas script:
  * Input home airport: MOW
  * Input destination airport: INN, MUC, VRN (separated by comma and space)
  * Input First Depart Date (first possible date you are willing to leave)
  * Input Last Return Date (last possible date you are going to return)
  * Input Duration: 6, 7, 8 (separated for comma and space)
  * Hit Flights -> Check Flights

## How-to guide in English
* Google QPX API Key
  1. Obtain API key for QPX API. Instruction [here](https://developers.google.com/qpx-express/v1/prereqs).
  1. Warning! You will be billed by Google for this API. Free limit described [here](https://developers.google.com/qpx-express/v1/pricing).
* Setup Google App Script
  1. Create a copy of [this](https://docs.google.com/spreadsheets/d/1Hm7coIj7eFbqAYy5ArHTouvxB7JGzcBV7QMk2juoGK4/edit) google spreadsheet.
  1. Menu: Tools -> Script editor.
  1. Open Code.gs file.
  1. In this first line change 'your api key' to key from step 'Google QPX API Key'.
  1. Menu: File -> Save.
  1. Menu: 'Run -> getFlights'
  1. Accept permissions.
  1. Return to spreadsheet and find that line 11 and below are populated with sample data.
  1. Return to Script editor.
  1. Change `var dryRun = true;` to `var dryRun = false;`
  1. Menu: File -> Save.
* Make first real request
  1. Return to spreadsheet.
  1. Reload spreadsheet.
  1. In the sheet change from/to and other fields.
  1. Menu: Flights -> Check Flights.

## How-to на русском
TBD

## Source Code
In this repository you will find full source code for this App.
