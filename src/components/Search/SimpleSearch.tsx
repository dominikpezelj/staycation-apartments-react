import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Grid, Box, Button } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
//DATA
import { searchLabel } from "../../common/constants";
import { locations } from "../../common/data";
//ICONS
import { Car } from "../Icons/Car";

import { SelectField } from "../Form/SelectField";

export const SimpleSearch = () => {
  const { colors } = useTheme();

  const [formValues, setFormValues] = useState({
    location: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box sx={{ flex: 1 }}>
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
            </Box>
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
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </form>
  );
};
