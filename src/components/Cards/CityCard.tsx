import { useRef, SyntheticEvent, useState } from "react";
import { CSSProperties } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type CityCardProps = {
  city: string;
  count: number;
  imgUrl: string;
  maxHeight?: number;
  minHeight?: number;
};

export const CityCard = ({
  city,
  count,
  imgUrl,
  maxHeight,
  minHeight,
}: CityCardProps): JSX.Element => {
  const { colors } = useTheme();

  let formatCount = count?.toLocaleString();

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
          backgroundSize: "cover",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <img
          src={imgUrl}
          style={{
            width: "100%",
            zIndex: -1,
            position: "relative",
            display: "block",
            maxHeight: maxHeight,
            minHeight: minHeight,
            borderRadius: "12px",
          }}
          alt={city}
        />

        <Box
          sx={{
            position: "absolute",
            top: "0",
            marginLeft: "5%",
            marginTop: "1.25rem",
          }}
        >
          <Box
            sx={{
              fontFamily: "Roboto",
              fontWeight: "600",
              fontSize: "24px",
              color: colors.white,
            }}
          >
            {city}
          </Box>
          <Box
            sx={{
              paddingTop: "25px",
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "20px",
              color: colors.white,
            }}
          >
            {formatCount} properties
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
