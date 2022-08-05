import React, { useState } from "react";
import Box from "@mui/material/Box";

//INPUT
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//ICON
import { InputCalendar } from "../Icons/InputCalendar";

type CheckOutInputProps = {
  getCheckOut: Function;
};

export const CheckOutInput = ({ getCheckOut }: CheckOutInputProps) => {
  //INPUT
  const [checkOut, setCheckOut] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value);
    getCheckOut(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Check out</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={checkOut}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <InputCalendar />
              </InputAdornment>
            }
            label="Check out"
          />
        </FormControl>
      </div>
    </Box>
  );
};
