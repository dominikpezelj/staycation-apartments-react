import { Container } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { SimpleSearch } from "../components/Search/SimpleSearch";

type LocationsProps = {
  setComponent: Function;
};
export const Locations = ({ setComponent }: LocationsProps) => {
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
        <SimpleSearch />
      </Container>
    </div>
  );
};
