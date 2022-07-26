import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

type PlaceCardProps = {
  title: string;
  location: string;
  subtitle: string;
};

export const PlaceCard = ({
  title,
  location,
  subtitle,
}: PlaceCardProps): JSX.Element => {
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
          {title}
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
          {location}
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
          {subtitle}
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
