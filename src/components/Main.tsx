import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CityCard } from "./CityCard";
import { AccommodationCard } from "./AccommodationCard";
import { PlaceCard } from "./PlaceCard";
import { AccommodationInfo } from "./AccommodationInfo";

export const Main = () => {
  const cityCardData = {
    name: "London",
    count: "5102",
  };
  const accommodationCardData = {
    title: "Sugar & Spice Apartments",
    location: "Split",
    price: 75,
    categorization: 3,
  };
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

  const data = [
    {
      name: "London",
      count: "5102",
    },
    {
      title: "Sugar & Spice Apartments",
      location: "Split",
      price: 75,
      categorization: 3,
    },
    [
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
    ],
    {
      title: "Poseidon Hotel Suites",
      subtitle: "Stay in the heart of Mýkonos City",
      description:
        "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan. Each of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard. Free two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos. At the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon. The Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis. This is our guests' favourite part of Mýkonos City, according to independent reviews. Couples particularly like the location — they rated it 9.6 for a two-person trip.",
      type: "Room",
      categorization: 5,
      personCount: 2,
      imageUrl: "",
      freeCancelation: true,
      price: 500,
      location: "Mýkonos City",
      postalCode: "846 00",
    },
  ];
  return (
    <div>
      <Navigation />
      <Header />
      <CityCard city={cityCardData.name} count={cityCardData.count} />
      <AccommodationCard
        title={accommodationCardData.title}
        location={accommodationCardData.location}
        price={accommodationCardData.price}
        categorization={accommodationCardData.categorization}
      />
      <PlaceCard
        title={placeCardData[0].title}
        location={placeCardData[0].location}
        subtitle={placeCardData[0].subtitle}
      />
      <AccommodationInfo />
      <Footer />
    </div>
  );
};
