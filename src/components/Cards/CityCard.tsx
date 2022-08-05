import { CSSProperties } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type CityCardProps = { city: string; count: number; imgUrl: string };

export const CityCard = ({
  city,
  count,
  imgUrl,
}: CityCardProps): JSX.Element => {
  const { colors } = useTheme();

  const CityCardBg: CSSProperties = {
    position: "relative",
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%), url(${imgUrl})`,
    backgroundRepeat: "no-repeat",
    marginRight: "20px",
    height: "295px",
    borderRadius: "12px",
  };

  const CityCardText: CSSProperties = {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: "24px",
    color: colors.white,
    letterSpacing: "0.25px",
    lineHeight: "28px",
  };

  const CityCardTextSm: CSSProperties = {
    paddingTop: "8px",
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
      <Box
        sx={{
          position: "absolute",
          top: "0",
          marginLeft: "5%",
          marginTop: "1.25rem",
        }}
      >
        <Box style={CityCardText}>{city}</Box>
        <Box style={CityCardTextSm}>{formatCount} properties</Box>
      </Box>
    </Box>
  );
};
