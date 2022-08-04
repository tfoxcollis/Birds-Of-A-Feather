export const eventsData = [
  {
    id: 1,
    userId: 1,
    location: {
      lat: 36.019505,
      lng: -115.261291,
      zip: 89179
    },
    numberOfAdults: 2,
    numberOfKids: 1,
    kidsAges: [1],
    
    date: "2022/09/01",
    description: "Taking the family to Exploration Peak Park",
    event: "picnic"
  },
  {
    id: 2,
    userId: 1,
    location: {
      lat: 36.019505,
      lng: -115.261291,
      zip: 89129
    },
    date: "2022/09/21",
    description: "Taking the family the movies",
    event: "movies"
  },
  {
    id: 3,
    userId: 1,
    location: {
      lat: 36.019505,
      lng: -115.261291,
      zip: 89179
    },
    date: "2022/08/11",
    description: "Taking the family to the splash pad.",
    event: "water play"
  },
  {
    id: 4,
    userId: 2,
    location: {
      lat: 36.019505,
      lng: -115.261291,
      zip: 89101
    },
    date: "2022/08/16",
    description: "Hiking exploration peak with my significant other.",
    event: "hiking"
  }
]

export const usersData = [
  {
    id: 1,
    name: "John P."
  },
  {
    id: 2,
    name: "Suzi Q."
  },
  {
    id: 3,
    name: "Stephen J."
  }
]

export const rsvpData = [
  {
    userId: 2,
    eventId: 1
  },
  {
    userId: 3,
    eventId: 3
  }
]

export const zoneKeys = [
  ["northWest", "North West"], ["northEast", "North East"], ["southWest", "South West"], ["southEast", "South East"]
]

export const zones = {
  northWest: [
    89129,
    89134,
    89128,
    89145,
    89117,
    89129
  ],
  northEast: [
    89101,
    89106,
    89032,
    89031,
    89115,
    89156,
    89110,
    89081,
  ],
  southEast: [
    89123,
    89183,
    89052,
    89074,
    89012,
    89119,
    89120,
  ],
  southWest: [
    89179,
    89141,
    89178,
    89139,
    89148,
    89113,
    89147,
  ]

}