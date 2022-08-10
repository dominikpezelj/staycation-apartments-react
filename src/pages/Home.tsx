import { Typography, Box, Container, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { CityCard } from "../components/Cards/CityCard";
import { AccommodationCard } from "../components/Cards/AccommodationCard";
import { AccommodationSearch } from "../components/Search/AccommodationSearch";

import { ArrowRight } from "../components/Icons/ArrowRight";
import { cityCardData, accommodationCardData } from "../common/data";

type HomeProps = {
  setComponent: Function;
};

export const Home = ({ setComponent }: HomeProps) => {
  const { colors } = useTheme();

  const mostPopularItems = cityCardData.slice(0, 2);
  const popularItems = cityCardData.slice(2, undefined);

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
          {mostPopularItems.map((item) => (
            <Grid item sx={{ flex: 1 }} xs={1} key={item.name}>
              <CityCard
                key={item.name}
                city={item.name}
                count={item.count}
                imgUrl={item.imgUrl}
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          {popularItems.map((item) => (
            <Grid item sx={{ flex: 1 }} xs={1} key={item.name}>
              <CityCard
                key={item.name}
                city={item.name}
                count={item.count}
                imgUrl={item.imgUrl}
              />
            </Grid>
          ))}
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
          {accommodationCardData.map((item) => (
            <Grid item key={item.title}>
              <AccommodationCard
                setComponent={setComponent}
                title={item.title}
                location={item.location}
                price={item.price}
                categorization={item.categorization}
                imgUrl={item.imgUrl}
                key={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};
