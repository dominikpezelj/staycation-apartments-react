import * as React from "react";
import Box from "@mui/material/Box";
//SELECT
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
//ICONS

import { Bed } from "../Icons/Bed";

const locations = [
  {
    value: "1",
    label: "Room",
  },
  {
    value: "2",
    label: "Apartment",
  },
  {
    value: "3",
    label: "Mobile home",
  },
];

export const AccommodationTypeInput = () => {
  //SELECT
  const [location, setLocation] = React.useState("2");

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="What type of accommodation?"
          value={location}
          onChange={handleChange1}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Bed />
              </InputAdornment>
            ),
          }}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
