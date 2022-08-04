import { Box } from "@mui/system";
import CalendarImage from "../../assets/images/calendar.svg";

export const Calendar = () => (
  <Box
    sx={{
      backgroundImage: `url(${CalendarImage})`,
      width: "20px",
      height: "22px",
    }}
  />
);
