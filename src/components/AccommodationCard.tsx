import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Rating } from "./Rating";

type AccommodationCardProps = {
  title: string;
  location: string;
  price: number;
  categorization: number;
};

export const AccommodationCard = ({
  title,
  location,
  price,
  categorization,
}: AccommodationCardProps): JSX.Element => {
  const { colors } = useTheme();

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
            EUR {price}
          </Typography>
          <Rating categorization={categorization} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
