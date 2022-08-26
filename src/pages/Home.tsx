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
import { Link } from "react-router-dom";
import axios from "axios";

const PopularLocations = "https://devcademy.herokuapp.com/api/Location";
const HomesGuestsLove =
  "https://devcademy.herokuapp.com/api/Accomodations/recommendation";

type HomeProps = {
  setSearchData: Function;
  setRecomendationId: Function;
  setSearchResult: Function;
};

export const Home = ({
  setSearchData,
  setRecomendationId,
  setSearchResult,
}: HomeProps) => {
  const { colors } = useTheme();

  const [mostPopularLocations, setMostPopularLocations] = useState<any[]>([]);
  const [popularLocations, setPopularLocations] = useState<any[]>([]);
  const [popularAccommodations, setPopularAccommodations] = useState<any[]>([]);
  const [selectOptions, setSelectOptions] = useState<any>();
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    const getLocationData = async () => {
      const { data, status } = await axios.get(PopularLocations);
      if (status === 200) {
        if (data) {
          const sorted = data.sort(
            (first: any, second: any) =>
              0 - (first.properties > second.properties ? -1 : 1)
          );
          const locations = sorted.slice(sorted.length - 5, undefined);

          const mostPopularLocations = locations
            .slice(locations.length - 2, undefined)
            .reverse();

          const popularLocations = locations
            .slice(locations.length - 5, locations.length - 2)
            .reverse();

          setMostPopularLocations(mostPopularLocations);
          setPopularLocations(popularLocations);
          setSelectOptions(data);
        } else return;
      } else return;
    };

    const getHomes = async () => {
      const { data, status } = await axios.get(HomesGuestsLove);
      if (status === 200 && data) setPopularAccommodations(data);
      else return;
    };

    getHomes();
    getLocationData();
  }, [selectedValue]);

  if (!selectOptions) return null;

  const result = selectOptions.map(({ id, name }: any) => ({
    type: id,
    value: name,
  }));

  return (
    <div>
      <Navigation />
      <Header />
      <AccommodationSearch
        setSearchData={setSearchData}
        setSelectedId={setSelectedValue}
        setSearchResult={setSearchResult}
        data={result}
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
          <Link to={"locations"} style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: colors.mint, fontSize: "15px", fontWeight: "500" }}
              endIcon={<ArrowRight />}
            >
              View all locations
            </Button>
          </Link>
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
          <Link to={"favorites"} style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: colors.mint, fontSize: "15px", fontWeight: "500" }}
              endIcon={<ArrowRight />}
            >
              View all homes
            </Button>
          </Link>
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
