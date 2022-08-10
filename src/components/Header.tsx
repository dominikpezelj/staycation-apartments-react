import { Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HeaderImage from "../assets/images/header-bg.jpg";

export const Header = () => {
  const { colors } = useTheme();

  const BackgroundStyle = {
    backgroundImage: `linear-gradient(90deg, #9C9C9C 0.88%, rgba(217, 217, 217, 0) 100.83%), url(${HeaderImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "4rem",
    width: "100%",
    height: "510px",
  };

  const HeaderText1 = {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "96px",
  };
  const HeaderText2 = {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "48px",
  };

  const HeaderText3 = {
    color: colors.textMenuItems,
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "32px",
  };

  return (
    <Box style={BackgroundStyle}>
      <Stack
        spacing={2}
        sx={{
          paddingLeft: "7.5rem",
          position: "absolute",
          top: "0",
          marginTop: "7rem",
        }}
      >
        <Typography style={HeaderText1}>Enjoy your travels</Typography>
        <Typography style={HeaderText2}>
          with Staycation and collect rewards
        </Typography>
        <Typography style={HeaderText3}>
          Book now & save 10% or more today
        </Typography>
      </Stack>
    </Box>
  );
};
