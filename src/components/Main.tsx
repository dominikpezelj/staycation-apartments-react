import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CityCard } from "./CityCard";
import { AccommodationCard } from "./AccommodationCard";
import { PlaceCard } from "./PlaceCard";
import { AccommodationInfo } from "./AccommodationInfo";
import {
  cityCardData,
  accommodationCardData,
  placeCardData,
  AccommodationInfoData,
} from "../data/data.js";

export const Main = (): JSX.Element => {
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
      <AccommodationInfo data={AccommodationInfoData} />
      <Footer />
    </div>
  );
};
