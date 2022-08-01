import { Box } from "@mui/system";
import StarImage from "../assets/images/star.svg";

const stars = {
  backgroundImage: `url(${StarImage})`,
  width: "20px",
  height: "19px",
};

export const Star = () => <Box style={stars} />;
