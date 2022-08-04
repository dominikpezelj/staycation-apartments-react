import { Container, Grid } from "@mui/material";
import { Navigation, ReservationForm, ReservationCard } from "../components";
import { accommodationInfoData } from "../common/data";

type ReservationProps = {
  setComponent: Function;
};

export const Reservation = ({ setComponent }: ReservationProps) => {
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
        <Grid container spacing={25} columns={16}>
          <Grid item xs={8}>
            <ReservationForm />
          </Grid>
          <Grid item xs={8}>
            <ReservationCard data={accommodationInfoData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
