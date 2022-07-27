import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export const PlaceCard: React.FC<{
  title: string;
  location: string;
  subtitle: string;
}> = (props) => {
  const { colors } = useTheme();
  return (
    <Card sx={{ maxWidth: "18.5625rem", boxShadow: "0" }}>
      <CardMedia
        sx={{
          borderRadius: "12px",
          width: "18.5625rem",
          height: "16.625rem",
        }}
        component="img"
        image="/place-card.jpg"
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
          {props.subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: colors.mint, fontWeight: "500", fontSize: "14px" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          sx={{ color: colors.errorRed, fontWeight: "500", fontSize: "14px" }}
        >
          Delete place
        </Button>
      </CardActions>
    </Card>
  );
};
