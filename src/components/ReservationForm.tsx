import { useState, useEffect } from "react";
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

  const [errMessages, setErrMessages] = useState({
    fullName: true,
    email: true,
    numGuests: true,
  });

  const [isTouched, setIsTouched] = useState({
    fullName: false,
    email: false,
    numGuests: false,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched((values) => ({ ...values, [event.target.name]: true }));
  };

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    Object.entries(formValues).map(([key, value]) => {
      if (value === "")
        setErrMessages((values) => ({ ...values, [key]: true }));
      else setErrMessages((values) => ({ ...values, [key]: false }));
    });
  }, [formValues]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* if(formValues.fullName === '') {
      setErrMessages((values) => ({ ...values, fullName: true})) 
    }
    setErrMessages((values) => ({ ...values, fullName: false})) 
    console.log(formValues);
    console.log(errMessages.fullName) */
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
            onBlur={handleBlur}
            value={formValues.fullName}
            label={"Full Name"}
            name={"fullName"}
            type={"text"}
            maxLength={300}
            error={errMessages.fullName && isTouched.fullName}
            helperText={
              errMessages.fullName && isTouched.fullName
                ? "Please enter full name"
                : " "
            }
          />
          <InputField
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.email}
            label={"Email address"}
            name={"email"}
            type={"email"}
            maxLength={100}
            error={errMessages.email && isTouched.email}
            helperText={
              errMessages.email && isTouched.email ? "Please enter email" : " "
            }
          />
          <InputField
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.numGuests}
            label={"Number of guests"}
            name={"numGuests"}
            type={"number"}
            min={1}
            max={100}
            error={errMessages.numGuests && isTouched.numGuests}
            helperText={
              errMessages.numGuests && isTouched.numGuests
                ? "Please enter number of guests"
                : " "
            }
          />
          <Stack direction="row" spacing={2}>
            <DateField
              value={formValues.checkIn || now}
              label={"Check in"}
              name={"checkIn"}
              disableFuture={true}
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
