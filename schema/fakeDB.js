let users = [
    {
      userId: 1,
      emailAddress: 'pluna@dealercontrol.com'
    },
    {
      userId: 2,
      emailAddress: 'john@carweek.com'
    },
    {
      userId: 3,
      emailAddress: 'steve@sba.net'
    },
    {
      userId:4,
      emailAddress: 'jennifer@sba.net'
    }
  ];
  
let userAccountLink = [
    {
      userId: 1,
      accountId: 1
    },
    {
      userId: 1,
      accountId: 2
    },
    {
      userId: 1,
      accountId: 3
    },
    {
      userId: 2,
      accountId: 1
    },
];
  
let accounts = [
    {
      accountId: 1,
      accountName: 'Carweek SP',
      accountDisplayName: 'Carweek',
      createdOn: '2011-01-01'
    },
    {
      accountId: 2,
      accountName: 'Radical Auto, Inc.',
      accountDisplayName: 'Radical Auto',
      createdOn: '2015-01-01'
    },
    {
      accountId: 3,
      accountName: 'Radical Auto Deals, LLC',
      accountDisplayName: 'Radical Auto Deals',
      createdOn: '2018-07-22'
    },
    {
      accountId: 4,
      accountName: 'Dealer Leads, LLC',
      accountDisplayName: 'Dealer Leads',
      createdOn: '2008-05-22'
    },
    {
      accountId: 5,
      accountName: 'Dealer Control, LLC',
      accountDisplayName: 'Dealer Control',
      createdOn: '2013-09-21'
    }
];

let vehicles = [
  {
    "vehicleId": 1,
    "make": "Honda",
    "model": "Civic",
    "year": 1988,
    "vin": "1G6DP8E34D0058605",
    "state": "Mississippi",
    accountId: 5
  },
  {
    "vehicleId": 2,
    "make": "Lexus",
    "model": "GX",
    "year": 2009,
    "vin": "WAUWFAFH1AN296580",
    "state": "Michigan",
    accountId: 5
  },
  {
    "vehicleId": 3,
    "make": "Oldsmobile",
    "model": "Achieva",
    "year": 1996,
    "vin": "3C3CFFBR0FT924285",
    "state": "Texas",
    accoundId: 2
  },
  {
    "vehicleId": 4,
    "make": "BMW",
    "model": 330,
    "year": 2006,
    "vin": "WAUED64B21N964903",
    "state": "Ohio",
    accountId: 1
  },
  {
    "vehicleId": 5,
    "make": "Chevrolet",
    "model": "Camaro",
    "year": 2001,
    "vin": "1G6AL5SX2D0785276",
    "state": "Arkansas",
    accoundId: 1
  },
  {
    "vehicleId": 6,
    "make": "Ford",
    "model": "Excursion",
    "year": 2005,
    "vin": "SAJWA4FB8DL320910",
    "state": "Florida",
    accountId: 1
  },
  {
    "vehicleId": 7,
    "make": "Smart",
    "model": "Fortwo",
    "year": 2008,
    "vin": "2T1BURHE0EC430139",
    "state": "Colorado",
    accountId: 4
  },
  {
    "vehicleId": 8,
    "make": "Suzuki",
    "model": "Swift",
    "year": 2006,
    "vin": "5FRYD3H83EB952078",
    "state": "Georgia",
    accountId: 4
  },
  {
    "vehicleId": 9,
    "make": "Ford",
    "model": "Club Wagon",
    "year": 1996,
    "vin": "JHMFA3F25BS545781",
    "state": "Montana",
    accountId: 3
  },
  {
    "vehicleId": 10,
    "make": "Chevrolet",
    "model": "Tahoe",
    "year": 1995,
    "vin": "3C3CFFAR3CT500578",
    "state": "Florida",
    accountId: 1
  },
  {
    "vehicleId": 11,
    "make": "Nissan",
    "model": "Quest",
    "year": 2001,
    "vin": "1FTSF3B51AE020096",
    "state": "Ohio", 
    accountId: 3
  },
  {
    "vehicleId": 12,
    "make": "Bentley",
    "model": "Azure",
    "year": 2007,
    "vin": "1N6AA0CHXFN290260",
    "state": "California",
    accountId: 1
  },
  {
    "vehicleId": 13,
    "make": "Hyundai",
    "model": "Tiburon",
    "year": 2007,
    "vin": "1G6AW5SX4F0437652",
    "state": "Kansas",
    accountId: 1
  },
  {
    "vehicleId": 14,
    "make": "Chevrolet",
    "model": "S10",
    "year": 2002,
    "vin": "5TFCY5F1XCX102310",
    "state": "Texas",
    accountId: 4
  },
  {
    "vehicleId": 15,
    "make": "Dodge",
    "model": "Ram Van 1500",
    "year": 1999,
    "vin": "SCFLDCFP9EG453752",
    "state": "Nevada",
    accountId: 1
  },
  {
    "vehicleId": 16,
    "make": "BMW",
    "model": "8 Series",
    "year": 1996,
    "vin": "1N6AD0CU4BC191833",
    "state": "Louisiana",
    accountId: 5
  },
  {
    "vehicleId": 17,
    "make": "Mitsubishi",
    "model": "3000GT",
    "year": 1995,
    "vin": "2V4RW3D12AR709911",
    "state": "Arizona",
    accountId: 2
  },
  {
    "vehicleId": 18,
    "make": "Hummer",
    "model": "H1",
    "year": 2000,
    "vin": "2G4GN5EC0B9928900",
    "state": "California",
    accountId: 2
  },
  {
    "vehicleId": 19,
    "make": "Porsche",
    "model": "Cayman",
    "year": 2008,
    "vin": "5J8TB3H38FL414532",
    "state": "Pennsylvania",
    accountId: 2
  },
  {
    "vehicleId": 20,
    "make": "Chrysler",
    "model": "Sebring",
    "year": 2000,
    "vin": "4T1BF1FK7FU588904",
    "state": "Florida",
    accountId: 3
  }
];

module.exports = {
  users,
  userAccountLink,
  accounts,
  vehicles
};