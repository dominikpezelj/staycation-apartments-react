import { Container, Box, Typography, Button } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { useTheme } from "@mui/material/styles";
type MyPlacesProps = {
  setComponent: Function;
};

export const MyPlaces = ({ setComponent }: MyPlacesProps) => {
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
            My places
          </Typography>

          <Button
            variant="contained"
            onClick={() => setComponent("newplaceform")}
            sx={{
              background: colors.mint,
              paddingX: "32px",
              color: colors.white,
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Add new place
          </Button>
        </Box>
      </Container>
    </div>
  );
};
