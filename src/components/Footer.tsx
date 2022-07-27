import { useTheme } from "@mui/material/styles";

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
    <div style={FooterStyle}>
      <div style={FooterTitle}>Staycation</div>
    </div>
  );
};
