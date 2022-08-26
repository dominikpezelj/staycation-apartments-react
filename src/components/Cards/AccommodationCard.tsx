import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";
type AccommodationCardProps = {
  id: string;
  title: string;
  location: string;
  price: number;
  categorization: number;
  imgUrl: string;
  setRecomendationId: Function;
};

export const AccommodationCard = ({
  id,
  title,
  location,
  price,
  categorization,
  imgUrl,
  setRecomendationId,
}: AccommodationCardProps): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Link to={"/accommodations/" + id} style={{ textDecoration: "none" }}>
      <Card
        sx={{ maxWidth: "18.5625rem", boxShadow: "0" }}
        onClick={function () {
          setRecomendationId(id);
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              borderRadius: "12px",
              width: "18.5625rem",
              height: "16.625rem",
            }}
            component="img"
            image={imgUrl}
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
    </Link>
  );
};
