
//LOCATIONS
import NewYork from "../assets/images/cities/newyork.jpg";
import Barcelona from "../assets/images/cities/barcelona.jpg";
import London from "../assets/images/cities/london.jpg";
import Rome from "../assets/images/cities/rome.jpg";
import Tokyo from "../assets/images/cities/tokyo.jpg";

//RESERVATION
import ReservationImage from "../assets/images/reservation-card.jpg"

const accommodationTypes = [
  {
    type: "room",
    value: "Room"
  },
  {
    type: "apartment",
    value: "Apartment"
  },
  {
    type: "mobileHome",
    value: "Mobile home" 
  },

]

const locations = [
  {
    type:"selectNewYork",
    value: "New York"
  },
  {
    type:"selectRome",
    value: "Rome"
  },
  {
    type:"selectLondon",
    value: "London"
  },
  {
    type:"selectTokyo",
    value: "Tokyo"
  },
  {
    type:"selectBarcelona",
    value: "Barcelona"
  },
]

const cityCardData = [
  {
    name: "New York",
    count: 1381,
    imgUrl: NewYork,
  },
  {
    name: "Rome",
    count: 14098,
    imgUrl: Rome
  },
  {
    name: "London",
    count: 5102,
    imgUrl: London
  },
  {
    name: "Tokyo",
    count: 11251,
    imgUrl: Tokyo
  },
  {
    name: "Barcelona",
    count: 21104,
    imgUrl: Barcelona
  }
]

const accommodationTestCard = {
  title: "Sugar & Spice Apartments",
    location: "Split",
    price: 75,
    categorization: 5,
    imgUrl: "home5.jpg"
}
  const accommodationCardData = [
    {
    title: "Sugar & Spice Apartments",
    location: "Split",
    price: 75,
    categorization: 5,
    imgUrl: "home1.png"
  },
  {
    title: "Lemon Luxury Apartments",
    location: "Saint Tropez",
    price: 174,
    categorization: 5,
    imgUrl: "home2.jpg"
  },
  {
    title: "Casa Krystal",
    location: "Cancun",
    price: 123,
    categorization: 5,
    imgUrl: "home3.jpg"
  },
  {
    title: "Phuket Kamala Beach Hotel",
    location: "Phuket",
    price: 55,
    categorization: 5,
    imgUrl: "home4.jpg"
  },

]
  const placeCardData = [
    {
      title: "Treehouse",
      location: "Hrusice",
      subtitle: "Renting entire unit",
    },
    {
      title: "Tiny House",
      location: "Hrusice",
      subtitle: "Renting entire unit",
    },
  ];

  const accommodationInfoData = {
    title: "Poseidon Hotel Suites",
    subtitle: "Stay in the heart of Mýkonos City",
    description:
      "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",
    type: "Room",
    categorization: 5,
    personCount: 2,
    imageUrl: ReservationImage,
    freeCancelation: true,
    price: 500,
    location: "Mýkonos City",
    postalCode: "846 00",
  };


  export {cityCardData, accommodationCardData, placeCardData, accommodationInfoData, accommodationTypes, locations, accommodationTestCard}