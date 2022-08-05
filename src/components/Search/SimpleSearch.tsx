import { useState } from "react";
import { Stack, Grid, Box } from "@mui/material";
import { LocationInput } from "../InputFields";
import { SearchButton } from "../SearchButton";
export const SimpleSearch = () => {
  const [location, setLocation] = useState("");
  const getData = () => {
    const accommodationSearchSubmit = {
      location: location,
    };
    console.log(accommodationSearchSubmit);
  };

  const getLocationData = (locationInput: string) => {
    setLocation(locationInput);
  };
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={8}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <LocationInput getLocation={getLocationData} />
          </Box>
          <SearchButton onSubmitSearch={getData} />
        </Stack>
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
};
