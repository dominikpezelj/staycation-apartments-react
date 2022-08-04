import { Box } from "@mui/system";
import ProfileImage from "../../assets/images/profile.svg";

export const Profile = () => (
  <Box
    sx={{
      backgroundImage: `url(${ProfileImage})`,
      width: "16px",
      height: "16px",
    }}
  />
);
