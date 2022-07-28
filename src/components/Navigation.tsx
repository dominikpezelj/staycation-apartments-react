import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Navigation = () => {
  const { colors, shadow } = useTheme();

  const appBarClass = {
    backgroundColor: colors.white,
    boxShadow: shadow.main,
    padding: "0px 76px",
  };

  const menuItems = [" Locations", "My Places", "My Bookings"];

  return (
    <AppBar style={appBarClass}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            color: colors.textBlack,
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Staycation
        </Typography>
        <Stack direction="row" spacing={1}>
          {menuItems.map((item) => (
            <MenuItem
              sx={{
                color: colors.textMenuItems,
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              <Typography
                textAlign="center"
                sx={{
                  textDecoration: "underline",
                  color: colors.textMenuItems,
                }}
              >
                {item}
              </Typography>
            </MenuItem>
          ))}
        </Stack>
        <Button
          sx={{
            color: colors.textMenuItems,
            fontFamily: "Roboto",
            fontSize: "14px",
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
