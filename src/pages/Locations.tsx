import { Container } from "@mui/material";
import { Navigation, SimpleSearch } from "../components";

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
