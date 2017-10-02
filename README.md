# flights-search-qpx-gas
Flights search using QPX API and Google App Script.

Поиск авиа-рейсов с помощью QPX API и Google App Script. Как использовать написано ниже.

## How-to in English
* Google QPX API Key
  1. Obtain API key for QPX API. Instruction [here](https://developers.google.com/qpx-express/v1/prereqs).
* Setup Google App Script
  1. Create a copy of [this](https://docs.google.com/spreadsheets/d/1Hm7coIj7eFbqAYy5ArHTouvxB7JGzcBV7QMk2juoGK4/edit) google spreadsheet.
  1. Tools -> Script editor.
  1. Open Code.gs file.
  1. In this first line change 'your api key' to key from step 1.
  1. File -> Save.
  1. In the menu select 'Run -> getFlights'
  1. Accept permissions.
  1. Return to spreadsheet and find that line 11 and below are populated with sample data.
  1. Return to Script editor.
  1. Change `var dryRun = true;` to `var dryRun = false;`
  1. File -> Save.
* Make first real request
  1. Return to spreadsheet.
  1. Reload spreadsheet.
  1. In the sheet change from/to and other fields.
  1. In the menu Flights -> Check Flights.

## How-to на русском
TBD

## Source Code
In this repository you will find full source code for this App.
