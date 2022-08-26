import { Container, Box } from "@mui/material";
import { Navigation } from "../components/Navigation";

export const MyBookings = () => {
  return (
    <div>
      <Navigation />
      <Container
        maxWidth={"xl"}
        sx={{
          marginTop: "7rem",
          marginBottom: "3rem",
        }}
      >
        <h1>My Bookings</h1>
      </Container>
    </div>
  );
};
