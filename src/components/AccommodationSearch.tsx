import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { JsxChild } from "typescript";
import {
  LocationInput,
  CheckInInput,
  CheckOutInput,
  GuestNumberInput,
  AccommodationTypeInput,
} from "./InputFields";

import { SearchButton } from "./SearchButton";

export const AccommodationSearch = (): JSX.Element => {
  const { colors, shadow } = useTheme();

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
      <LocationInput />
      <CheckInInput />
      <CheckOutInput />
      <GuestNumberInput />
      <AccommodationTypeInput />
      <SearchButton />
    </Stack>
  );
};
