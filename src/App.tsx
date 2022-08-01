import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
