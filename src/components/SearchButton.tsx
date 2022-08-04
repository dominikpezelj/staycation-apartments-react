import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const SearchButton = () => {
  const { colors, shadow } = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        background: colors.mint,
        color: colors.white,
        width: "9.25rem",
        height: "3.5rem",
      }}
    >
      Search
    </Button>
  );
};
