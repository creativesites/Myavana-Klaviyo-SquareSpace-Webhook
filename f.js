const jsonfile = require('jsonfile')


let a = [
    {
        "id": "600739b44fa71b69d3d65803",
        "firstName": "Gianna",
        "lastName": "Taylor",
        "email": "gianna.aldridge26@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-19T19:57:40.731427Z",
        "address": {
            "firstName": "Gianna",
            "lastName": "Taylor",
            "address1": "16726 Dellwood Springs",
            "address2": null,
            "city": "Houston",
            "state": "TX",
            "countryCode": "US",
            "postalCode": "77095",
            "phone": "7138783544"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-19T19:57:40.751Z",
            "lastOrderSubmittedOn": "2021-01-19T19:57:40.751Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "600202e84fa71b69d3b4b4b9",
        "firstName": "Kamulah",
        "lastName": "Kitt",
        "email": "kamulahkitt@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-15T21:02:32.167809Z",
        "address": {
            "firstName": "Kamulah",
            "lastName": "Kitt",
            "address1": "6623 Vintage Ln",
            "address2": null,
            "city": "McCalla",
            "state": "AL",
            "countryCode": "US",
            "postalCode": "35111",
            "phone": "2059038088"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-15T21:02:32.180Z",
            "lastOrderSubmittedOn": "2021-01-15T21:02:32.180Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5ff9cec8d8f0c13781dc665a",
        "firstName": "Marie",
        "lastName": "Sundin",
        "email": "girl4jai@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-09T15:42:00.959889Z",
        "address": {
            "firstName": "Marie",
            "lastName": "Sundin",
            "address1": "1705 Cartier Place",
            "address2": null,
            "city": "Fort Walton Beach",
            "state": "FL",
            "countryCode": "US",
            "postalCode": "32547",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-09T15:42:00.970Z",
            "lastOrderSubmittedOn": "2021-01-09T15:42:00.970Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5ff60fabdcec0519ce4995d7",
        "firstName": "Monae",
        "lastName": "Bolar",
        "email": "monae.bolar@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-06T19:29:47.157432Z",
        "address": {
            "firstName": "Monae",
            "lastName": "Bolar",
            "address1": "12716 A Street South",
            "address2": null,
            "city": "Parkland",
            "state": "WA",
            "countryCode": "US",
            "postalCode": "98444",
            "phone": "4254963325"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-06T19:29:47.171Z",
            "lastOrderSubmittedOn": "2021-01-06T19:29:47.171Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "53.35",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "53.35",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5ff5ef3d7b81d3242774f673",
        "firstName": "Vanessa",
        "lastName": "Rice",
        "email": "vanaka08@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-06T17:11:25.787703Z",
        "address": {
            "firstName": "Vanessa",
            "lastName": "Rice",
            "address1": "146 Delafield Lane",
            "address2": null,
            "city": "Newburgh",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "12550",
            "phone": "8455324706"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-06T17:11:25.799Z",
            "lastOrderSubmittedOn": "2021-01-06T17:11:25.799Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5ff4b7dfc7ce9b75aadf9c6f",
        "firstName": "Dorene",
        "lastName": "Neshiem",
        "email": "dneshiem@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-05T19:02:55.493401Z",
        "address": {
            "firstName": "doreen",
            "lastName": "neshiem",
            "address1": "2617 GEORGETOWNE DR NW",
            "address2": null,
            "city": "ROCHESTER",
            "state": "MN",
            "countryCode": "US",
            "postalCode": "55901-6881",
            "phone": "6124080380"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-05T19:02:55.515Z",
            "lastOrderSubmittedOn": "2021-01-05T19:02:55.515Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "93.70",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fef5222bb3e1b6acf51b0ee",
        "firstName": "Mywanza",
        "lastName": "Ball",
        "email": "mywanza_b@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-01T16:47:30.413272Z",
        "address": {
            "firstName": "Mywanza",
            "lastName": "Ball",
            "address1": "2058 Top Cir",
            "address2": null,
            "city": "Lancaster",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "93536",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-01T16:47:30.424Z",
            "lastOrderSubmittedOn": "2021-01-01T16:47:30.424Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "93.70",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fed5ed38d1dd320fab52884",
        "firstName": "Valerie",
        "lastName": "Simon",
        "email": "varsimon@aol.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-31T05:17:07.297944Z",
        "address": {
            "firstName": "Valerie",
            "lastName": "Simon",
            "address1": "9660 Meadowbrook drive",
            "address2": null,
            "city": "Beaumont",
            "state": "TX",
            "countryCode": "US",
            "postalCode": "77706",
            "phone": "409-679-3969"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-31T05:17:07.306Z",
            "lastOrderSubmittedOn": "2020-12-31T05:17:07.306Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "93.70",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fece6efbb3e1b6acf480931",
        "firstName": "Keita",
        "lastName": "Austin",
        "email": "keitaaus@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-30T20:45:35.449852Z",
        "address": {
            "firstName": "Sirenthea",
            "lastName": "Jenkins",
            "address1": "225 South Stephanie Street",
            "address2": null,
            "city": "Henderson",
            "state": "NV",
            "countryCode": "US",
            "postalCode": "89012",
            "phone": "2257739264"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-30T20:45:35.462Z",
            "lastOrderSubmittedOn": "2020-12-30T20:45:35.462Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "93.70",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5febea959e785200be570a15",
        "firstName": "Tammy",
        "lastName": "Billups",
        "email": "billups_tammy@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-30T02:48:53.175518Z",
        "address": {
            "firstName": "Tammy",
            "lastName": "Billups",
            "address1": "976 Black Walnut Trail",
            "address2": null,
            "city": "PENSACOLA",
            "state": "FL",
            "countryCode": "US",
            "postalCode": "32514",
            "phone": "8502064424"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-30T02:48:53.186Z",
            "lastOrderSubmittedOn": "2020-12-30T02:48:53.186Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe96f4f9d74d1359f8eeab3",
        "firstName": "elizabeth",
        "lastName": "lewis",
        "email": "lizlewis12@earthlink.net",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-28T05:38:23.405605Z",
        "address": {
            "firstName": "Elizabeth",
            "lastName": "Lewis",
            "address1": "1228 13th St",
            "address2": null,
            "city": "Des Moines",
            "state": "IA",
            "countryCode": "US",
            "postalCode": "50314",
            "phone": "5159538266"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-28T05:38:23.419Z",
            "lastOrderSubmittedOn": "2020-12-28T05:38:23.419Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe89b6d9c382662c131d3c6",
        "firstName": "Rochelle",
        "lastName": "Ross",
        "email": "rochelle.ross@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-27T14:34:21.344450Z",
        "address": {
            "firstName": "Rochelle",
            "lastName": "Ross",
            "address1": "319 Monroe Street",
            "address2": null,
            "city": "Brooklyn",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11216",
            "phone": "7184158115"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-27T14:34:21.356Z",
            "lastOrderSubmittedOn": "2020-12-27T14:34:21.356Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe78ce39d74d1359f891d1f",
        "firstName": "Marlo",
        "lastName": "Sabrinsky",
        "email": "carolinachick@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-26T19:20:03.061813Z",
        "address": {
            "firstName": "Marlo",
            "lastName": "Sabrinsky",
            "address1": "2901 Beaman Ave",
            "address2": null,
            "city": "Charlotte",
            "state": "NC",
            "countryCode": "US",
            "postalCode": "28273",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-26T19:20:03.073Z",
            "lastOrderSubmittedOn": "2020-12-26T19:20:03.073Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe38fc9917ad557721a5e24",
        "firstName": "Jacqui",
        "lastName": "Smith",
        "email": "jacqui.c.smith@hotmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-23T18:43:21.549747Z",
        "address": {
            "firstName": "Jacqui",
            "lastName": "Smith",
            "address1": "326 East Valencia Ave. Apt G",
            "address2": null,
            "city": "Burbank",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "91502",
            "phone": "7087174997"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-23T18:43:21.561Z",
            "lastOrderSubmittedOn": "2020-12-23T18:43:21.561Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe282f54bed6e31b87d26e9",
        "firstName": "Deasia",
        "lastName": "Ratcliff",
        "email": "deasia.ratcliff@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-22T23:36:21.570689Z",
        "address": {
            "firstName": "Deasia",
            "lastName": "Ratcliff",
            "address1": "2000 Valentine Ave Apt 519",
            "address2": null,
            "city": "Bronx",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "10457",
            "phone": "9173402519"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-22T23:36:21.589Z",
            "lastOrderSubmittedOn": "2020-12-22T23:36:21.589Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe1b9c759fd523e5d9921e9",
        "firstName": "Pierre",
        "lastName": "Adriana",
        "email": "akpierre21@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-22T09:17:59.708306Z",
        "address": {
            "firstName": "Adriana",
            "lastName": "Pierre",
            "address1": "10883 SE 10th St, F055",
            "address2": null,
            "city": "Vancouver",
            "state": "WA",
            "countryCode": "US",
            "postalCode": "98664",
            "phone": "5036880034"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-22T09:17:59.759Z",
            "lastOrderSubmittedOn": "2020-12-22T09:17:59.759Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe11b536863835781620602",
        "firstName": "amanda",
        "lastName": "smith",
        "email": "lailamaat2003@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-21T22:01:55.757321Z",
        "address": {
            "firstName": "Amanda",
            "lastName": "Smith-Holman",
            "address1": "98-40 57th Avenue",
            "address2": "Apt. 5K",
            "city": "Corona",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11368",
            "phone": "6462879011"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-21T22:01:55.771Z",
            "lastOrderSubmittedOn": "2020-12-21T22:01:55.771Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fe06b3df82d294dcf82a9c6",
        "firstName": "Lisa",
        "lastName": "Roof",
        "email": "lisa.roof@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-21T09:30:37.653413Z",
        "address": {
            "firstName": "Lisa",
            "lastName": "Roof",
            "address1": "PSC 3 Box 3722",
            "address2": null,
            "city": "APO",
            "state": "AP",
            "countryCode": "US",
            "postalCode": "96266",
            "phone": "3253266365"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-21T09:30:37.761Z",
            "lastOrderSubmittedOn": "2020-12-22T08:28:18.690Z",
            "orderCount": 2,
            "totalOrderAmount": {
                "value": "256.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fdface4f82d294dcf7fe568",
        "firstName": "Tanner",
        "lastName": "Roth",
        "email": "tanner_roth@hotmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-20T19:58:28.768357Z",
        "address": {
            "firstName": "Lori",
            "lastName": "Martinez",
            "address1": "714 Poplar Street",
            "address2": null,
            "city": "Missoula",
            "state": "MT",
            "countryCode": "US",
            "postalCode": "59802",
            "phone": "406-531-4886"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-20T19:58:28.777Z",
            "lastOrderSubmittedOn": "2020-12-20T19:58:28.777Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fdd1a39aea04d5d35bfbd4e",
        "firstName": "Phillip",
        "lastName": "Thompson",
        "email": "pericthompson@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-18T21:08:09.423523Z",
        "address": {
            "firstName": "Phillip",
            "lastName": "Thompson",
            "address1": "100 Biscayne Dr. NW",
            "address2": "E5",
            "city": "Atlanta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30309",
            "phone": "7325939453"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-18T21:08:09.435Z",
            "lastOrderSubmittedOn": "2020-12-18T21:08:09.435Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "110.87",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "110.87",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fd7e10bca46110c8508b915",
        "firstName": "Brittany",
        "lastName": "Brown",
        "email": "ms.brown811@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-14T22:02:51.952572Z",
        "address": {
            "firstName": "Brittany",
            "lastName": "Brown",
            "address1": "106-33 160th St",
            "address2": null,
            "city": "Jamaica",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11433",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-14T22:02:51.965Z",
            "lastOrderSubmittedOn": "2020-12-14T22:02:51.965Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "53.35",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "53.35",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fd65c6d56488f055d5fefa4",
        "firstName": "Jonathan",
        "lastName": "Hebert",
        "email": "hebertjonathan99@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-13T18:24:45.336490Z",
        "address": {
            "firstName": "Jonathan",
            "lastName": "Hebert",
            "address1": "5669 North Camino De La Noche",
            "address2": null,
            "city": "Tucson",
            "state": "AZ",
            "countryCode": "US",
            "postalCode": "85718",
            "phone": "5042617508"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-13T18:24:45.348Z",
            "lastOrderSubmittedOn": "2020-12-13T18:24:45.348Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fd4397f56488f055d555bcb",
        "firstName": "Doretha",
        "lastName": "Harris-McElliott",
        "email": "mcelliotta@bellsouth.net",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-12T03:31:11.852913Z",
        "address": {
            "firstName": "Doretha",
            "lastName": "Harris-McElliott",
            "address1": "4351 NW 172nd Drive",
            "address2": null,
            "city": "Miami Gardens",
            "state": "FL",
            "countryCode": "US",
            "postalCode": "33055",
            "phone": "3054695078"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-12T03:31:11.863Z",
            "lastOrderSubmittedOn": "2020-12-12T03:31:11.863Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "97.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fd4282831b53455537f1d55",
        "firstName": "Shannon",
        "lastName": "Graham",
        "email": "snwilson6@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-12T02:17:12.701890Z",
        "address": {
            "firstName": "Shannon",
            "lastName": "Graham",
            "address1": "727 W 40th St",
            "address2": "Unit 248",
            "city": "Baltimore",
            "state": "MD",
            "countryCode": "US",
            "postalCode": "21211",
            "phone": "4438509006"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-12T02:17:12.712Z",
            "lastOrderSubmittedOn": "2020-12-12T02:17:12.712Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fd2f6877f105409ca060584",
        "firstName": "Shahub",
        "lastName": "Sayareh",
        "email": "bloo4107@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-11T04:33:11.661600Z",
        "address": {
            "firstName": "Shahub",
            "lastName": "Sayareh",
            "address1": "3024 Portsmouth Drive",
            "address2": null,
            "city": "RANCHO CORDOVA",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "95670",
            "phone": "9167189559"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-11T04:33:11.671Z",
            "lastOrderSubmittedOn": "2020-12-11T04:33:11.671Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc5cf186605e765a45ff2d5",
        "firstName": "Mom",
        "lastName": "Cell",
        "email": "chloe.harrison08@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-12-01T05:05:28.182751Z",
        "address": {
            "firstName": "Chloe",
            "lastName": "Harrison",
            "address1": "3013 Cantura Dr",
            "address2": null,
            "city": "Mesquite",
            "state": "TX",
            "countryCode": "US",
            "postalCode": "75181",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-12-01T05:05:28.200Z",
            "lastOrderSubmittedOn": "2020-12-01T05:05:28.200Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc5339ba5ed41796a551ae3",
        "firstName": "Prentiss",
        "lastName": "Coleman",
        "email": "prentissgc@msn.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-30T18:02:03.660929Z",
        "address": {
            "firstName": "Prentiss",
            "lastName": "Coleman",
            "address1": "622 Loridans Drive Northeast",
            "address2": null,
            "city": "Atlanta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30342",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-30T18:02:03.673Z",
            "lastOrderSubmittedOn": "2020-11-30T18:02:03.673Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "104.16",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc4578248a35c0cc2673324",
        "firstName": "Christopher",
        "lastName": "Enos",
        "email": "enos.christopher@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-30T02:22:58.170316Z",
        "address": {
            "firstName": "Christopher",
            "lastName": "Enos",
            "address1": "4650 Washington Boulevard",
            "address2": "Apartment 517",
            "city": "Arlington",
            "state": "VA",
            "countryCode": "US",
            "postalCode": "22201",
            "phone": "7742448022"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-30T02:22:58.180Z",
            "lastOrderSubmittedOn": "2020-11-30T02:22:58.180Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc42943d168a90288fcbcd8",
        "firstName": "Teresa Ann",
        "lastName": "Bolen",
        "email": "eftvirtuoso@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-29T23:05:39.057545Z",
        "address": {
            "firstName": "Teresa",
            "lastName": "Bolen",
            "address1": "Laurel Square 15-603",
            "address2": "6-2-2 Kizugawadai",
            "city": "Kizugawashi",
            "state": "Kyoto Pref",
            "countryCode": "JP",
            "postalCode": "619-0225",
            "phone": "090-1906-8239"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-29T23:05:39.071Z",
            "lastOrderSubmittedOn": "2020-11-29T23:05:39.071Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc313ac6605e765a449a13a",
        "firstName": "Allyse",
        "lastName": "Sturdivant Williams",
        "email": "allyse.sturdivant@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-29T03:21:16.358920Z",
        "address": {
            "firstName": "Allyse D",
            "lastName": "Williams",
            "address1": "10015 S. King Drive",
            "address2": null,
            "city": "Chicago",
            "state": "IL",
            "countryCode": "US",
            "postalCode": "60628",
            "phone": "7736800442"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-29T03:21:16.369Z",
            "lastOrderSubmittedOn": "2020-11-29T03:21:16.369Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc299166605e765a440ed3d",
        "firstName": "Kyra",
        "lastName": "Atekwana",
        "email": "kyra.atekwana@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-28T18:38:14.518338Z",
        "address": {
            "firstName": "Kyra",
            "lastName": "Atekwana",
            "address1": "30 CELESTIAL WAY",
            "address2": null,
            "city": "NEWARK",
            "state": "DE",
            "countryCode": "US",
            "postalCode": "19711-1914",
            "phone": "5734655199"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-28T18:38:14.527Z",
            "lastOrderSubmittedOn": "2020-11-28T18:38:14.527Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc2909f48a35c0cc255d156",
        "firstName": "Cynthia",
        "lastName": "Barren",
        "email": "cbarren1@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-28T18:02:07.658189Z",
        "address": {
            "firstName": "Cynthia",
            "lastName": "Barren",
            "address1": "3314 Sable Run Rd",
            "address2": null,
            "city": "Atlanta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30349",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-28T18:02:07.669Z",
            "lastOrderSubmittedOn": "2020-11-28T18:02:07.669Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "104.16",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc27d6aa5ed41796a3c334c",
        "firstName": "Erin",
        "lastName": "McClendis",
        "email": "emcclendis@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-28T16:40:10.883863Z",
        "address": {
            "firstName": "Erin",
            "lastName": "McClendis",
            "address1": "37 Cantey Place Northwest",
            "address2": null,
            "city": "Atlanta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30327",
            "phone": "7062313357"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-28T16:40:10.895Z",
            "lastOrderSubmittedOn": "2020-11-28T16:40:10.895Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "104.16",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc1c4b06605e765a43d23a0",
        "firstName": "Whitney",
        "lastName": "Triplett",
        "email": "triplettw@me.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-28T03:32:00.441167Z",
        "address": {
            "firstName": "Whitney",
            "lastName": "Triplett",
            "address1": "5103 Santa Fe Parkway",
            "address2": null,
            "city": "Sandy Springs",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30350",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-28T03:32:00.453Z",
            "lastOrderSubmittedOn": "2020-11-28T03:32:00.453Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "104.16",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc18eb8d168a90288e25ce0",
        "firstName": "Hilary",
        "lastName": "Watson",
        "email": "hwat28@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-27T23:41:44.803696Z",
        "address": {
            "firstName": "Hilary",
            "lastName": "Watson",
            "address1": "7016 15th Avenue Northwest, apt 303",
            "address2": null,
            "city": "Seattle",
            "state": "WA",
            "countryCode": "US",
            "postalCode": "98117",
            "phone": "4257364886"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-27T23:41:44.814Z",
            "lastOrderSubmittedOn": "2020-11-27T23:41:44.814Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc172ded168a90288e09f1a",
        "firstName": "April",
        "lastName": "Ciesla",
        "email": "aj.ciesla@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-27T21:42:54.686777Z",
        "address": {
            "firstName": "April",
            "lastName": "Ciesla",
            "address1": "2730 Oak Tree Drive",
            "address2": "Apt 1503",
            "city": "Carrollton",
            "state": "TX",
            "countryCode": "US",
            "postalCode": "75006",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-27T21:42:54.697Z",
            "lastOrderSubmittedOn": "2020-11-27T21:42:54.697Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fc0ad42a5ed41796a23b19d",
        "firstName": "TERI",
        "lastName": "JOSEPH",
        "email": "tmj8901@aol.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-27T07:39:46.055950Z",
        "address": {
            "firstName": "TERI",
            "lastName": "JOSEPH",
            "address1": "2400 Old Milton Parkway",
            "address2": null,
            "city": "Alpharetta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30009",
            "phone": "9546109263"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-27T07:39:46.067Z",
            "lastOrderSubmittedOn": "2020-11-27T07:39:46.067Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "104.16",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fbcb0d248a35c0cc21a8fd9",
        "firstName": "LaVerne",
        "lastName": "Everett",
        "email": "kele08@verizon.net",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-24T07:05:54.557895Z",
        "address": {
            "firstName": "LaVerne",
            "lastName": "Everett",
            "address1": "12503 Settles Ct",
            "address2": null,
            "city": "Fort Washington",
            "state": "MD",
            "countryCode": "US",
            "postalCode": "20744",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-24T07:05:54.567Z",
            "lastOrderSubmittedOn": "2020-11-24T07:05:54.567Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "100.15",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fba8099c4afbb6dbf16d845",
        "firstName": "Marcie",
        "lastName": "Gunter",
        "email": "mcgunter1@charter.net",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-22T15:15:37.773011Z",
        "address": {
            "firstName": "Marcie",
            "lastName": "Gunter",
            "address1": "1 Kilmar Woods",
            "address2": null,
            "city": "Belleville",
            "state": "IL",
            "countryCode": "US",
            "postalCode": "62223",
            "phone": "17083781532"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-22T15:15:37.783Z",
            "lastOrderSubmittedOn": "2020-11-22T15:15:37.783Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb586e446e6540b3f660855",
        "firstName": "Kimberly",
        "lastName": "Hayes",
        "email": "khayes007@hotmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-18T20:41:08.790757Z",
        "address": {
            "firstName": "Kim",
            "lastName": "Hayes",
            "address1": "21052 Sojourn Ct",
            "address2": null,
            "city": "Germantown",
            "state": "MD",
            "countryCode": "US",
            "postalCode": "20876",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-18T20:41:08.803Z",
            "lastOrderSubmittedOn": "2020-11-18T20:41:08.803Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb53fb78daf774012b66d43",
        "firstName": "sandy",
        "lastName": "herron",
        "email": "mstherron@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-18T15:37:27.154539Z",
        "address": {
            "firstName": "sandy",
            "lastName": "herron",
            "address1": "12325 e cape horn drive",
            "address2": null,
            "city": "Tucson",
            "state": "AZ",
            "countryCode": "US",
            "postalCode": "85749",
            "phone": "5209790550"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-18T15:37:27.164Z",
            "lastOrderSubmittedOn": "2020-11-18T15:37:27.164Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "261.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb1e641763c962f605a6d50",
        "firstName": "Liesl",
        "lastName": "Nottingham",
        "email": "ladybugn72@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-16T02:38:57.226433Z",
        "address": {
            "firstName": "Liesl",
            "lastName": "Nottingham",
            "address1": "5101 River Road",
            "address2": "505",
            "city": "Bethesda",
            "state": "MD",
            "countryCode": "US",
            "postalCode": "20816",
            "phone": "2403393456"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-16T02:38:57.235Z",
            "lastOrderSubmittedOn": "2020-11-16T02:38:57.235Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "82.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb1a377763c962f605975de",
        "firstName": "Sabrina",
        "lastName": "Steverson",
        "email": "dauofjohn@aol.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-15T21:53:59.723234Z",
        "address": {
            "firstName": "Sabrina",
            "lastName": "Steverson",
            "address1": "160 Trantor Place",
            "address2": "2A",
            "city": "Staten Island",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "10302",
            "phone": "3473519119"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-15T21:53:59.750Z",
            "lastOrderSubmittedOn": "2020-11-15T21:53:59.750Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "82.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb172df44a9b66a7dc25d86",
        "firstName": "Ross",
        "lastName": "Ferguson",
        "email": "rossferg36@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-15T18:26:39.423181Z",
        "address": {
            "firstName": "Ross",
            "lastName": "Ferguson",
            "address1": "19220 Space Center Blvd",
            "address2": "Apt 934",
            "city": "Houston",
            "state": "TX",
            "countryCode": "US",
            "postalCode": "77058",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-15T18:26:39.437Z",
            "lastOrderSubmittedOn": "2020-11-15T18:26:39.437Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "201.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fb038ce159c447f6648193e",
        "firstName": "Greselda",
        "lastName": "Butler",
        "email": "gbreal1971@aol.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-14T20:06:38.544656Z",
        "address": {
            "firstName": "Greselda",
            "lastName": "Butler",
            "address1": "9900 Gable Ridge Terrace",
            "address2": "A",
            "city": "Rockville",
            "state": "MD",
            "countryCode": "US",
            "postalCode": "20850",
            "phone": "9087274471"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-14T20:06:38.556Z",
            "lastOrderSubmittedOn": "2020-11-14T20:06:38.556Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "102.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5faefb9c159c447f66438916",
        "firstName": "Daliz",
        "lastName": "Rivas",
        "email": "rdalizl@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-13T21:33:16.933092Z",
        "address": {
            "firstName": "Daliz",
            "lastName": "Rivas",
            "address1": "1654 Ohm Avenue",
            "address2": "Apt 2",
            "city": "The Bronx",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "10465",
            "phone": "3475227938"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-13T21:33:16.943Z",
            "lastOrderSubmittedOn": "2020-11-13T21:33:16.943Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "82.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fae0ee3159c447f663ca6b3",
        "firstName": "Wanda",
        "lastName": "Wilson",
        "email": "wwaarg1@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2020-11-13T04:43:15.510430Z",
        "address": {
            "firstName": "Wanda",
            "lastName": "Wilson",
            "address1": "5 Southview Dr",
            "address2": "Apt 5M",
            "city": "Hibbing",
            "state": "MN",
            "countryCode": "US",
            "postalCode": "55746",
            "phone": "7708732344"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-13T04:43:15.519Z",
            "lastOrderSubmittedOn": "2020-11-13T04:43:15.519Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "5fa8db7b763c962f60198817",
        "firstName": "Candace",
        "lastName": "Mitchell",
        "email": "candace@myavana.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2020-11-09T06:02:35.883121Z",
        "address": {
            "firstName": "Candace",
            "lastName": "Harris",
            "address1": "4923 Orinda Ave",
            "address2": null,
            "city": "Los Angeles",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "90043",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2020-11-09T06:02:35.896Z",
            "lastOrderSubmittedOn": "2021-04-15T15:27:33.852Z",
            "orderCount": 4,
            "totalOrderAmount": {
                "value": "166.57",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    }
]

let b = [
    {
        "id": "6099f7d931fc89397e818edc",
        "firstName": "Dr. Cheryl",
        "lastName": "Gittens",
        "email": "cbgittens@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-05-11T03:19:53.459126Z",
        "address": {
            "firstName": "Dr. Cheryl",
            "lastName": "Gittens",
            "address1": "5262 Bishops Bay, #316",
            "address2": null,
            "city": "Waunakee",
            "state": "WI",
            "countryCode": "US",
            "postalCode": "53597",
            "phone": "7038690378"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-05-11T03:19:53.469Z",
            "lastOrderSubmittedOn": "2021-05-11T03:19:53.469Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6095740f5dd50316ca5e0ec2",
        "firstName": "Chris",
        "lastName": "Donayre",
        "email": "chris@strandshaircare.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-05-07T17:08:31.656664Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "60956776dbeec2414720645e",
        "firstName": "Shuba Ilea",
        "lastName": "Eckhardt",
        "email": "ileaeckhardt@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-05-07T16:14:46.365222Z",
        "address": {
            "firstName": "Ilea",
            "lastName": "Eckhardt",
            "address1": "2600 Netherland Ave, 2124, Bronx NY 10463",
            "address2": "2600 Netherland Ave, 2124, Bronx NY 10463",
            "city": "Bronx",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "10463",
            "phone": "917-428-9028"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-05-07T16:14:46.382Z",
            "lastOrderSubmittedOn": "2021-05-07T16:14:46.382Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "608f0cd410d70377470a6e86",
        "firstName": "Bernadette",
        "lastName": "White",
        "email": "bernie98@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-05-02T20:34:28.602838Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "608f0c9410d70377470a6df0",
        "firstName": "Bernadette",
        "lastName": "White",
        "email": "bwhite98@icloud.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-05-02T20:33:24.683109Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "608c4a3f0fee3034069eb8c5",
        "firstName": "Lori",
        "lastName": "Martinez",
        "email": "lmartinez715@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-04-30T18:19:43.789728Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "608bfe9e1e611e4a5b428c17",
        "firstName": "La Neice",
        "lastName": "Collins",
        "email": "halekoa@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-30T12:57:02.443035Z",
        "address": {
            "firstName": "La Neice",
            "lastName": "Collins",
            "address1": "137 Montague Street",
            "address2": "194",
            "city": "Brooklyn",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11201",
            "phone": "646-535-7055"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-30T12:57:19.553Z",
            "lastOrderSubmittedOn": "2021-04-30T12:57:19.553Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6088a5eb3a12215086774739",
        "firstName": "Eric",
        "lastName": "Proffitt",
        "email": "eric.ai@icloud.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-28T00:01:47.042437Z",
        "address": {
            "firstName": "Eric",
            "lastName": "Proffitt",
            "address1": "16-26 Madison Street",
            "address2": "4F",
            "city": "Queens",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11385",
            "phone": "3478962791"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-28T00:01:47.051Z",
            "lastOrderSubmittedOn": "2021-04-28T00:01:47.051Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "60868d475337b263fc2ca59f",
        "firstName": "RaShaun",
        "lastName": "Stubbs",
        "email": "rashaunstubbs@outlook.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-04-26T09:52:07.094309Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "6085c76144363957c2bab2d2",
        "firstName": "Aminata",
        "lastName": "Diena",
        "email": "aminatadiena@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-25T19:47:45.438575Z",
        "address": {
            "firstName": "Aminata",
            "lastName": "Diena",
            "address1": "3265 Hamner Avenue",
            "address2": null,
            "city": "Norco",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "92860",
            "phone": "9514477236"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-25T19:47:45.452Z",
            "lastOrderSubmittedOn": "2021-04-25T19:47:45.452Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "60821b0044363957c2a8f00e",
        "firstName": "Lisa",
        "lastName": "Vermillion",
        "email": "lisa.vermillion@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-23T00:55:28.337422Z",
        "address": {
            "firstName": "Lisa",
            "lastName": "Vermillion",
            "address1": "2506 25th St",
            "address2": null,
            "city": "San Francisco",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "94110",
            "phone": "8312523221"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-23T00:55:28.350Z",
            "lastOrderSubmittedOn": "2021-04-23T00:55:28.350Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "607f5d19c70b7a089a39e0b0",
        "firstName": "Kade",
        "lastName": "Sakho",
        "email": "k.sakho@hotmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-04-20T23:00:41.473654Z",
        "address": {
            "firstName": "Kade",
            "lastName": "Sakho",
            "address1": "Weggevoerdenstraat 51",
            "address2": null,
            "city": "Ninove",
            "state": "Vlaanderen",
            "countryCode": "BE",
            "postalCode": "9400",
            "phone": "0032465769247"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-20T23:00:45.846Z",
            "lastOrderSubmittedOn": "2021-04-20T23:00:45.846Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "19.99",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "607ba6b409ce4114e597f8d9",
        "firstName": "Toni",
        "lastName": "Dunston",
        "email": "toni211@cox.net",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-04-18T03:25:40.531738Z",
        "address": {
            "firstName": "Toni",
            "lastName": "Dunston",
            "address1": "2016 twinflower ct.",
            "address2": null,
            "city": "Virginia Bch",
            "state": "VA",
            "countryCode": "US",
            "postalCode": "23453",
            "phone": "7577544519"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-18T03:25:41.497Z",
            "lastOrderSubmittedOn": "2021-04-18T03:25:41.497Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6079cbbac7e9985b495e6fbb",
        "firstName": "Brianna",
        "lastName": "Bowman",
        "email": "brianna.r.bowman@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-04-16T17:39:06.538904Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "60787e92c7e9985b49580192",
        "firstName": "Rita",
        "lastName": "El-khouri",
        "email": "rjelkhouri@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-15T17:57:38.887637Z",
        "address": {
            "firstName": "Chris",
            "lastName": "Donayre",
            "address1": "606 West El Segundo Boulevard",
            "address2": "Unit C",
            "city": "Los Angeles",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "90061",
            "phone": "321-537-1059"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-15T17:57:38.901Z",
            "lastOrderSubmittedOn": "2021-04-15T17:57:38.901Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "606f805a1676136a5186ba49",
        "firstName": "Michelle",
        "lastName": "Houston",
        "email": "chellhouston@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-04-08T22:14:50.253786Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "606c65126a3363289efe441f",
        "firstName": "Jenala",
        "lastName": "Nyangu",
        "email": "jenala_nyangu@hotmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-04-06T13:41:38.260525Z",
        "address": {
            "firstName": "Jenala",
            "lastName": "Nyangu",
            "address1": "Clinton Health Access Initiative",
            "address2": "175 Kudu Road, Kabulonga",
            "city": "Lusaka",
            "state": "Lusaka",
            "countryCode": "ZM",
            "postalCode": "10101",
            "phone": "+260978747475"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-06T13:41:38.273Z",
            "lastOrderSubmittedOn": "2021-04-06T13:41:38.273Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6069d0fa91775b4e0f3c63da",
        "firstName": "Patricia",
        "lastName": "King",
        "email": "pc1king@optonline.net",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-04-04T14:45:14.262467Z",
        "address": {
            "firstName": "Patricia",
            "lastName": "King",
            "address1": "32 12TH AVE",
            "address2": null,
            "city": "HUNTINGTON STATION",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "11746",
            "phone": "6318276579"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-04-04T14:45:14.288Z",
            "lastOrderSubmittedOn": "2021-04-04T14:45:14.288Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "606614f8f6cdcb2a6ca42d2b",
        "firstName": "Sewit",
        "lastName": "Msghina",
        "email": "sewitmsghina@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-04-01T18:46:16.459675Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "606244ce0022e531ac4df18d",
        "firstName": "Rosetta",
        "lastName": "Norman",
        "email": "rosettalnorman@yahoo.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-03-29T21:21:18.618069Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "605f71cbb12bcd117c24ca79",
        "firstName": "Kandice",
        "lastName": "Lewis",
        "email": "curvaceousbeautyy@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-27T17:56:27.350587Z",
        "address": {
            "firstName": "Kandice",
            "lastName": "Lewis",
            "address1": "36 Sal Circle",
            "address2": null,
            "city": "Brampton",
            "state": "ON",
            "countryCode": "CA",
            "postalCode": "L6R 1H6",
            "phone": "9054605802"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-27T17:56:27.362Z",
            "lastOrderSubmittedOn": "2021-03-27T17:56:27.362Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "605e83ca72456e6dd89cf8d0",
        "firstName": "Barbara",
        "lastName": "Freeman",
        "email": "bfree123@mac.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-27T01:00:58.057780Z",
        "address": {
            "firstName": "Barbara",
            "lastName": "Freeman",
            "address1": "2229 Taft Street",
            "address2": null,
            "city": "Gary",
            "state": "IN",
            "countryCode": "US",
            "postalCode": "46404",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-27T01:00:58.069Z",
            "lastOrderSubmittedOn": "2021-03-27T01:00:58.069Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "106.60",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "605cbf21b363fe5c1df3d96c",
        "firstName": "Kamilah",
        "lastName": "Campbell",
        "email": "kamilah.campbell@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-25T16:49:37.227156Z",
        "address": {
            "firstName": "Kamilah",
            "lastName": "Campbell",
            "address1": "6797 Mason Creek Rd",
            "address2": null,
            "city": "Douglasville",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30135",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-25T16:49:37.244Z",
            "lastOrderSubmittedOn": "2021-03-25T16:49:37.244Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "110.87",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6058ed77cb3cc90d9f113aca",
        "firstName": "Regina",
        "lastName": "Cole",
        "email": "colerr16@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-03-22T19:18:15.703050Z",
        "address": {
            "firstName": "Regina",
            "lastName": "Cole",
            "address1": "2833 manndale Drive",
            "address2": null,
            "city": "Memphis",
            "state": "TN",
            "countryCode": "US",
            "postalCode": "38127",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-22T19:18:15.714Z",
            "lastOrderSubmittedOn": "2021-03-22T19:18:15.714Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "605698a256240d6077606f10",
        "firstName": "Kristian",
        "lastName": "Atkinson",
        "email": "missygrl900@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-21T00:51:46.607246Z",
        "address": {
            "firstName": "Kristian",
            "lastName": "Atkinson",
            "address1": "7588 Cat Tail Creek Drive",
            "address2": null,
            "city": "Colorado Springs",
            "state": "CO",
            "countryCode": "US",
            "postalCode": "80923",
            "phone": "7196542563"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-21T00:51:46.617Z",
            "lastOrderSubmittedOn": "2021-03-21T00:51:46.617Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "604e0e8a6102d06138a30b40",
        "firstName": "Kimberly",
        "lastName": "Wade",
        "email": "seni233@aol.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-03-14T13:24:26.226223Z",
        "address": {
            "firstName": "Kimberly",
            "lastName": "Wade",
            "address1": "1001 Pinevale Drive",
            "address2": null,
            "city": "Columbia",
            "state": "SC",
            "countryCode": "US",
            "postalCode": "29203",
            "phone": ""
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-14T13:24:29.288Z",
            "lastOrderSubmittedOn": "2021-05-14T13:41:50.061Z",
            "orderCount": 3,
            "totalOrderAmount": {
                "value": "59.97",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6046ff849d04823c005e2e67",
        "firstName": "Alex",
        "lastName": "Jenkins",
        "email": "jenk3233@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-09T04:54:28.508501Z",
        "address": {
            "firstName": "Brianna",
            "lastName": "Bowman",
            "address1": "4817 Dearborn St",
            "address2": null,
            "city": "Pittsburgh",
            "state": "PA",
            "countryCode": "US",
            "postalCode": "15224",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-09T04:54:28.519Z",
            "lastOrderSubmittedOn": "2021-03-09T04:54:28.519Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "60464ddf7abfba0ed05b3ab3",
        "firstName": "Sekinat",
        "lastName": "Small",
        "email": "jsoshodi@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-03-08T16:16:31.720497Z",
        "address": {
            "firstName": "Jaclyn",
            "lastName": "Small",
            "address1": "2840 Peachtree Rd NW",
            "address2": "Unit 103",
            "city": "ATLANTA",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30305",
            "phone": "7703151352"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-08T16:16:33.246Z",
            "lastOrderSubmittedOn": "2021-03-08T16:16:33.246Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "137.70",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6043b80c4dbd1116b8a0b856",
        "firstName": "Maya",
        "lastName": "Kelly",
        "email": "mayakelly123@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-03-06T17:12:44.912722Z",
        "address": {
            "firstName": "Maya",
            "lastName": "Kelly",
            "address1": "958 Virginia Pine Cove",
            "address2": null,
            "city": "Southaven",
            "state": "MS",
            "countryCode": "US",
            "postalCode": "38671",
            "phone": "38671"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-06T17:12:46.060Z",
            "lastOrderSubmittedOn": "2021-03-06T17:12:46.060Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "261.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "604174a8552711657753caee",
        "firstName": "Kandyl",
        "lastName": "Phillips",
        "email": "kandylphillips@yahoo.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-05T00:00:40.023566Z",
        "address": {
            "firstName": "Kandyl",
            "lastName": "Phillips",
            "address1": "8700 Southside Blvd Apt 411",
            "address2": null,
            "city": "Jacksonville",
            "state": "FL",
            "countryCode": "US",
            "postalCode": "32256",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-05T00:00:40.036Z",
            "lastOrderSubmittedOn": "2021-03-05T00:00:40.036Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "603fd19ef214a65ee8555420",
        "firstName": "kIMBERLY",
        "lastName": "WADE",
        "email": "seni232@aol.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-03-03T18:12:46.059991Z",
        "address": {
            "firstName": "Kimberly",
            "lastName": "Wade",
            "address1": "1001 Pinevale Drive",
            "address2": null,
            "city": "Columbia",
            "state": "SC",
            "countryCode": "US",
            "postalCode": "29203",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-03T18:12:46.083Z",
            "lastOrderSubmittedOn": "2021-05-11T16:36:49.848Z",
            "orderCount": 3,
            "totalOrderAmount": {
                "value": "172.38",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "603f60ecf214a65ee850bc74",
        "firstName": "sfsf",
        "lastName": "sdfsf",
        "email": "pinkipriya159@gmail.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-03-03T10:11:56.348067Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "603e18c17b7b3627984ffad9",
        "firstName": "Drew",
        "lastName": "Brubaker",
        "email": "drewanbru@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-03-02T10:51:45.221232Z",
        "address": {
            "firstName": "Drew",
            "lastName": "Brubaker",
            "address1": "339 E Linfield Trappe Rd",
            "address2": null,
            "city": "Royersford",
            "state": "PA",
            "countryCode": "US",
            "postalCode": "19468",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-03-02T10:51:45.231Z",
            "lastOrderSubmittedOn": "2021-03-02T10:51:45.231Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "603bf62350a8a0468a79a4b9",
        "firstName": "Tahira",
        "lastName": "Neckles",
        "email": "tnecklesinfo@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-28T19:59:31.053395Z",
        "address": {
            "firstName": "Tahira",
            "lastName": "Neckles",
            "address1": "1479 Balhan Drive #108",
            "address2": null,
            "city": "Concord",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "94521",
            "phone": "5107761309"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-28T19:59:34.986Z",
            "lastOrderSubmittedOn": "2021-04-28T20:18:11.486Z",
            "orderCount": 3,
            "totalOrderAmount": {
                "value": "59.97",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "603ad2c5aa848a1be09c550f",
        "firstName": "Tasheema",
        "lastName": "Anderson",
        "email": "tasheema5@aol.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-27T23:16:21.091231Z",
        "address": {
            "firstName": "Tasheema",
            "lastName": "Anderson",
            "address1": "12 Valley Wood Drive",
            "address2": null,
            "city": "Somerset",
            "state": "NJ",
            "countryCode": "US",
            "postalCode": "08873-5229",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-27T23:16:21.104Z",
            "lastOrderSubmittedOn": "2021-02-27T23:16:21.104Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6039720645c2e85cb25b9a71",
        "firstName": "Cyrilsia",
        "lastName": "Cooper",
        "email": "cccooper31@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-26T22:11:18.606132Z",
        "address": {
            "firstName": "Cyrilsia",
            "lastName": "Cooper",
            "address1": "1 Labarre Court",
            "address2": null,
            "city": "Jefferson",
            "state": "LA",
            "countryCode": "US",
            "postalCode": "70121",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-26T22:11:20.450Z",
            "lastOrderSubmittedOn": "2021-02-26T22:11:20.450Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "603692e0d01f7a412e88a099",
        "firstName": "Angela",
        "lastName": "Richards",
        "email": "arichards65@bellsouth.net",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-24T17:54:40.468334Z",
        "address": {
            "firstName": "Angela",
            "lastName": "Richards",
            "address1": "124 McNeely Road",
            "address2": null,
            "city": "Columbia",
            "state": "SC",
            "countryCode": "US",
            "postalCode": "29223",
            "phone": "8037361868"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-24T17:54:40.480Z",
            "lastOrderSubmittedOn": "2021-02-24T17:54:40.480Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "3.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6033efaee0af9274a1eb136b",
        "firstName": "Marie",
        "lastName": "Sundin",
        "email": "girl4jai@yahoo.com",
        "hasAccount": true,
        "isCustomer": false,
        "createdOn": "2021-02-22T17:53:50.290058Z",
        "address": null,
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": null,
            "lastOrderSubmittedOn": null,
            "orderCount": 0,
            "totalOrderAmount": null,
            "totalRefundAmount": null,
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": null
        }
    },
    {
        "id": "602d82d57854f707e0cae63a",
        "firstName": "Erika",
        "lastName": "Reid",
        "email": "gteurika@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-17T20:55:49.666078Z",
        "address": {
            "firstName": "Erika",
            "lastName": "Reid",
            "address1": "1708 West Caribaea Trail",
            "address2": null,
            "city": "Atlanta",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30316",
            "phone": "7573442440"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-17T20:55:52.715Z",
            "lastOrderSubmittedOn": "2021-04-17T21:02:55.069Z",
            "orderCount": 3,
            "totalOrderAmount": {
                "value": "62.37",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602d56a0d9fb1017022bc066",
        "firstName": "Ashley",
        "lastName": "McKnight",
        "email": "ashmcknight08@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-17T17:47:12.634356Z",
        "address": {
            "firstName": "Ashley",
            "lastName": "McKnight",
            "address1": "220 Integra Vistas Drive",
            "address2": "Apt 306",
            "city": "Hixson",
            "state": "TN",
            "countryCode": "US",
            "postalCode": "37343",
            "phone": "9315427616"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-17T17:47:14.390Z",
            "lastOrderSubmittedOn": "2021-02-17T17:47:14.390Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602c13de22af001e80c40d5c",
        "firstName": "Ashley",
        "lastName": "Hall",
        "email": "aphillips630@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-16T18:50:06.450915Z",
        "address": {
            "firstName": "Ashley",
            "lastName": "Hall",
            "address1": "336 Sunrise Blvd",
            "address2": null,
            "city": "Buffalo",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "14221",
            "phone": "7162133553"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-16T18:50:06.464Z",
            "lastOrderSubmittedOn": "2021-02-16T18:50:06.464Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602b31e722af001e80bf3e76",
        "firstName": "Monique",
        "lastName": "Martin",
        "email": "moniquemartin9@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-16T02:45:59.492054Z",
        "address": {
            "firstName": "Monique",
            "lastName": "Martin",
            "address1": "7622 Mercier Street",
            "address2": null,
            "city": "New Orleans",
            "state": "LA",
            "countryCode": "US",
            "postalCode": "70128",
            "phone": "5049316712"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-16T02:46:02.560Z",
            "lastOrderSubmittedOn": "2021-02-16T02:46:02.560Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "19.99",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602a98bc7854f707e0b74c68",
        "firstName": "Paige",
        "lastName": "Mitchell",
        "email": "paigeskyler4@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-15T15:52:28.194567Z",
        "address": {
            "firstName": "Paige",
            "lastName": "Mitchell",
            "address1": "3681 North Decatur Road",
            "address2": null,
            "city": "Decatur",
            "state": "GA",
            "countryCode": "US",
            "postalCode": "30032",
            "phone": ""
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-15T15:52:31.558Z",
            "lastOrderSubmittedOn": "2021-02-15T15:52:31.558Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "20.79",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6028466322af001e80b35675",
        "firstName": "Alexis",
        "lastName": "Dow",
        "email": "adow2006@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-13T21:36:35.422802Z",
        "address": {
            "firstName": "Alexis",
            "lastName": "Figueroa",
            "address1": "2975 Balsa Street",
            "address2": null,
            "city": "York",
            "state": "PA",
            "countryCode": "US",
            "postalCode": "17404",
            "phone": "7176545098"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-13T21:36:35.433Z",
            "lastOrderSubmittedOn": "2021-02-13T21:36:35.433Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602827477854f707e0aea2ea",
        "firstName": "Indoora",
        "lastName": "Hayles",
        "email": "dorahayles@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-02-13T19:23:51.226788Z",
        "address": {
            "firstName": "Indoora",
            "lastName": "Hayles",
            "address1": "1065 MANOR AVENUE",
            "address2": "Apt 5A",
            "city": "BRONX",
            "state": "NY",
            "countryCode": "US",
            "postalCode": "10472",
            "phone": "929-216-6420"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-13T19:23:51.237Z",
            "lastOrderSubmittedOn": "2021-02-13T19:23:51.237Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "602746a831b9ec7992880915",
        "firstName": "Latara",
        "lastName": "Glanton",
        "email": "latarag23@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-13T03:25:28.393078Z",
        "address": {
            "firstName": "LaTara",
            "lastName": "Glanton",
            "address1": "945 Marc Drive",
            "address2": null,
            "city": "North Brunswick Township",
            "state": "NJ",
            "countryCode": "US",
            "postalCode": "08902",
            "phone": null
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-13T03:25:28.404Z",
            "lastOrderSubmittedOn": "2021-02-13T03:25:28.404Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6025ab3e9143ec417d870679",
        "firstName": "Aja",
        "lastName": "Bradley",
        "email": "aja.bradley@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-11T22:10:06.911768Z",
        "address": {
            "firstName": "Aja",
            "lastName": "Bradley",
            "address1": "381",
            "address2": "Anjou Circle",
            "city": "Sacramento",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "95835",
            "phone": "6785991470"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-11T22:10:06.923Z",
            "lastOrderSubmittedOn": "2021-02-11T22:10:06.923Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "601f087faa91bc273a94789e",
        "firstName": "Leasa",
        "lastName": "Simmons",
        "email": "leasa.simmons@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-02-06T21:22:07.650195Z",
        "address": {
            "firstName": "Leasa",
            "lastName": "Simmons",
            "address1": "5399 Mallards Marsh",
            "address2": null,
            "city": "Columbus",
            "state": "OH",
            "countryCode": "US",
            "postalCode": "43229",
            "phone": "6143536978"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-02-06T21:22:07.661Z",
            "lastOrderSubmittedOn": "2021-02-06T21:22:07.661Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "60107515befa183023dbe6ee",
        "firstName": "Shelby",
        "lastName": "Larson",
        "email": "shelbylarson01@gmail.com",
        "hasAccount": false,
        "isCustomer": true,
        "createdOn": "2021-01-26T20:01:25.135570Z",
        "address": {
            "firstName": "Shelby",
            "lastName": "Larson",
            "address1": "4693 Marcy Street",
            "address2": null,
            "city": "Omaha",
            "state": "NE",
            "countryCode": "US",
            "postalCode": "68106",
            "phone": "4028899166"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-26T20:01:25.147Z",
            "lastOrderSubmittedOn": "2021-01-26T20:01:25.147Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    },
    {
        "id": "6007d7164fa71b69d3da66f7",
        "firstName": "Michelle",
        "lastName": "Gitschier",
        "email": "michelle.gitschier@gmail.com",
        "hasAccount": true,
        "isCustomer": true,
        "createdOn": "2021-01-20T07:09:10.101358Z",
        "address": {
            "firstName": "Michelle",
            "lastName": "Gitschier",
            "address1": "1450 Market St.",
            "address2": "Apt. 631",
            "city": "San Diego",
            "state": "CA",
            "countryCode": "US",
            "postalCode": "92101",
            "phone": "6037672689"
        },
        "acceptsMarketing": false,
        "transactionsSummary": {
            "firstOrderSubmittedOn": "2021-01-20T07:09:10.114Z",
            "lastOrderSubmittedOn": "2021-01-20T07:09:10.114Z",
            "orderCount": 1,
            "totalOrderAmount": {
                "value": "132.40",
                "currency": "USD"
            },
            "totalRefundAmount": {
                "value": "0.00",
                "currency": "USD"
            },
            "firstDonationSubmittedOn": null,
            "lastDonationSubmittedOn": null,
            "donationCount": 0,
            "totalDonationAmount": {
                "value": "0.00",
                "currency": "USD"
            }
        }
    }
]

let c = a.length
let d = b.length
let e = c + d
console.log(e)

let s = []


async function aa(){
    await a.map((f)=>{
        let g = f.transactionsSummary.orderCount
        if(g != 0){
            s.push(f)
        }
    })
    
    await b.map((f)=>{
        let g = f.transactionsSummary.orderCount
        if(g != 0){
            s.push(f)
        }
    })
}

aa().then(()=>{
    const file = `./data.json`
    jsonfile.writeFile(file, s)
    .then(res => {
        console.log('Write complete')
    })
    .catch(error => console.error(error))
})
