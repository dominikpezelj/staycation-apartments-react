import { Container, Grid } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { ReservationForm } from "../components/ReservationForm";
import { ReservationCard } from "../components/Cards/ReservationCard";
import { accommodationInfoData } from "../common/data";

type ReservationProps = {
  reservationData: ReservationData;
};

type ReservationData = {
  id: string;
  title: string;
  imageUrl: string;
  categorization: number;
  type: string;
  location: { name: string; postalCode: number };
  price: number;
};

export const Reservation = ({ reservationData }: ReservationProps) => {
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
        <Grid container spacing={25} columns={16}>
          <Grid item xs={8}>
            <ReservationForm data={reservationData} />
          </Grid>
          <Grid item xs={8}>
            <ReservationCard data={reservationData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
