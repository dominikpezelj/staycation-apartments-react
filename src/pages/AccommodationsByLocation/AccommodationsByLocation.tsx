import { Container, Box, Typography, Grid } from "@mui/material";
import { Navigation } from "../../components/Navigation";
import { AdvancedSearch } from "../../components/Search/AdvancedSearch";
import { AccommodationCard } from "../../components/Cards/AccommodationCard";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "src/components/Footer";
import { AccommodationByLocationProps, AccommodationType } from "./Types";

const accommodationURL = "https://devcademy.herokuapp.com/api/Accomodations/";

export const AccommodationByLocation = ({
  setRecomendationId,
  setSearchResult,
  searchResult,
  location,
}: AccommodationByLocationProps) => {
  const { colors } = useTheme();
  const [accommodations, setAccommodations] = useState<AccommodationType[]>([]);
  console.log(searchResult);
  useEffect(() => {
    const getAccommodations = async () => {
      const response = await axios.get(accommodationURL);
      if (response.status === 200 && response.data) {
        setAccommodations(response.data);
      }
    };

    getAccommodations();
  }, []);
  if (!accommodations) return null;
  const result = accommodations.find((obj) => {
    return obj?.location?.name === location;
  });

  return (
    <div>
      <Navigation />
      <Container
        maxWidth={"xl"}
        sx={{
          marginTop: "7rem",
          marginBottom: "3rem",
        }}
      >
        <Typography
          sx={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "34px" }}
        >
          Stays in {location}
        </Typography>
        <Typography
          sx={{
            marginTop: "1rem",
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "16px",
            color: colors.gray500,
          }}
        >
          {result?.location?.properties + " properties"}
        </Typography>
        <Box sx={{ marginY: "2.75rem" }}>
          <AdvancedSearch
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
        </Box>

        {searchResult === undefined ? (
          "There is no accommodation at" + location
        ) : (
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
            {[searchResult].map((item: any) => (
              <Grid item key={item.id}>
                <AccommodationCard
                  setRecomendationId={setRecomendationId}
                  id={item.accomodation.id}
                  title={item.accomodation.title}
                  location={item.accomodation.location}
                  price={item.accomodation.price}
                  categorization={item.accomodation.categorization}
                  imgUrl={item.accomodation.imageUrl}
                  key={item.accomodation.id}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </div>
  );
};
