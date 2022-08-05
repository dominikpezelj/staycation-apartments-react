import React, { useState } from "react";
import Box from "@mui/material/Box";

//INPUT
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//ICON
import { Profile } from "../Icons/Profile";

type GuestNumberInputProps = {
  getGuestNumber: Function;
};

export const GuestNumberInput = ({ getGuestNumber }: GuestNumberInputProps) => {
  //INPUT
  const [guestNumber, setGuestNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestNumber(event.target.value);
    getGuestNumber(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            How many people?
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={guestNumber}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Profile />
              </InputAdornment>
            }
            label="How many people?"
          />
        </FormControl>
      </div>
    </Box>
  );
};
