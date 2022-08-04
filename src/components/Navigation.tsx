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

type NavigationProps = {
  setComponent: Function;
};

export const Navigation = ({ setComponent }: NavigationProps) => {
  const { colors, shadow } = useTheme();

  const appBarClass = {
    backgroundColor: colors.white,
    boxShadow: shadow.main,
    padding: "0px 76px",
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
            <MenuItem
              onClick={() =>
                setComponent(
                  item == "Locations"
                    ? "home"
                    : item == "My Places"
                    ? "myplaces"
                    : item == "My Bookings"
                    ? "mybookings"
                    : "mybookings"
                )
              }
              sx={{
                color: colors.textMenuItems,
                fontWeight: "400",
                fontSize: "16px",
              }}
              key={item}
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
