import { Box } from "@mui/system";
import CalendarImage from "../../assets/images/input-calendar.svg";

export const InputCalendar = () => (
  <Box
    sx={{
      backgroundImage: `url(${CalendarImage})`,
      width: "20px",
      height: "22px",
    }}
  />
);
