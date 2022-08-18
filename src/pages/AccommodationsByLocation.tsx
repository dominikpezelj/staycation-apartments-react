import { Container, Box, Typography, Grid } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { AdvancedSearch } from "../components/Search/AdvancedSearch";
import { AccommodationCard } from "../components/Cards/AccommodationCard";
import { useTheme } from "@mui/material/styles";
import { accommodationTestCard } from "../common/data";
type AccommodationByLocationProps = {
  setComponent: Function;
  location: string;
  properties: number;
};

export const AccommodationByLocation = ({
  setComponent,
  location,
  properties,
}: AccommodationByLocationProps) => {
  const { colors } = useTheme();
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
          2000 properties
        </Typography>
        <Box sx={{ marginY: "2.75rem" }}>
          <AdvancedSearch />
        </Box>

        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            marginBottom: "5rem",
          }}
        >
          <Grid item>
            <AccommodationCard
              setComponent={setComponent}
              title={accommodationTestCard.title}
              location={accommodationTestCard.location}
              price={accommodationTestCard.price}
              categorization={accommodationTestCard.categorization}
              imgUrl={accommodationTestCard.imgUrl}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
