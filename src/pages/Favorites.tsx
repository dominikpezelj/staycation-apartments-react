import { Container } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { AdvancedSearch } from "../components/Search/AdvancedSearch";

type FavoritesProps = {
  searchResult: any[];
  setSearchResult: Function;
};

export const Favorites = ({
  searchResult,
  setSearchResult,
}: FavoritesProps) => {
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
        <AdvancedSearch
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </Container>
    </div>
  );
};
