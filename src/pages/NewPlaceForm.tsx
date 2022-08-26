import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  FormHelperText,
} from "@mui/material";
import { Navigation } from "../components/Navigation";
import { useTheme } from "@mui/material/styles";

import { InputField } from "../components/Form/InputField";
import { SelectField } from "../components/Form/SelectField";

import { accommodationTypes } from "../common/data";
import { RatingField } from "src/components/Form/RatingField";
import { SwitchField } from "src/components/Form/SwitchField";

import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";

const postAccommodation = "https://devcademy.herokuapp.com/api/Accomodations";

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
    cancelation: true,
  });
  const [errMessages, setErrMessages] = useState({
    listingName: true,
    categorization: true,
    price: true,
    location: true,
  });

  const [isTouched, setIsTouched] = useState({
    listingName: false,
    categorization: false,
    price: false,
    location: false,
  });

  const handleChange = (name: string, value: FormInputValue) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched((values) => ({ ...values, [event.target.name]: true }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formValues.listingName &&
      formValues.categorization &&
      formValues.price &&
      formValues.location
    ) {
      try {
        let response = await axios.post(postAccommodation, {
          title: formValues.listingName,
          subtitle: "null",
          description: formValues.longDesc,
          shortDescription: formValues.shortDesc,
          type:
            formValues.accommodation === "Mobile home"
              ? "MobileHome"
              : formValues.accommodation,
          categorization: formValues.categorization,
          personCount: Number(formValues.capacity),
          imageUrl: formValues.listingImage,
          freeCancelation: formValues.cancelation,
          price: Number(formValues.price),
          location: {
            name: formValues.location,
            postalCode: Number(formValues.postalCode),
            properties: 0,
            imageUrl: "null",
          },
          capacity: Number(formValues.capacity),
        });
      } catch (error: any) {}
    } else return;
  };

  useEffect(() => {
    Object.entries(formValues).map(([key, value]) => {
      if (value === "" || value === null)
        setErrMessages((values) => ({ ...values, [key]: true }));
      else setErrMessages((values) => ({ ...values, [key]: false }));
    });
  }, [formValues]);
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
                onBlur={handleBlur}
                value={formValues.listingName}
                label={"Listing name"}
                name={"listingName"}
                type={"text"}
                maxLength={100}
                error={errMessages.listingName && isTouched.listingName}
                helperText={
                  errMessages.listingName && isTouched.listingName
                    ? "Please enter listing name"
                    : " "
                }
              />
              <InputField
                onChange={handleChange}
                value={formValues.shortDesc}
                label={"Short description"}
                name={"shortDesc"}
                type={"text"}
                maxLength={200}
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
                    onBlur={handleBlur}
                  />
                </Box>
              </Box>

              <FormHelperText error sx={{ paddingLeft: "14px" }}>
                {isTouched.categorization && errMessages.categorization
                  ? "Please select categorization"
                  : " "}
              </FormHelperText>
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
                onBlur={handleBlur}
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
                error={errMessages.price && isTouched.price}
                helperText={
                  errMessages.price && isTouched.price
                    ? "Please enter price"
                    : " "
                }
              />

              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValues.location}
                label={"Location"}
                name={"location"}
                type={"text"}
                maxLength={150}
                error={errMessages.location && isTouched.location}
                helperText={
                  errMessages.location && isTouched.location
                    ? "Please enter location"
                    : " "
                }
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
