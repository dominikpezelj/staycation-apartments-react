import { useState, useEffect } from "react";
import { Typography, Box, Container, Grid, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { CityCard } from "../components/Cards/CityCard";
import { AccommodationCard } from "../components/Cards/AccommodationCard";
import { AccommodationSearch } from "../components/Search/AccommodationSearch";
import { ArrowRight } from "../components/Icons/ArrowRight";

import axios from "axios";

const PopularLocations = "https://devcademy.herokuapp.com/api/Location";
const HomesGuestsLove =
  "https://devcademy.herokuapp.com/api/Accomodations/recommendation";

type HomeProps = {
  setComponent: Function;
  setSearchData: Function;
  setRecomendationId: Function;
};

export const Home = ({
  setComponent,
  setSearchData,
  setRecomendationId,
}: HomeProps) => {
  const { colors } = useTheme();

  const [mostPopularLocations, setMostPopularLocations] = useState<any[]>([]);
  const [popularLocations, setPopularLocations] = useState<any[]>([]);
  const [popularAccommodations, setPopularAccommodations] = useState<any[]>([]);
  useEffect(() => {
    const getLocationData = async () => {
      const { data, status } = await axios.get(PopularLocations);
      console.log(status);
      if (status === 200) {
        let sorted = await data.sort(
          (first: any, second: any) =>
            0 - (first.properties > second.properties ? -1 : 1)
        );
        let locations = await sorted.slice(sorted.length - 5, undefined);

        let mostPopularLocations = await locations
          .slice(locations.length - 2, undefined)
          .reverse();

        let popularLocations = await locations
          .slice(locations.length - 5, locations.length - 2)
          .reverse();
        if (data) {
          setMostPopularLocations(mostPopularLocations);
          setPopularLocations(popularLocations);
        }
      } else return;
    };

    const getHomes = async () => {
      const { data, status } = await axios.get(HomesGuestsLove);
      if (status === 200 && data) setPopularAccommodations(data);
      else return;
    };

    getHomes();
    getLocationData();
  }, []);
  console.log(mostPopularLocations);
  console.log(popularLocations);
  console.log(popularAccommodations);
  return (
    <div>
      <Navigation setComponent={setComponent} />
      <Header />
      <AccommodationSearch
        setComponent={setComponent}
        setSearchData={setSearchData}
      />
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

        {/* Stack flex-wrap 
        justify-content: space-between*/}
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {mostPopularLocations.map((item: any) => (
              <Box sx={{ flex: 1 }} key={item.id}>
                <CityCard
                  key={item.id}
                  city={item?.name}
                  count={item.properties}
                  imgUrl={item.imageUrl}
                  maxHeight={300}
                  minHeight={300}
                />
              </Box>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {popularLocations.map((item) => (
              <Box sx={{ flex: 1 }} key={item.id}>
                <CityCard
                  key={item.id}
                  city={item?.name}
                  count={item.properties}
                  imgUrl={item.imageUrl}
                  maxHeight={300}
                  minHeight={300}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
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
          {popularAccommodations.map((item) => (
            <Grid item key={item.id}>
              <AccommodationCard
                setComponent={setComponent}
                setRecomendationId={setRecomendationId}
                id={item.id}
                title={item.title}
                location={item?.location?.name}
                price={item.price}
                categorization={item.categorization}
                imgUrl={
                  item.imageUrl === "" ? item.location.imageUrl : item.imageUrl
                }
                key={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};
