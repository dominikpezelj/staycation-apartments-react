import { useState, useEffect } from "react";
import { Typography, Grid, Stack, Button, Box, Paper } from "@mui/material";
import Calendar from "../assets/images/calendar.svg";
import { useTheme } from "@mui/material/styles";
import { Rating } from "../components/Rating";
import { Navigation } from "../components/Navigation";
import axios from "axios";

type dataProps = {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  capacity: number;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: {
    name: string;
    imageUri: string;
    postalCode: number;
    properties: number;
  };
};

type AccommodationDetailsProps = {
  id: string;
  setComponent: Function;
  setBookStayData: Function;
};

export const AccommodationDetails = ({
  id,
  setComponent,
  setBookStayData,
}: AccommodationDetailsProps) => {
  const { colors, shadow } = useTheme();

  const [accommodation, setAccommodation] = useState();

  useEffect(() => {
    const axiosGet = "https://devcademy.herokuapp.com/api/Accomodations/" + id;
    const getAccommodationById = async () => {
      const { data, status } = await axios.get(axiosGet);

      setAccommodation(data);
    };

    getAccommodationById();
  }, []);

  if (!accommodation) return null;

  const {
    title,
    subtitle,
    description,
    type,
    capacity,
    categorization,
    personCount,
    imageUrl,
    freeCancelation,
    price,
  }: dataProps = accommodation;

  const {
    location: { name, postalCode },
  }: dataProps = accommodation;

  const cancelation = freeCancelation
    ? "Free cancellation available"
    : "Free cancellation is not available";

  return (
    <div>
      <Navigation setComponent={setComponent} />

      <Box sx={{ paddingLeft: "7.5rem", paddingRight: "7.5rem" }}>
        <img
          src={imageUrl}
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "4rem",
            width: "100%",
            height: "478px",
            flex: 1,
            borderRadius: "20px",
          }}
        ></img>
        <Grid container spacing={4} sx={{ marginTop: "0.5rem" }}>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "34px",
                  color: colors.textBlack,
                }}
              >
                {title}
              </Typography>
              <Rating categorization={categorization} />
            </Stack>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                color: colors.gray500,
                marginTop: "1rem",
              }}
            >
              {subtitle}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ marginTop: "3rem", marginBottom: "3rem" }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${Calendar})`,
                  width: "23.33px",
                  height: "25.67px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  fontSize: "16px",
                  color: colors.textMenuItems,
                  alignItems: "center",
                }}
              >
                {cancelation}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                color: colors.textMenuItems,
                alignItems: "center",
                maxWidth: "810px",
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Paper
              sx={{
                padding: "1.5rem",
                backgroundColor: colors.mint50,
                boxShadow: shadow.main,
                borderRadius: "10px",
                height: "18rem",
                width: "15.625rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: colors.textBlack,
                  marginBottom: "1rem",
                }}
              >
                Property Info
              </Typography>
              <Stack
                spacing={1}
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: colors.textMenuItems,
                  marginBottom: "3rem",
                }}
              >
                <Typography>{capacity} guests</Typography>
                <Typography>{type}</Typography>
                <Typography>EUR {price} per night</Typography>
                <Typography>{name}</Typography>
                <Typography>{postalCode}</Typography>
              </Stack>
              <Button
                onClick={function () {
                  setComponent("reservation");
                  setBookStayData(accommodation);
                }}
                variant="contained"
                sx={{
                  backgroundColor: colors.mint,
                  width: "100%",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "26px",
                }}
              >
                Book your stay
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
