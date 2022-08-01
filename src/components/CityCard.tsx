import { CSSProperties } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardImage from "../assets/images/city-card.jpg";
import NewYork from "../assets/images/cities/newyork.jpg";
import Barcelona from "../assets/images/cities/barcelona.jpg";
import London from "../assets/images/cities/london.jpg";
import Rome from "../assets/images/cities/rome.jpg";
import Tokyo from "../assets/images/cities/tokyo.jpg";

type CityCardProps = { city: string; count: number; width: string };

export const CityCard = ({
  city,
  count,
  width,
}: CityCardProps): JSX.Element => {
  const { colors } = useTheme();

  const backgroundImage =
    city == "New York"
      ? NewYork
      : city == "Barcelona"
      ? Barcelona
      : city == "London"
      ? London
      : city == "Rome"
      ? Rome
      : city == "Tokyo"
      ? Tokyo
      : London;

  const CityCardBg: CSSProperties = {
    position: "relative",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    height: "295px",
    width: width == "md" ? "38.625rem" : "25.25rem",
    borderRadius: "12px",
  };
  const CityCardBg2 = {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    backgroundRepeat: "no-repeat",
    height: "295px",
    borderRadius: "12px",
    width: width == "md" ? "38.625rem" : "25.25rem",
  };

  const CityCardText: CSSProperties = {
    paddingTop: "1.25rem",
    paddingLeft: "0.8125rem",
    position: "absolute",
    top: "0",
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: "24px",
    color: colors.white,
    letterSpacing: "0.25px",
    lineHeight: "28px",
  };

  const CityCardTextSm: CSSProperties = {
    paddingTop: "3.5625rem",
    paddingLeft: "0.8125rem",
    position: "absolute",
    top: "0",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "20px",
    color: colors.white,
    letterSpacing: "0.25px",
    lineHeight: "24px",
  };

  let formatCount = count.toLocaleString();
  return (
    <Box style={CityCardBg}>
      <Box style={CityCardBg2}></Box>
      <Box style={CityCardText}>{city}</Box>
      <Box style={CityCardTextSm}>{formatCount} properties</Box>
    </Box>
  );
};
