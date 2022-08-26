import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { appName, menuItems } from "../common/constants";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { colors, shadow } = useTheme();

  const appBarClass = {
    backgroundColor: colors.white,
    boxShadow: shadow.main,
    padding: "0px 76px",
  };

  const handleLogOut = () => {
    localStorage.clear();
  };
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
          {appName}
        </Typography>
        <Stack direction="row" spacing={1}>
          {menuItems.map((item) => (
            <Link
              key={item}
              to={
                item == "Locations"
                  ? "/"
                  : item == "My Places"
                  ? "/my-places"
                  : item == "My Bookings"
                  ? "/my-bookings"
                  : "/my-bookings"
              }
              style={{ textDecoration: "none" }}
            >
              <MenuItem
                sx={{
                  color: colors.textMenuItems,
                  fontWeight: "400",
                  fontSize: "16px",
                }}
                key={item}
              >
                <Typography
                  key={item}
                  textAlign="center"
                  sx={{
                    textDecoration: "underline",
                    color: colors.textMenuItems,
                  }}
                >
                  {!localStorage.getItem("userToken") ? "" : item}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Stack>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <Button
            onClick={handleLogOut}
            sx={{
              color: colors.textMenuItems,
              fontFamily: "Roboto",
              fontSize: "14px",
            }}
          >
            {!localStorage.getItem("userToken") ? "" : "Logout"}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
