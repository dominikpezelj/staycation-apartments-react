import { Box } from "@mui/system";
import CarImage from "../../assets/images/car.svg";

export const Car = () => (
  <Box
    sx={{
      backgroundImage: `url(${CarImage})`,
      width: "20px",
      height: "14px",
    }}
  />
);
