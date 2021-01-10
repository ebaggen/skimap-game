const resorts = [
    {
      "name": "49 Degrees North",
      "img": "./images/49-degrees-north.png",
      "location": "Washington",
      "region": "Northwest",
      "country": "US",
      "year painted": 2006
    },
    {
      "name": "Alta",
      "img": "./images/alta.png",
      "location": "Utah",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 1991
    },
    {
      "name": "Alyeska",
      "img": "./images/alyeska.png",
      "location": "Alaska",
      "region": "Northwest",
      "country": "US",
      "year painted": 2009
    },
    {
      "name": "Antelope Butte",
      "img": "./images/antelope-butte.png",
      "location": "Wyoming",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 1996
    },
    {
      "name": "Arapahoe Basin",
      "img": "./images/arapahoe-basin.png",
      "location": "Colorado",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 1991
    },
    {
      "name": "Ascutney",
      "img": "./images/ascutney.png",
      "location": "Vermont",
      "region": "New England",
      "country": "US",
      "year painted": 2003
    },
    {
      "name": "Aspen Highlands",
      "img": "./images/aspen-highlands.png",
      "location": "Colorado",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 1994
    },
    {
      "name": "Bear Mountain",
      "img": "./images/bear-mountain.png",
      "location": "California",
      "region": "Southwest",
      "country": "US",
      "year painted": 1988
    },
    {
      "name": "Beaver Mountain",
      "img": "./images/beaver-mountain.png",
      "location": "Utah",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 2011
    },
    {
      "name": "Big Sky",
      "img": "./images/big-sky.png",
      "location": "Montana",
      "region": "Northern Rockies",
      "country": "US",
      "year painted": 2014
    },
    {
      "name": "Bogus Basin",
      "img": "./images/bogus-basin.png",
      "location": "Idaho",
      "region": "Northern Rockies",
      "country": "US",
      "year painted": 2010
    },
    {
      "name": "Boreal",
      "img": "./images/boreal.png",
      "location": "California",
      "region": "Southwest",
      "country": "US",
      "year painted": 1987
    },
    {
      "name": "Boyne Highlands",
      "img": "./images/boyne-highlands.png",
      "location": "Michigan",
      "region": "Midwest / Mid-Atlantic",
      "country": "US",
      "year painted": 1988
    },
    {
      "name": "Boyne",
      "img": "./images/boyne.png",
      "location": "Michigan",
      "region": "Midwest / Mid-Atlantic",
      "country": "US",
      "year painted": 2003
    },
    {
      "name": "Breckenridge",
      "img": "./images/breckenridge.png",
      "location": "Colorado",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 2016
    },
    {
      "name": "Bretton Woods",
      "img": "./images/bretton-woods.png",
      "location": "New Hampshire",
      "region": "New England",
      "country": "US",
      "year painted": 1998
    },
    {
      "name": "Bridger Bowl",
      "img": "./images/bridger-bowl.png",
      "location": "Montana",
      "region": "Northern Rockies",
      "country": "US",
      "year painted": 2005
    },
    {
      "name": "Brighton",
      "img": "./images/brighton.png",
      "location": "Utah",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 1999
    },
    {
      "name": "Bristol Mountain",
      "img": "./images/bristol-mountain.png",
      "location": "New York",
      "region": "Midwest / Mid-Atlantic",
      "country": "US",
      "year painted": 2011
    },
    {
      "name": "Bromley",
      "img": "./images/bromley.png",
      "location": "Vermont",
      "region": "New England",
      "country": "US",
      "year painted": 2007
    },
    {
      "name": "Brundage",
      "img": "./images/brundage.png",
      "location": "Brundage",
      "region": "Idaho",
      "country": "US",
      "year painted": 2007
    },
    {
      "name": "Calabogie",
      "img": "./images/calabogie.png",
      "location": "Ontario",
      "region": "International",
      "country": "Canda",
      "year painted": 2013
    },
    {
      "name": "Camelback",
      "img": "./images/camelback.png",
      "location": "Pennsylvania",
      "region": "Midwest / Mid-Atlantic",
      "country": "US",
      "year painted": 2008
    },
    {
      "name": "Cannon Mountain",
      "img": "./images/cannon-mountain.png",
      "location": "New Hampshire",
      "region": "New England",
      "country": "US",
      "year painted": 2007
    },
    {
      "name": "Cardrona",
      "img": "./images/cardrona.png",
      "location": "",
      "region": "International",
      "country": "New Zealand",
      "year painted": 2018
    },
    {
      "name": "Cataloochee",
      "img": "./images/cataloochee.png",
      "location": "Cataloochee",
      "region": "Midwest / Mid-Atlantic",
      "country": "US",
      "year painted": 2010
    },
    {
      "name": "Cloudcroft",
      "img": "./images/cloudcroft.png",
      "location": "New Mexico",
      "region": "Southwest",
      "country": "US",
      "year painted": 2016
    },
    {
      "name": "Cooper Mountain",
      "img": "./images/cooper-mountain.png",
      "location": "Colorado",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 2011
    },
    {
      "name": "Copper Mountain",
      "img": "./images/copper-mountain.png",
      "location": "Colorado",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 2018
    },
    {
      "name": "Coronet Peak",
      "img": "./images/coronet-peak.png",
      "location": "",
      "region": "International",
      "country": "New Zealand",
      "year painted": 1990
    },
    {
      "name": "Cottonwood Canyon",
      "img": "./images/cottonwood-canyon.png",
      "location": "Utah",
      "region": "Central Rockies",
      "country": "US",
      "year painted": 2001
    }
];

const nullResort = {
    name: '',
    img: '',
    location: ''
}

export { resorts, nullResort };