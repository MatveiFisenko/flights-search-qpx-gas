function getTestResults() {
 return {
 "kind": "qpxExpress#tripsSearch",
 "trips": {
  "kind": "qpxexpress#tripOptions",
  "requestId": "GaiFgrtpP387I4pMI0RMTh",
  "data": {
   "kind": "qpxexpress#data",
   "airport": [
    {
     "kind": "qpxexpress#airportData",
     "code": "DME",
     "city": "MOW",
     "name": "Moscow Domodedovo"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "GVA",
     "city": "GVA",
     "name": "Geneva International"
    },
    {
     "kind": "qpxexpress#airportData",
     "code": "SVO",
     "city": "MOW",
     "name": "Moscow Sheremetyevo"
    }
   ],
   "city": [
    {
     "kind": "qpxexpress#cityData",
     "code": "GVA",
     "name": "Geneva"
    },
    {
     "kind": "qpxexpress#cityData",
     "code": "MOW",
     "name": "Moscow"
    }
   ],
   "aircraft": [
    {
     "kind": "qpxexpress#aircraftData",
     "code": "321",
     "name": "Airbus A321"
    },
    {
     "kind": "qpxexpress#aircraftData",
     "code": "CS3",
     "name": "Bombardier CS300"
    }
   ],
   "tax": [
    {
     "kind": "qpxexpress#taxData",
     "id": "CH_001",
     "name": "Switzerland Airport Passenger Security And Noise Charge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "RI_002",
     "name": "Russia (in Europe) Terminal Use Charge International Arrival"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YQ_F",
     "name": "SU YQ surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "RI_001",
     "name": "Russia (in Europe) Terminal Use Charge International Departure"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YR_I",
     "name": "LX YR surcharge"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "UH_001",
     "name": "Russia (in Europe) Security Charge International"
    },
    {
     "kind": "qpxexpress#taxData",
     "id": "YQ_I",
     "name": "LX YQ surcharge"
    }
   ],
   "carrier": [
    {
     "kind": "qpxexpress#carrierData",
     "code": "LX",
     "name": "SWISS"
    },
    {
     "kind": "qpxexpress#carrierData",
     "code": "SU",
     "name": "PJSC Aeroflot"
    }
   ]
  },
  "tripOption": [
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB36112",
    "id": "E3ZQfPRr7N7UJf9EptG2rV001",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 230,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 230,
        "flight": {
         "carrier": "LX",
         "number": "1337"
        },
        "id": "GptalSA53wYwJ6ae",
        "cabin": "COACH",
        "bookingCode": "K",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "L+WjSzl4dqgRa8pI",
          "aircraft": "CS3",
          "arrivalTime": "2018-01-10T17:00+01:00",
          "departureTime": "2018-01-10T15:10+03:00",
          "origin": "DME",
          "destination": "GVA",
          "destinationTerminal": "1",
          "duration": 230,
          "operatingDisclosure": "OPERATED BY SWISS GLOBAL",
          "mileage": 1507,
          "meal": "Meal"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 220,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 220,
        "flight": {
         "carrier": "LX",
         "number": "1336"
        },
        "id": "GnMajD6fbkpICpSs",
        "cabin": "COACH",
        "bookingCode": "K",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lf-mnyhS+qrw-sFM",
          "aircraft": "CS3",
          "arrivalTime": "2018-01-17T14:30+03:00",
          "departureTime": "2018-01-17T08:50+01:00",
          "origin": "GVA",
          "destination": "DME",
          "originTerminal": "1",
          "duration": 220,
          "operatingDisclosure": "OPERATED BY SWISS GLOBAL",
          "mileage": 1507,
          "meal": "Breakfast"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "carrier": "LX",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "KCLS3S"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "carrier": "LX",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "KCLS3S"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "segmentId": "GptalSA53wYwJ6ae"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "segmentId": "GnMajD6fbkpICpSs"
       }
      ],
      "baseFareTotal": "EUR192.00",
      "saleFareTotal": "RUB13250",
      "saleTaxTotal": "RUB4806",
      "saleTotal": "RUB18056",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB522"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "UH_001",
        "chargeType": "GOVERNMENT",
        "code": "UH",
        "country": "RU",
        "salePrice": "RUB424"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB690"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "RUB1104"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB522"
       }
      ],
      "fareCalculation": "MOW LX GVA 107.74KCLS3S LX MOW 107.74KCLS3S NUC 215.48 END ROE 0.891032 FARE EUR 192.00 EQU RUB 13250 XT 1044RI 424UH 1544CH 690YQ 1104YR",
      "latestTicketingTime": "2018-01-10T07:09-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB36112",
    "id": "E3ZQfPRr7N7UJf9EptG2rV002",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 230,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 230,
        "flight": {
         "carrier": "LX",
         "number": "1339"
        },
        "id": "G8+HYn9wfduqVOpk",
        "cabin": "COACH",
        "bookingCode": "K",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LA0rR59WYOaBqcn7",
          "aircraft": "CS3",
          "arrivalTime": "2018-01-10T08:15+01:00",
          "departureTime": "2018-01-10T06:25+03:00",
          "origin": "DME",
          "destination": "GVA",
          "destinationTerminal": "1",
          "duration": 230,
          "operatingDisclosure": "OPERATED BY SWISS GLOBAL",
          "mileage": 1507,
          "meal": "Breakfast"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 220,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 220,
        "flight": {
         "carrier": "LX",
         "number": "1336"
        },
        "id": "GnMajD6fbkpICpSs",
        "cabin": "COACH",
        "bookingCode": "K",
        "bookingCodeCount": 9,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lf-mnyhS+qrw-sFM",
          "aircraft": "CS3",
          "arrivalTime": "2018-01-17T14:30+03:00",
          "departureTime": "2018-01-17T08:50+01:00",
          "origin": "GVA",
          "destination": "DME",
          "originTerminal": "1",
          "duration": 220,
          "operatingDisclosure": "OPERATED BY SWISS GLOBAL",
          "mileage": 1507,
          "meal": "Breakfast"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "carrier": "LX",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "KCLS3S"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "carrier": "LX",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "KCLS3S"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "segmentId": "G8+HYn9wfduqVOpk"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AVGfdP5GvZwoAq3pHafsKnpzsFFr24DkU1JrEyJfMyio",
        "segmentId": "GnMajD6fbkpICpSs"
       }
      ],
      "baseFareTotal": "EUR192.00",
      "saleFareTotal": "RUB13250",
      "saleTaxTotal": "RUB4806",
      "saleTotal": "RUB18056",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB522"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "UH_001",
        "chargeType": "GOVERNMENT",
        "code": "UH",
        "country": "RU",
        "salePrice": "RUB424"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB690"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YR_I",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YR",
        "salePrice": "RUB1104"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB522"
       }
      ],
      "fareCalculation": "MOW LX GVA 107.74KCLS3S LX MOW 107.74KCLS3S NUC 215.48 END ROE 0.891032 FARE EUR 192.00 EQU RUB 13250 XT 1044RI 424UH 1544CH 690YQ 1104YR",
      "latestTicketingTime": "2018-01-09T22:24-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB37774",
    "id": "E3ZQfPRr7N7UJf9EptG2rV005",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 225,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 225,
        "flight": {
         "carrier": "SU",
         "number": "2380"
        },
        "id": "GxXuC-ugtwHgXCU6",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lwglst4QaIsXa+qV",
          "aircraft": "321",
          "arrivalTime": "2018-01-10T11:50+01:00",
          "departureTime": "2018-01-10T10:05+03:00",
          "origin": "SVO",
          "destination": "GVA",
          "originTerminal": "F",
          "destinationTerminal": "1",
          "duration": 225,
          "mileage": 1497,
          "meal": "Lunch"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 205,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 205,
        "flight": {
         "carrier": "SU",
         "number": "2383"
        },
        "id": "Gxg3sq7HylzX57Pw",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LhQnmfPt78tZn-5B",
          "aircraft": "321",
          "arrivalTime": "2018-01-18T03:05+03:00",
          "departureTime": "2018-01-17T21:40+01:00",
          "origin": "GVA",
          "destination": "SVO",
          "originTerminal": "1",
          "destinationTerminal": "D",
          "duration": 205,
          "mileage": 1497,
          "meal": "Dinner"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "NVU"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "NVU"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "Gxg3sq7HylzX57Pw"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "GxXuC-ugtwHgXCU6"
       }
      ],
      "baseFareTotal": "EUR160.00",
      "saleFareTotal": "RUB11040",
      "saleTaxTotal": "RUB7847",
      "saleTotal": "RUB18887",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB5796"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB404"
       }
      ],
      "fareCalculation": "MOW SU GVA 89.78NVU SU MOW 89.78NVU NUC 179.56 END ROE 0.891032 FARE EUR 160.00 EQU RUB 11040 XT 507RI 1544CH 5796YQ",
      "latestTicketingTime": "2017-10-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB37774",
    "id": "E3ZQfPRr7N7UJf9EptG2rV006",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 225,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 225,
        "flight": {
         "carrier": "SU",
         "number": "2382"
        },
        "id": "GuGlJUTqkFTv2pX9",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LpbU2VUTIp2ojffF",
          "aircraft": "321",
          "arrivalTime": "2018-01-10T20:40+01:00",
          "departureTime": "2018-01-10T18:55+03:00",
          "origin": "SVO",
          "destination": "GVA",
          "originTerminal": "F",
          "destinationTerminal": "1",
          "duration": 225,
          "mileage": 1497,
          "meal": "Dinner"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 205,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 205,
        "flight": {
         "carrier": "SU",
         "number": "2383"
        },
        "id": "Gxg3sq7HylzX57Pw",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LhQnmfPt78tZn-5B",
          "aircraft": "321",
          "arrivalTime": "2018-01-18T03:05+03:00",
          "departureTime": "2018-01-17T21:40+01:00",
          "origin": "GVA",
          "destination": "SVO",
          "originTerminal": "1",
          "destinationTerminal": "D",
          "duration": 205,
          "mileage": 1497,
          "meal": "Dinner"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "NVU"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "NVU"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "GuGlJUTqkFTv2pX9"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "Gxg3sq7HylzX57Pw"
       }
      ],
      "baseFareTotal": "EUR160.00",
      "saleFareTotal": "RUB11040",
      "saleTaxTotal": "RUB7847",
      "saleTotal": "RUB18887",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB5796"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB404"
       }
      ],
      "fareCalculation": "MOW SU GVA 89.78NVU SU MOW 89.78NVU NUC 179.56 END ROE 0.891032 FARE EUR 160.00 EQU RUB 11040 XT 507RI 1544CH 5796YQ",
      "latestTicketingTime": "2017-10-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB39662",
    "id": "E3ZQfPRr7N7UJf9EptG2rV003",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 225,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 225,
        "flight": {
         "carrier": "SU",
         "number": "2382"
        },
        "id": "GuGlJUTqkFTv2pX9",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "LpbU2VUTIp2ojffF",
          "aircraft": "321",
          "arrivalTime": "2018-01-10T20:40+01:00",
          "departureTime": "2018-01-10T18:55+03:00",
          "origin": "SVO",
          "destination": "GVA",
          "originTerminal": "F",
          "destinationTerminal": "1",
          "duration": 225,
          "mileage": 1497,
          "meal": "Dinner"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 220,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 220,
        "flight": {
         "carrier": "SU",
         "number": "2381"
        },
        "id": "G5VKh4dmp4bdJX0w",
        "cabin": "COACH",
        "bookingCode": "E",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Li-4VsayAwa6+ZzM",
          "aircraft": "321",
          "arrivalTime": "2018-01-17T18:45+03:00",
          "departureTime": "2018-01-17T13:05+01:00",
          "origin": "GVA",
          "destination": "SVO",
          "originTerminal": "1",
          "destinationTerminal": "F",
          "duration": 220,
          "mileage": 1497,
          "meal": "Lunch"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "NVU"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AyAOUmq4lMZ5hxZhKsLFkrHN26v1MHdVdZyT6ebA",
        "carrier": "SU",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "EVU"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "GuGlJUTqkFTv2pX9"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AyAOUmq4lMZ5hxZhKsLFkrHN26v1MHdVdZyT6ebA",
        "segmentId": "G5VKh4dmp4bdJX0w"
       }
      ],
      "baseFareTotal": "EUR178.00",
      "saleFareTotal": "RUB12285",
      "saleTaxTotal": "RUB7546",
      "saleTotal": "RUB19831",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB5796"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       }
      ],
      "fareCalculation": "MOW SU GVA 89.78NVU SU MOW 109.42EVU NUC 199.20 END ROE 0.891032 FARE EUR 178.00 EQU RUB 12285 XT 206RI 1544CH 5796YQ",
      "latestTicketingTime": "2017-10-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   },
   {
    "kind": "qpxexpress#tripOption",
    "saleTotal": "RUB39662",
    "id": "E3ZQfPRr7N7UJf9EptG2rV004",
    "slice": [
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 225,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 225,
        "flight": {
         "carrier": "SU",
         "number": "2380"
        },
        "id": "GxXuC-ugtwHgXCU6",
        "cabin": "COACH",
        "bookingCode": "N",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "0",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Lwglst4QaIsXa+qV",
          "aircraft": "321",
          "arrivalTime": "2018-01-10T11:50+01:00",
          "departureTime": "2018-01-10T10:05+03:00",
          "origin": "SVO",
          "destination": "GVA",
          "originTerminal": "F",
          "destinationTerminal": "1",
          "duration": 225,
          "mileage": 1497,
          "meal": "Lunch"
         }
        ]
       }
      ]
     },
     {
      "kind": "qpxexpress#sliceInfo",
      "duration": 220,
      "segment": [
       {
        "kind": "qpxexpress#segmentInfo",
        "duration": 220,
        "flight": {
         "carrier": "SU",
         "number": "2381"
        },
        "id": "G5VKh4dmp4bdJX0w",
        "cabin": "COACH",
        "bookingCode": "E",
        "bookingCodeCount": 7,
        "marriedSegmentGroup": "1",
        "leg": [
         {
          "kind": "qpxexpress#legInfo",
          "id": "Li-4VsayAwa6+ZzM",
          "aircraft": "321",
          "arrivalTime": "2018-01-17T18:45+03:00",
          "departureTime": "2018-01-17T13:05+01:00",
          "origin": "GVA",
          "destination": "SVO",
          "originTerminal": "1",
          "destinationTerminal": "F",
          "duration": 220,
          "mileage": 1497,
          "meal": "Lunch"
         }
        ]
       }
      ]
     }
    ],
    "pricing": [
     {
      "kind": "qpxexpress#pricingInfo",
      "fare": [
       {
        "kind": "qpxexpress#fareInfo",
        "id": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "carrier": "SU",
        "origin": "MOW",
        "destination": "GVA",
        "basisCode": "NVU"
       },
       {
        "kind": "qpxexpress#fareInfo",
        "id": "AyAOUmq4lMZ5hxZhKsLFkrHN26v1MHdVdZyT6ebA",
        "carrier": "SU",
        "origin": "GVA",
        "destination": "MOW",
        "basisCode": "EVU"
       }
      ],
      "segmentPricing": [
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "AyAOUmq4lMZ5hxZhKsLFkrHN26v1MHdVdZyT6ebA",
        "segmentId": "G5VKh4dmp4bdJX0w"
       },
       {
        "kind": "qpxexpress#segmentPricing",
        "fareId": "APaTK5DPnsFxBsSdE8NP61/is1yFXfJwtGC67B5s",
        "segmentId": "GxXuC-ugtwHgXCU6"
       }
      ],
      "baseFareTotal": "EUR178.00",
      "saleFareTotal": "RUB12285",
      "saleTaxTotal": "RUB7546",
      "saleTotal": "RUB19831",
      "passengers": {
       "kind": "qpxexpress#passengerCounts",
       "adultCount": 2
      },
      "tax": [
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_001",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "YQ_F",
        "chargeType": "CARRIER_SURCHARGE",
        "code": "YQ",
        "salePrice": "RUB5796"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "CH_001",
        "chargeType": "GOVERNMENT",
        "code": "CH",
        "country": "CH",
        "salePrice": "RUB1544"
       },
       {
        "kind": "qpxexpress#taxInfo",
        "id": "RI_002",
        "chargeType": "GOVERNMENT",
        "code": "RI",
        "country": "RU",
        "salePrice": "RUB103"
       }
      ],
      "fareCalculation": "MOW SU GVA 89.78NVU SU MOW 109.42EVU NUC 199.20 END ROE 0.891032 FARE EUR 178.00 EQU RUB 12285 XT 206RI 1544CH 5796YQ",
      "latestTicketingTime": "2017-10-09T23:59-04:00",
      "ptc": "ADT"
     }
    ]
   }
  ]
 }
};
 
  
}
