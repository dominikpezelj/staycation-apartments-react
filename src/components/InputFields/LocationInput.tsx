import * as React from "react";
import Box from "@mui/material/Box";
//SELECT
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
//ICONS
import { Car } from "../Icons/Car";

const locations = [
  {
    value: "1",
    label: "London",
  },
  {
    value: "2",
    label: "Barcelona",
  },
  {
    value: "3",
    label: "Rome",
  },
  {
    value: "4",
    label: "Chicago",
  },
];

export const LocationInput = () => {
  //SELECT
  const [location, setLocation] = React.useState("1");

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
          label="Where are you going?"
          value={location}
          onChange={handleChange1}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
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
