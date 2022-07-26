import Stack from "@mui/material/Stack";
import HeaderImage from "../assets/images/header-bg.jpg";
import { useTheme } from "@mui/material/styles";

export const Header = () => {
  const { colors } = useTheme();

  const BackgroundStyle = {
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "4rem",
    width: "100%",
    height: "510px",
  };

  const BackgroundStyle2 = {
    background:
      "linear-gradient(90deg, #9C9C9C 0.88%, rgba(217, 217, 217, 0) 100.83%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "4rem",
    width: "100%",
    height: "510px",
    opacity: "0.7",
    filter: "blur(10px)",
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
    <div style={BackgroundStyle}>
      <div style={BackgroundStyle2}></div>
      <Stack
        spacing={2}
        sx={{
          paddingLeft: "7.5rem",
          position: "absolute",
          top: "0",
          marginTop: "9rem",
        }}
      >
        <div style={HeaderText1}>Enjoy your travels</div>
        <div style={HeaderText2}>with Staycation and collect rewards</div>
        <div style={HeaderText3}>Book now & save 10% or more today</div>
      </Stack>
    </div>
  );
};
