import { Container } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { AdvancedSearch } from "../components/Search/AdvancedSearch";

type FavoritesProps = {
  setComponent: Function;
};

export const Favorites = ({ setComponent }: FavoritesProps) => {
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
        <AdvancedSearch />
      </Container>
    </div>
  );
};
