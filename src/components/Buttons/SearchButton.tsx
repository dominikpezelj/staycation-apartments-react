import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type searchButtonProps = {
  onSubmitSearch: Function;
};

export const SearchButton = ({ onSubmitSearch }: searchButtonProps) => {
  const { colors } = useTheme();

  const handleClick = () => {
    onSubmitSearch();
  };
  return (
    <Button
      variant="contained"
      sx={{
        background: colors.mint,
        color: colors.white,
        width: "9.25rem",
        height: "3.5rem",
      }}
      onClick={handleClick}
    >
      Search
    </Button>
  );
};
