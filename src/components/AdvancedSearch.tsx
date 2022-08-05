import { useState } from "react";
import { Stack } from "@mui/material";
import {
  CheckInInput,
  CheckOutInput,
  GuestNumberInput,
  AccommodationTypeInput,
} from "./InputFields";
import { SearchButton } from "./SearchButton";

export const AdvancedSearch = (): JSX.Element => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [accommodationType, setAccommodationType] = useState("");

  const getData = () => {
    console.log("Submitaj podatke");
    const accommodationSearchSubmit = {
      checkIn: checkIn,
      checkOut: checkOut,
      guestNumber: guestNumber,
      accommodationType: accommodationType,
    };
    console.log(accommodationSearchSubmit);
  };

  const getCheckInData = (props: string) => {
    setCheckIn(props);
  };

  const getCheckOutData = (props: string) => {
    setCheckOut(props);
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
        display: "flex",
        alignItems: "center",
      }}
    >
      <CheckInInput getCheckIn={getCheckInData} />
      <CheckOutInput getCheckOut={getCheckOutData} />
      <GuestNumberInput getGuestNumber={getGuestNumberData} />
      <AccommodationTypeInput getAccommodationType={getAccommodationTypeData} />
      <SearchButton onSubmitSearch={getData} />
    </Stack>
  );
};
