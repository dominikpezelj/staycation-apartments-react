import { Container } from "@mui/material";
import { Navigation } from "../components";

type MyBookingsProps = {
  setComponent: Function;
};

export const MyBookings = ({ setComponent }: MyBookingsProps) => {
  return (
    <div>
      <Navigation setComponent={setComponent} />
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
