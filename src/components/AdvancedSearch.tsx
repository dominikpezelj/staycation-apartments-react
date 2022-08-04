import { Stack } from "@mui/material";
import { CheckInInput } from "./InputFields/CheckInInput";
import { CheckOutInput } from "./InputFields/CheckOutInput";
import { GuestNumberInput } from "./InputFields/GuestNumberInput";
import { AccommodationTypeInput } from "./InputFields/AccommodationTypeInput";
import { SearchButton } from "./SearchButton";

export const AdvancedSearch = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginX: "7.5rem",
      }}
    >
      <CheckInInput />
      <CheckOutInput />
      <GuestNumberInput />
      <AccommodationTypeInput />
      <SearchButton />
    </Stack>
  );
};
