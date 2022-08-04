import { Box } from "@mui/system";
import BedImage from "../../assets/images/bed.svg";

export const Bed = () => (
  <Box
    sx={{
      backgroundImage: `url(${BedImage})`,
      width: "22px",
      height: "15px",
    }}
  />
);
