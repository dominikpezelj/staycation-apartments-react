import { Container } from "@mui/material";
import { Navigation } from "../components/Navigation";

type MyPlacesProps = {
  setComponent: Function;
};

export const MyPlaces = ({ setComponent }: MyPlacesProps) => {
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
        <h1>My Places</h1>
      </Container>
    </div>
  );
};
