import { LocationInput } from "./InputFields/LocationInput";
import { CheckInInput } from "./InputFields/CheckInInput";
import { CheckOutInput } from "./InputFields/CheckOutInput";
import { GuestNumberInput } from "./InputFields/GuestNumberInput";
import { AccommodationTypeInput } from "./InputFields/AccommodationTypeInput";
import { Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
      <Button
        variant="contained"
        sx={{
          background: colors.mint,
          color: colors.white,
          width: "9.25rem",
          height: "3.5rem",
        }}
      >
        Search
      </Button>
    </Stack>
  );
};
