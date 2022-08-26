import {
  Box,
  Grid,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import loginImg from "../../assets/images/loginBg.jpg";
import { Navigation } from "src/components/Navigation";
import { useTheme } from "@mui/material/styles";
import { InputField } from "src/components/Form/InputField";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
type FormInputValue = string | number | boolean | null;
export const Login = () => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const loginEmail = "admin@admin.com";
  const loginPassword = "admin";

  const [checkboxState, setCheckboxState] = useState({
    loginCheckbox: false,
  });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
  });

  const [errMessages, setErrMessages] = useState({
    email: true,
    password: true,
  });
  const { loginCheckbox } = checkboxState;
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange = (name: string, value: FormInputValue) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched((values) => ({ ...values, [event.target.name]: true }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validateEmail = formValues.email === loginEmail ? true : false;
    const validatePassword =
      formValues.password === loginPassword ? true : false;
    const validateCheckbox = loginCheckbox === true ? true : false;

    if (validateEmail && validatePassword && validateCheckbox) {
      localStorage.setItem("userToken", "bnh5yzdirjinqaorq0ox1tf383nb3xr");
      navigate("/");
    } else alert("Login validation fails.");
  };

  useEffect(() => {
    Object.entries(formValues).map(([key, value]) => {
      if (value === "" || value === null)
        setErrMessages((values) => ({ ...values, [key]: true }));
      else setErrMessages((values) => ({ ...values, [key]: false }));
    });
  }, [formValues]);
  return (
    <Box>
      <Navigation />
      <img
        src={loginImg}
        style={{
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      ></img>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            position: "relative",
            background: "#fff",
            width: "30rem",
            height: "25rem",
            py: "1.5rem",
            px: "1rem",
          }}
        >
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: "24px", fontWeight: "400" }}
          >
            Login
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400",
              color: colors.gray500,
            }}
          >
            Get started for free
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ mt: "2rem" }}>
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValues.email}
                label={"Email"}
                name={"email"}
                type={"email"}
                error={errMessages.email && isTouched.email}
                helperText={
                  errMessages.email && isTouched.email
                    ? "Please enter email"
                    : " "
                }
              />
              <InputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValues.password}
                label={"Password"}
                name={"password"}
                type={"password"}
                error={errMessages.password && isTouched.password}
                helperText={
                  errMessages.password && isTouched.password
                    ? "Please enter password"
                    : " "
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={loginCheckbox}
                    onChange={handleCheckbox}
                    name="loginCheckbox"
                  />
                }
                label="I accept the Terms and Conditions"
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  flex: 1,
                  background: colors.mint,
                  color: colors.white,
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};
