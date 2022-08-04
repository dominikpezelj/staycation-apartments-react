import { Stack } from "@mui/material";
import {
  CheckInInput,
  CheckOutInput,
  GuestNumberInput,
  AccommodationTypeInput,
} from "./InputFields";
import { SearchButton } from "./SearchButton";

export const AdvancedSearch = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
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
