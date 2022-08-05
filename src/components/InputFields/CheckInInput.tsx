import React, { useState } from "react";
import Box from "@mui/material/Box";

//INPUT
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//ICON
import { InputCalendar } from "../Icons/InputCalendar";

type CheckInInputProps = {
  getCheckIn: Function;
};

export const CheckInInput = ({ getCheckIn }: CheckInInputProps) => {
  const [checkIn, setCheckIn] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(event.target.value);
    getCheckIn(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Check in</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={checkIn}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <InputCalendar />
              </InputAdornment>
            }
            label="Check in"
          />
        </FormControl>
      </div>
    </Box>
  );
};
