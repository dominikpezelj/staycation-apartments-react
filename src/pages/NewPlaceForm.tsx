import { useState } from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { useTheme } from "@mui/material/styles";

import { InputField } from "../components/Form/InputField";
import { SelectField } from "../components/Form/SelectField";

import { accommodationTypes } from "../common/data";
import { RatingField } from "src/components/Form/RatingField";
import { SwitchField } from "src/components/Form/SwitchField";

import InputAdornment from "@mui/material/InputAdornment";

type NewPlaceFormProps = {
  setComponent: Function;
};

type FormInputValue = string | number | boolean | null;

export const NewPlaceForm = ({ setComponent }: NewPlaceFormProps) => {
  const { colors } = useTheme();

  const [formValues, setFormValues] = useState({
    listingName: "",
    shortDesc: "",
    longDesc: "",
    categorization: "",
    accommodation: "",
    capacity: "",
    price: "",
    listingImage: "",
    postalCode: "",
    location: "",
    cancelation: false,
  });

  const handleChange = (name: string, value: FormInputValue) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <Navigation setComponent={setComponent} />
      <Container
        maxWidth={"xl"}
        sx={{
          marginTop: "7rem",
          marginBottom: "3rem",
        }}
      >
        <Typography
          sx={{
            color: colors.textBlack,
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "34px",
          }}
        >
          Add new place
        </Typography>
        <Box sx={{ width: "40%", marginTop: "3rem" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <InputField
                onChange={handleChange}
                value={formValues.listingName}
                label={"Listing name"}
                name={"listingName"}
                type={"text"}
              />
              <InputField
                onChange={handleChange}
                value={formValues.shortDesc}
                label={"Short description"}
                name={"shortDesc"}
                type={"text"}
              />
              <InputField
                onChange={handleChange}
                value={formValues.longDesc}
                label={"Long description"}
                name={"longDesc"}
                type={"text"}
                rows={4}
                multiline={true}
              />
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    color: colors.textBlack,
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  Categorization
                </Typography>
                <Box>
                  <RatingField
                    name={"categorization"}
                    value={formValues.categorization}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <SelectField
                onChange={handleChange}
                selectOptions={accommodationTypes}
                value={formValues.accommodation || accommodationTypes[0].value}
                label={"Accommodation type"}
                name={"accommodation"}
              />

              <InputField
                onChange={handleChange}
                value={formValues.capacity}
                label={"Capacity"}
                name={"capacity"}
                type={"number"}
                min={1}
              />

              <InputField
                onChange={handleChange}
                value={formValues.price}
                label={"Price"}
                name={"price"}
                type={"tel"}
                min={0}
                icon={{
                  startAdornment: (
                    <InputAdornment position="start">EUR</InputAdornment>
                  ),
                }}
              />
              <InputField
                onChange={handleChange}
                value={formValues.location}
                label={"Location"}
                name={"location"}
                type={"text"}
              />
              <InputField
                onChange={handleChange}
                value={formValues.postalCode}
                label={"Postal code"}
                name={"postalCode"}
                type={"text"}
              />
              <InputField
                onChange={handleChange}
                value={formValues.listingImage}
                label={"Listing image URL"}
                name={"listingImage"}
                type={"text"}
              />
              <Box
                sx={{
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    color: colors.textBlack,
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  Free cancellation available
                </Typography>
                <Box>
                  <SwitchField
                    checked={formValues.cancelation}
                    name={"cancelation"}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Stack>
            <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: "3rem",
                  background: colors.mint,
                  paddingX: "32px",
                  color: colors.white,
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Add new place
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};
