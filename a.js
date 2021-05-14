const Klaviyo = require('node-klaviyo');

const KlaviyoClient = new Klaviyo({
    //publicToken: 'myPublicToken',
    privateToken: 'pk_edf547ece3eba4755828f16278b0345e3f'
});

/* KlaviyoClient.lists.getLists().then((res)=>{
    console.log(res)
}) */

KlaviyoClient.lists.addSubscribersToList({
    listId: 'RWWmx9',
    "profiles": [
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
}).then((res)=>{
    console.log(res)
})

