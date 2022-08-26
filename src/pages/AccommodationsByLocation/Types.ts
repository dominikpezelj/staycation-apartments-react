

export type AccommodationByLocationProps = {
    setRecomendationId: Function;
    searchResult: any[];
    setSearchResult: Function,
    location: string;
  };
export type AccommodationType = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    shortDescription: string;
    type: "Room" | "MobileHome" | "Apartment";
    categorization: number;
    personCount: number;
    imageUrl: string;
    freeCancelation: boolean;
    price: number;
    location: {id: string; name: string; imageUrl: string; postalCode: number; properties: number;};
    locationID: string;
    capacity: number;

}

  