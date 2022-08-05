import { useState } from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  LocationInput,
  CheckInInput,
  CheckOutInput,
  GuestNumberInput,
  AccommodationTypeInput,
} from "./InputFields";
import { SearchButton } from "./SearchButton";

export const AccommodationSearch = (): JSX.Element => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const { colors, shadow } = useTheme();

  const getData = () => {
    const accommodationSearchSubmit = {
      location: location,
      checkIn: checkIn,
      checkOut: checkOut,
      guestNumber: guestNumber,
      accommodationType: accommodationType,
    };
    console.log(accommodationSearchSubmit);
  };

  const getLocationData = (locationInput: string) => {
    setLocation(locationInput);
  };

  const getCheckInData = (checkInInput: string) => {
    setCheckIn(checkInInput);
  };

  const getCheckOutData = (checkOutInput: string) => {
    setCheckOut(checkOutInput);
  };

  const getGuestNumberData = (guestNumberInput: string) => {
    setGuestNumber(guestNumberInput);
  };

  const getAccommodationTypeData = (accommodationTypeInput: string) => {
    setAccommodationType(accommodationTypeInput);
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        background: colors.white,
        display: "flex",
        marginTop: "-100px",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.75rem",
        borderRadius: "20px",
        marginX: "7.5rem",
        height: "6.25rem",
        boxShadow: shadow.main,
      }}
    >
      <LocationInput getLocation={getLocationData} />
      <CheckInInput getCheckIn={getCheckInData} />
      <CheckOutInput getCheckOut={getCheckOutData} />
      <GuestNumberInput getGuestNumber={getGuestNumberData} />
      <AccommodationTypeInput getAccommodationType={getAccommodationTypeData} />
      <SearchButton onSubmitSearch={getData} />
    </Stack>
  );
};
