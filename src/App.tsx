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

function App() {
  const [component, setComponent] = useState("home");
  return (
    <ThemeProvider theme={theme}>
      {component === "home" && <Home setComponent={setComponent} />}
      {component === "locations" && <Locations setComponent={setComponent} />}
      {component === "favorites" && <Favorites setComponent={setComponent} />}
      {component === "myplaces" && <MyPlaces setComponent={setComponent} />}
      {component === "mybookings" && <MyBookings setComponent={setComponent} />}
      {component === "accommodation-details" && (
        <AccommodationDetails
          data={accommodationInfoData}
          setComponent={setComponent}
        />
      )}
      {component === "reservation" && (
        <Reservation setComponent={setComponent} />
      )}
    </ThemeProvider>
  );
}

export default App;
