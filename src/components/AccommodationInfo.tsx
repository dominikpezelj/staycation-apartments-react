import { Typography, Grid, Stack, Button, Box, Paper } from "@mui/material";
import HeaderImage from "../assets/images/accommodation-info.jpg";
import Star from "../assets/images/Vector.svg";
import Calendar from "../assets/images/calendar.svg";
import { useTheme } from "@mui/material/styles";

export const AccommodationInfo: React.FC<{
  title: string;
  subtitle: string;
  type: string;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: string;
  postalCode: string;
}> = (props) => {
  const { colors, shadow } = useTheme();

  const BackgroundStyle = {
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "4rem",
    width: "100%",
    height: "478px",
    flex: 1,
    borderRadius: "20px",
  };

  const stars = {
    backgroundImage: `url(${Star})`,
    width: "20px",
    height: "19px",
  };
  const calendarIcon = {
    backgroundImage: `url(${Calendar})`,
    width: "23.33px",
    height: "25.67px",
  };
  const container = {
    padding: "1rem",
  };

  const cancelation = props.freeCancelation
    ? "Free cancellation available"
    : "Free cancellation is not available";
  return (
    <Box style={container}>
      <img style={BackgroundStyle}></img>
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
              {props.title}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Box style={stars}></Box>
              <Box style={stars}></Box>
              <Box style={stars}></Box>
              <Box style={stars}></Box>
              <Box style={stars}></Box>
            </Stack>
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
            {props.subtitle}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <Box style={calendarIcon}></Box>
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
            This property is 3 minutes walk from the beach. Overlooking Mykonos
            Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos
            Beach. The 3-star hotel offers a freshwater pool, and bright rooms
            with air conditioning and fan. Each of the Cycladic rooms opens to a
            private balcony with across to Mykonos Town, the sea and Delos. A
            fridge, satellite TV and safe are standard. Free two-way transfer
            from the airport or port is offered. Poseidon provides free Wi-Fi in
            public areas, and on-site parking is also free. Guests can hire
            Poseidon’s motor yacht and discover the magnificent beaches of
            Mykonos. At the breakfast room and its cool patio, guests can taste
            homemade local delicacies, fresh fruit and good quality coffee. The
            Alley Bay serves exclusive cocktails, a few steps from the Poseidon.
            The Poseidon is just 200 m from the famous Mykonos Windmills. Right
            next to the hotel, guests will find small sandy coves and a pathway
            that leads to the picturesque chapel of Agios Charalambis. This is
            our guests' favourite part of Mýkonos City, according to independent
            reviews. Couples particularly like the location — they rated it 9.6
            for a two-person trip.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
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
              <Typography>{props.personCount} guests</Typography>
              <Typography>{props.type}</Typography>
              <Typography>EUR {props.price} per night</Typography>
              <Typography>{props.location}</Typography>
              <Typography>{props.postalCode}</Typography>
            </Stack>
            <Button
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
  );
};
