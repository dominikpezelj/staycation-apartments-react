import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Star from "../assets/images/Vector.svg";

export const AccommodationCard: React.FC<{
  title: string;
  location: string;
  price: number;
  categorization: number;
}> = (props) => {
  const { colors } = useTheme();
  const stars = {
    backgroundImage: `url(${Star})`,
    width: "20px",
    height: "19px",
  };

  return (
    <Card sx={{ maxWidth: "18.5625rem", boxShadow: "0" }}>
      <CardActionArea>
        <CardMedia
          sx={{
            borderRadius: "12px",
            width: "18.5625rem",
            height: "16.625rem",
          }}
          component="img"
          image="/accommodation-card.png"
          alt=""
        />
        <CardContent>
          <Typography
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "20px",
              color: colors.textBlack,
              marginBottom: "0.5rem",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "15px",
              color: colors.cardGray,
              marginBottom: "0.5rem",
            }}
          >
            {props.location}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "15px",
              color: colors.textMenuItems,
              marginBottom: "0.5rem",
            }}
          >
            EUR {props.price}
          </Typography>
          <Stack direction="row" spacing={1}>
            <div style={stars}></div>
            <div style={stars}></div>
            <div style={stars}></div>
            <div style={stars}></div>
            <div style={stars}></div>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
