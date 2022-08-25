import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { Locations } from "./pages/Locations";
import { MyPlaces } from "./pages/MyPlaces";
import { Favorites } from "./pages/Favorites";
import { MyBookings } from "./pages/MyBookings";
import { AccommodationDetails } from "./pages/AccommodationDetails";
import { Reservation } from "./pages/Reservation";
import { useState } from "react";
import { accommodationInfoData } from "./common/data";
import { AccommodationByLocation } from "./pages/AccommodationsByLocation";
import { NewPlaceForm } from "./pages/NewPlaceForm";
import { EditPlaceForm } from "./pages/EditPlaceForm";

function App() {
  const [component, setComponent] = useState("home");
  const [searchData, setSearchData] = useState("");
  const [recomendationId, setRecomendationId] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [bookStayData, setBookStayData] = useState({
    id: "",
    title: "",
    imageUrl: "",
    categorization: 0,
    type: "",
    location: { name: "", postalCode: 0 },
    price: 0,
  });

  return (
    <ThemeProvider theme={theme}>
      {component === "home" && (
        <Home
          setComponent={setComponent}
          setSearchData={setSearchData}
          setRecomendationId={setRecomendationId}
        />
      )}
      {component === "locations" && <Locations setComponent={setComponent} />}
      {component === "favorites" && <Favorites setComponent={setComponent} />}
      {component === "myplaces" && (
        <MyPlaces
          setComponent={setComponent}
          setPlaceId={setPlaceId}
          placeId={placeId}
        />
      )}
      {component === "mybookings" && <MyBookings setComponent={setComponent} />}
      {component === "accommodation-details" && (
        <AccommodationDetails
          id={recomendationId}
          setComponent={setComponent}
          setBookStayData={setBookStayData}
        />
      )}
      {component === "reservation" && (
        <Reservation
          setComponent={setComponent}
          reservationData={bookStayData}
        />
      )}
      {component === "accommodationbylocation" && (
        <AccommodationByLocation
          setComponent={setComponent}
          setRecomendationId={setRecomendationId}
          location={searchData}
          properties={1000}
        />
      )}
      {component === "newplaceform" && (
        <NewPlaceForm setComponent={setComponent} />
      )}
      {component === "edit-accommodation" && (
        <EditPlaceForm setComponent={setComponent} id={placeId}></EditPlaceForm>
      )}
    </ThemeProvider>
  );
}

export default App;
