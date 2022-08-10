import { Box } from "@mui/system";
import StarImage from "../../assets/images/star.svg";

export const Star = () => (
  <Box
    sx={{
      backgroundImage: `url(${StarImage})`,
      width: "20px",
      height: "19px",
    }}
  />
);
