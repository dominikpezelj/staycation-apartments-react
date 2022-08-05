import React, { useState } from "react";
import Box from "@mui/material/Box";
//SELECT
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
//ICONS
import { Car } from "../Icons/Car";
//DATA
import { cityCardData } from "../../common/data";

type LocationInputProps = {
  getLocation: Function;
};

export const LocationInput = ({ getLocation }: LocationInputProps) => {
  //SELECT
  const [location, setLocation] = useState("London");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    getLocation(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          minWidth: "25ch",
        },
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
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%" }}
        >
          {cityCardData.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
