import { useState } from "react";
import moment from "moment";
import { Stack, Typography, Box, Button } from "@mui/material";

//THEME
import { useTheme } from "@mui/material/styles";
//DATA
import { bookStayLabel } from "../common/constants";
//INPUT FIELDS
import { InputField } from "../components/Form/InputField";
import { DateField } from "../components/Form/DateField";

export const ReservationForm = () => {
  const { colors } = useTheme();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    numGuests: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  const now = moment().format("DD-MM-YYYY");
  return (
    <Box>
      <form onSubmit={handleSubmit}>
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

          <InputField
            onChange={handleChange}
            value={formValues.fullName || ""}
            label={"Full Name"}
            name={"fullName"}
            type={"text"}
          />
          <InputField
            onChange={handleChange}
            value={formValues.email || ""}
            label={"Email address"}
            name={"email"}
            type={"email"}
          />
          <InputField
            onChange={handleChange}
            value={formValues.numGuests || ""}
            label={"Number of guests"}
            name={"numGuests"}
            type={"number"}
            min={1}
            max={100}
          />
          <Stack direction="row" spacing={2}>
            <DateField
              value={formValues.checkIn || now}
              label={"Check in"}
              name={"checkIn"}
              onChange={handleChange}
            />
            <DateField
              value={formValues.checkOut || now}
              label={"Check out"}
              name={"checkOut"}
              onChange={handleChange}
            />
          </Stack>
          <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
            <Box
              sx={{
                width: "40%",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: colors.mint,
                  width: "100%",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "26px",
                }}
              >
                {bookStayLabel}
              </Button>
            </Box>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
