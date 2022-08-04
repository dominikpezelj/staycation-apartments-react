import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const BookStayButton = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: colors.mint,
        width: "100%",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "26px",
      }}
    >
      Book your stay
    </Button>
  );
};
