import {
  TextField,
  Stack,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import { InputCalendar } from "./Icons/InputCalendar";
import { useTheme } from "@mui/material/styles";
import { BookStayButton } from "./Buttons/BookStayButton";
export const ReservationForm = () => {
  const { colors } = useTheme();
  return (
    <Box>
      <Stack spacing={4}>
        <Typography
          sx={{
            color: colors.textBlack,
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "34px",
          }}
        >
          Book your stay
        </Typography>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Number of guests"
          variant="outlined"
        />

        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-select-currency"
            label="Check in"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InputCalendar />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />

          <TextField
            id="outlined-select-currency"
            label="Check out"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InputCalendar />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
        </Stack>
      </Stack>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <Box
          sx={{
            width: "40%",
            marginTop: "3rem",
          }}
        >
          <BookStayButton />
        </Box>
      </Box>
    </Box>
  );
};
