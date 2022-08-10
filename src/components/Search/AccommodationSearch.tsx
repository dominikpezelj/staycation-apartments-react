import { useState } from "react";
import moment from "moment";
import { Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import InputAdornment from "@mui/material/InputAdornment";

//DATA
import { searchLabel } from "../../common/constants";
import { locations, accommodationTypes } from "../../common/data";
//INPUT FIELDS
import { InputField } from "../Form/InputField";
import { DateField } from "../Form/DateField";
import { SelectField } from "../Form/SelectField";
//ICONS
import { Profile } from "../Icons/Profile";
import { Car } from "../Icons/Car";

export const AccommodationSearch = (): JSX.Element => {
  const [formValues, setFormValues] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodation: "",
  });

  const { colors, shadow } = useTheme();

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };
  const now = moment().format("DD-MM-YYYY");

  return (
    <form onSubmit={handleSubmit}>
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
        <SelectField
          onChange={handleChange}
          selectOptions={locations}
          value={formValues.location || locations[0]}
          label={"Where are you going?"}
          name={"location"}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
              </InputAdornment>
            ),
          }}
        />

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
        <InputField
          onChange={handleChange}
          value={formValues.guests || ""}
          label={"How many people?"}
          name={"guests"}
          type={"number"}
          min={1}
          max={100}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Profile />
              </InputAdornment>
            ),
          }}
        />
        <SelectField
          onChange={handleChange}
          selectOptions={accommodationTypes}
          value={formValues.accommodation || accommodationTypes[0]}
          label={"Where are you going?"}
          name={"accommodation"}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant={"contained"}
          type={"submit"}
          sx={{
            background: colors.mint,
            color: colors.white,
            maxWidth: "9.25rem",
            height: "3.5rem",
          }}
        >
          {searchLabel}
        </Button>
      </Stack>
    </form>
  );
};
