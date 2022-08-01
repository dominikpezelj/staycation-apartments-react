import { appName } from "../common/constants";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Footer = () => {
  const { colors } = useTheme();
  const FooterStyle = {
    backgroundColor: colors.textMenuItems,
    width: "100%",
    height: "5.375rem",
    display: "flex",
    bottom: "0",
  };

  const FooterTitle = {
    color: colors.white,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "24px",
    paddingLeft: "7.5rem",
    alignItems: "center",
    display: "flex",
  };
  return (
    <Box style={FooterStyle}>
      <Box style={FooterTitle}>{appName}</Box>
    </Box>
  );
};
