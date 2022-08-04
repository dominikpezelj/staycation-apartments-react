import * as React from "react";
import Box from "@mui/material/Box";

//INPUT
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//ICON
import { Profile } from "../Icons/Profile";

type State = {
  amount: string;
};

export const GuestNumberInput = () => {
  //INPUT
  const [values, setValues] = React.useState<State>({
    amount: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
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
            value={values.amount}
            onChange={handleChange("amount")}
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
