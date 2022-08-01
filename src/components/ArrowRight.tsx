import { Box } from "@mui/system";
import ArrowImage from "../assets/images/arrow-right.svg";

const arrow = {
  backgroundImage: `url(${ArrowImage})`,
  width: "16px",
  height: "16px",
};
export const ArrowRight = () => <Box style={arrow} />;
