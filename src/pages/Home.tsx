import { Typography, Box, Container, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Header,
  Navigation,
  Footer,
  CityCard,
  AccommodationCard,
  AccommodationSearch,
} from "../components";
import { ArrowRight } from "../components/Icons/ArrowRight";
import { cityCardData, accommodationCardData } from "../common/data";

type HomeProps = {
  setComponent: Function;
};

export const Home = ({ setComponent }: HomeProps) => {
  const { colors } = useTheme();
  return (
    <div>
      <Navigation setComponent={setComponent} />
      <Header />
      <AccommodationSearch />
      <Container
        maxWidth={"xl"}
        sx={{
          marginTop: "7rem",
          marginBottom: "3rem",
          paddingLeft: "7.5rem",
          paddingRight: "7.5rem",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
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
            Popular locations
          </Typography>

          <Button
            onClick={() => setComponent("locations")}
            sx={{ color: colors.mint, fontSize: "15px", fontWeight: "500" }}
            endIcon={<ArrowRight />}
          >
            View all locations
          </Button>
        </Box>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid item sx={{ flex: 1 }} xs={1}>
            <CityCard
              city={cityCardData[0].name}
              count={cityCardData[0].count}
              imgUrl={cityCardData[0].imgUrl}
            />
          </Grid>
          <Grid item sx={{ flex: 1 }} xs={1}>
            <CityCard
              city={cityCardData[1].name}
              count={cityCardData[1].count}
              imgUrl={cityCardData[1].imgUrl}
            />
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <Grid item sx={{ flex: 1 }} xs={1}>
            <CityCard
              city={cityCardData[2].name}
              count={cityCardData[2].count}
              imgUrl={cityCardData[2].imgUrl}
            />
          </Grid>
          <Grid item sx={{ flex: 1 }} xs={1}>
            <CityCard
              city={cityCardData[3].name}
              count={cityCardData[3].count}
              imgUrl={cityCardData[3].imgUrl}
            />
          </Grid>
          <Grid item sx={{ flex: 1 }} xs={1}>
            <CityCard
              city={cityCardData[4].name}
              count={cityCardData[4].count}
              imgUrl={cityCardData[4].imgUrl}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={"xl"}
        sx={{
          marginTop: "7rem",
          marginBottom: "3rem",
        }}
      >
        <Box
          sx={{
            marginTop: "6rem",
            marginBottom: "3rem",
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
          <Button
            onClick={() => setComponent("favorites")}
            sx={{ color: colors.mint, fontSize: "15px", fontWeight: "500" }}
            endIcon={<ArrowRight />}
          >
            View all homes
          </Button>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{
            marginBottom: "5rem",
          }}
        >
          <Grid item>
            <AccommodationCard
              setComponent={setComponent}
              title={accommodationCardData[0].title}
              location={accommodationCardData[0].location}
              price={accommodationCardData[0].price}
              categorization={accommodationCardData[0].categorization}
              imgUrl={accommodationCardData[0].imgUrl}
            />
          </Grid>
          <Grid item>
            <AccommodationCard
              setComponent={setComponent}
              title={accommodationCardData[1].title}
              location={accommodationCardData[1].location}
              price={accommodationCardData[1].price}
              categorization={accommodationCardData[1].categorization}
              imgUrl={accommodationCardData[1].imgUrl}
            />
          </Grid>
          <Grid item>
            <AccommodationCard
              setComponent={setComponent}
              title={accommodationCardData[2].title}
              location={accommodationCardData[2].location}
              price={accommodationCardData[2].price}
              categorization={accommodationCardData[2].categorization}
              imgUrl={accommodationCardData[2].imgUrl}
            />
          </Grid>
          <Grid item>
            <AccommodationCard
              setComponent={setComponent}
              title={accommodationCardData[3].title}
              location={accommodationCardData[3].location}
              price={accommodationCardData[3].price}
              categorization={accommodationCardData[3].categorization}
              imgUrl={accommodationCardData[3].imgUrl}
            />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};
