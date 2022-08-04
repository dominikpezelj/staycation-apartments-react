import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LocationInput } from "./InputFields/LocationInput";
import { CheckInInput } from "./InputFields/CheckInInput";
import { CheckOutInput } from "./InputFields/CheckOutInput";
import { GuestNumberInput } from "./InputFields/GuestNumberInput";
import { AccommodationTypeInput } from "./InputFields/AccommodationTypeInput";
import { SearchButton } from "./SearchButton";

export const AccommodationSearch = () => {
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
