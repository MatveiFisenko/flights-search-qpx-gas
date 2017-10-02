var qpxKey = 'your api key';
var dryRun = true;

function getFlights() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var s = {};
  s.from = sheet.getRange("A2").getValue();
  s.to = sheet.getRange("B2").getValue();
  
  s.dateStart = sheet.getRange("C2").getValue();
  s.dateEnd = sheet.getRange("D2").getValue();
  s.duration = sheet.getRange("E2").getValue();
  s.stops = sheet.getRange("F2").getValue();
  
  //format to and duration
  s.from = s.from.split(', ');
  s.to = s.to.split(', ');
  s.duration = s.duration.toString().split(', ');
  s.stops = s.stops.toString().split(', ');
  
  Logger.log('original request');
  Logger.log(s);
  //iterate
  var c = {};
  var results = [];
  var totalRequests = 0;
  
  //iterate from location
  for (var i = 0; i < s.from.length; i++) {
    c.from = s.from[i];
    
    //iterate to location
    for (var i2 = 0; i2 < s.to.length; i2++) {
      c.to = s.to[i2];
      
      //iterate stops
      for (var i3 = 0; i3 < s.stops.length; i3++) {
        c.stops = s.stops[i3];
      
        //iterate duration
        for (var i4 = 0; i4 < s.duration.length; i4++) {
          c.duration = s.duration[i4];
          
          //iterate dateStart
          for (var dateFrom = new Date(s.dateStart.getTime()); dateFrom <= s.dateEnd; dateFrom.setDate(dateFrom.getDate() + 1)) {
            
            var dateTo = new Date(dateFrom.getTime());
            dateTo.setDate(dateTo.getDate() + +c.duration);
            
            //break if dateTo is greater than global date end
            if (dateTo > s.dateEnd) {
              break; 
            }
            
            c.dateFrom = dateFrom;
            c.dateTo = dateTo;
            
            Logger.log('search request');
            Logger.log(c);
            
            var result = makeRequest(c, dryRun);
            totalRequests++;
            
            results = results.concat(result.trips.tripOption);
          }
        }
      }
    }
  }
  
  Logger.log('search results');
  Logger.log(results.length);
  
  var resultsParsed = parseResults(results);
  
  Logger.log('parsed search results');
  Logger.log(resultsParsed);
  
  //write results to sheet
  sheet.getRange(11, 1, sheet.getLastRow(), sheet.getLastColumn()).clear();//clear prev results
  
  //if no results were found
  if (resultsParsed.length) {
    sheet.getRange(11, 1, resultsParsed.length, resultsParsed[0].length).setValues(resultsParsed);
  }
  
  //write total requests & price
  sheet.getRange("H5").setValue(totalRequests);
  sheet.getRange("I5").setValue(totalRequests * 0.035);
}

function parseResults(results) {
  var trips = [];
  
  //iterate over trips
  for (var i = 0; i < results.length; i++) {
    //current trip
    var cur = results[i];
    
    //if we have empty trip
    if (!cur) {
      continue;
    }
    
    var from = new Date(cur.slice[0].segment[0].leg[0].departureTime);
    var to = new Date(cur.slice[1].segment[0].leg[0].departureTime);
        
    var trip = [
      cur.slice[0].segment[0].leg[0].origin,
      cur.slice[0].segment[0].leg[0].destination,
      from,
      to,
      //calc number of days between flights
      (to - from) / 1000 / 3600 /24 ,
      (cur.slice[0].segment.length - 1) + "/" + (cur.slice[1].segment.length - 1),
      cur.saleTotal.substring(3),
      cur.slice[0].segment[0].flight.carrier + "/" + cur.slice[1].segment[0].flight.carrier,
      (from.getMonth() + 1) + '/' + from.getDate() + '/' + from.getFullYear(),
      (to.getMonth() + 1) + '/' + to.getDate() + '/' + to.getFullYear()
    ];
    
    trips.push(trip);
  }
  
  //sort trips by price, then by departure date
  trips.sort(function (a,b) { return (a[6] - b[6]) || (a[2] - b[2]) });
    
  return trips;
}


function makeRequest(s, dryRun) {
  var req = {
  "request": {
    "slice": [
      {
        "origin": s.from,
        "destination": s.to,
        "date": s.dateFrom.getFullYear() + '-' + (s.dateFrom.getMonth() + 1) + '-' + s.dateFrom.getDate(),
        "maxStops": s.stops
      },
      {
        "origin": s.to,
        "destination": s.from,
        "date": s.dateTo.getFullYear() + '-' + (s.dateTo.getMonth() + 1) + '-' + s.dateTo.getDate(),
        "maxStops": s.stops
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 5,
    "refundable": false
  }
};
  
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(req)
  };
  
  var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + qpxKey;
  
  Logger.log(req);
  
  if (dryRun) {
    var result = getTestResults();
  }
  else {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());
  }

  Logger.log(result);
  
  return result;
}


//runs on spreadsheet open event
function onOpen(e) {
  var menu = SpreadsheetApp.getUi()
  .createMenu('Flights')
  .addItem('Check Flights', 'getFlights');  
  
  menu.addToUi();
}
