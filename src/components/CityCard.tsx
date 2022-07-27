import CardImage from "../assets/images/city-card.jpg";
import React from "react";
import { CSSProperties } from "react";
import { useTheme } from "@mui/material/styles";
export const CityCard: React.FC<{ city: string; count: string }> = (props) => {
  const { colors } = useTheme();

  const CityCardBg: CSSProperties = {
    position: "relative",
    backgroundImage: `url(${CardImage})`,
    backgroundRepeat: "no-repeat",
    height: "295px",
    width: "25.25rem",
    borderRadius: "12px",
  };
  const CityCardBg2 = {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    backgroundRepeat: "no-repeat",
    height: "295px",
    borderRadius: "12px",
    width: "25.25rem",
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

  let city = props.city;
  let count = Number(props.count).toLocaleString();
  return (
    <div style={CityCardBg}>
      <div style={CityCardBg2}></div>
      <div style={CityCardText}>{city}</div>
      <div style={CityCardTextSm}>{count} properties</div>
    </div>
  );
};
