import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
type PlaceCardProps = {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  imgUrl: string;
  setPlaceId: Function;
  handleOpen: Function;
};

export const PlaceCard = ({
  id,
  title,
  location,
  subtitle,
  imgUrl,
  setPlaceId,
  handleOpen,
}: PlaceCardProps): JSX.Element => {
  const { colors } = useTheme();

  const handleDelete = () => {
    setPlaceId(id);
    handleOpen(true);
  };

  const handleEdit = () => {
    setPlaceId(id);
  };
  return (
    <Card sx={{ maxWidth: "18.5625rem", boxShadow: "0" }}>
      <CardMedia
        sx={{
          borderRadius: "12px",
          width: "18.5625rem",
          height: "16.625rem",
          maxWidth: "18.5625rem",
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
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/edit-accommodation"} style={{ textDecoration: "none" }}>
          <Button
            size="small"
            sx={{ color: colors.mint, fontWeight: "500", fontSize: "14px" }}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </Link>
        <Button
          size="small"
          sx={{ color: colors.errorRed, fontWeight: "500", fontSize: "14px" }}
          onClick={handleDelete}
        >
          Delete place
        </Button>
      </CardActions>
    </Card>
  );
};
