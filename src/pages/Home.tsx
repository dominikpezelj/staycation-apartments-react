import {
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Header,
  Navigation,
  Footer,
  CityCard,
  AccommodationCard,
} from "../components";
import { ArrowRight } from "../components/ArrowRight";
import { cityCardData, accommodationCardData } from "../common/data";

export const Home = () => {
  const { colors } = useTheme();

  return (
    <div>
      <Navigation />
      <Header />

      <Box
        sx={{
          marginTop: "10rem",
          marginBottom: "3rem",
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          justifyContent: "space-between",
          display: "flex",
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
          Popular locations
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            component="label"
            sx={{
              color: colors.mint,
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "15px",
              textTransform: "uppercase",
            }}
          >
            View all locations
            <input hidden />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden />
            <ArrowRight />
          </IconButton>
        </Stack>
      </Box>
      <Grid
        container
        spacing={1}
        columns={16}
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          marginBottom: "24px",
        }}
      >
        <Grid item>
          <CityCard
            city={cityCardData[0].name}
            count={cityCardData[0].count}
            width={"md"}
          />
        </Grid>
        <Grid item>
          <CityCard
            city={cityCardData[1].name}
            count={cityCardData[1].count}
            width={"md"}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
        }}
      >
        <Grid item>
          <CityCard
            city={cityCardData[2].name}
            count={cityCardData[2].count}
            width={""}
          />
        </Grid>
        <Grid item>
          <CityCard
            city={cityCardData[3].name}
            count={cityCardData[3].count}
            width={""}
          />
        </Grid>
        <Grid item>
          <CityCard
            city={cityCardData[4].name}
            count={cityCardData[4].count}
            width={""}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: "6rem",
          marginBottom: "3rem",
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          justifyContent: "space-between",
          display: "flex",
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
          Homes guests love
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            component="label"
            sx={{
              color: colors.mint,
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "15px",
              textTransform: "uppercase",
            }}
          >
            View all homes
            <input hidden />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden />
            <ArrowRight />
          </IconButton>
        </Stack>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
          marginBottom: "5rem",
        }}
      >
        <Grid item>
          <AccommodationCard
            title={accommodationCardData[0].title}
            location={accommodationCardData[0].location}
            price={accommodationCardData[0].price}
            categorization={accommodationCardData[0].categorization}
          />
        </Grid>
        <Grid item>
          <AccommodationCard
            title={accommodationCardData[1].title}
            location={accommodationCardData[1].location}
            price={accommodationCardData[1].price}
            categorization={accommodationCardData[1].categorization}
          />
        </Grid>
        <Grid item>
          <AccommodationCard
            title={accommodationCardData[2].title}
            location={accommodationCardData[2].location}
            price={accommodationCardData[2].price}
            categorization={accommodationCardData[2].categorization}
          />
        </Grid>
        <Grid item>
          <AccommodationCard
            title={accommodationCardData[3].title}
            location={accommodationCardData[3].location}
            price={accommodationCardData[3].price}
            categorization={accommodationCardData[3].categorization}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
