import { Typography, Grid, Stack, Button, Box, Paper } from "@mui/material";
import HeaderImage from "../assets/images/accommodation-info.jpg";
import Calendar from "../assets/images/calendar.svg";
import { useTheme } from "@mui/material/styles";
import { Rating } from "../components/Rating";
import { Navigation } from "../components";

type dataProps = {
  title: string;
  subtitle: string;
  description: string;
  type: string;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: string;
  postalCode: string;
};

type AccommodationDetailsProps = {
  data: dataProps;
  setComponent: Function;
};

export const AccommodationDetails = ({
  data,
  setComponent,
}: AccommodationDetailsProps) => {
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

  const calendarIcon = {
    backgroundImage: `url(${Calendar})`,
    width: "23.33px",
    height: "25.67px",
  };
  const container = {
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
  };

  const cancelation = data.freeCancelation
    ? "Free cancellation available"
    : "Free cancellation is not available";

  return (
    <div>
      <Navigation setComponent={setComponent} />

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
                {data.title}
              </Typography>
              <Rating categorization={data.categorization} />
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
              {data.subtitle}
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
              {data.description}
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
                <Typography>{data.personCount} guests</Typography>
                <Typography>{data.type}</Typography>
                <Typography>EUR {data.price} per night</Typography>
                <Typography>{data.location}</Typography>
                <Typography>{data.postalCode}</Typography>
              </Stack>
              <Button
                onClick={() => setComponent("reservation")}
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
