import React, { useState } from "react";
import Box from "@mui/material/Box";
//SELECT
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
//ICONS
import { Bed } from "../Icons/Bed";
//DATA
import { accommodationTypes } from "../../common/data";

type AccommodationTypeInputProps = {
  getAccommodationType: Function;
};

export const AccommodationTypeInput = ({
  getAccommodationType,
}: AccommodationTypeInputProps) => {
  const [accommodationType, setAccommodationType] = useState("Room");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccommodationType(event.target.value);
    getAccommodationType(event.target.value);
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
          value={accommodationType}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Bed />
              </InputAdornment>
            ),
          }}
        >
          {accommodationTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
