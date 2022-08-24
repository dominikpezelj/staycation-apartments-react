import { Box, Typography, Modal, Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Moment from "moment";
import axios from "axios";

const postReservation = "https://devcademy.herokuapp.com/api/Reservation";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type ReservationConfirmModalProps = {
  open: boolean;
  handleClose(state: boolean): void;
  data: ModalDataProps;
  formData: FormData;
};

type FormData = {
  fullName: string;
  email: string;
  numGuests: number;
  checkIn: Date;
  checkOut: Date;
};
type ModalDataProps = {
  id: string;
  title: string;
  imageUrl: string;
  categorization: number;
  type: string;
  location: { name: string; postalCode: number };
  price: number;
};
export const ReservationConfirmModal = ({
  open,
  handleClose,
  data,
  formData,
}: ReservationConfirmModalProps) => {
  const newCheckIn = Moment(formData.checkIn).format("MMM Do");
  const newCheckOut = Moment(formData.checkOut).format("MMM Do YY");
  const newDate = newCheckIn + " - " + newCheckOut;
  const { colors } = useTheme();
  const submitReservation = async () => {
    if (
      formData.email &&
      data.id &&
      formData.checkIn &&
      formData.checkOut &&
      formData.numGuests
    ) {
      try {
        let result = await axios.post(postReservation, {
          email: formData.email,
          accomodationId: data.id,
          checkIn: formData.checkIn.toISOString(),
          checkOut: formData.checkOut.toISOString(),
          personCount: formData.numGuests,
          confirmed: true,
        });
        console.log(result.status);
        if (result.status === 201) handleClose(true);
      } catch (error: any) {
        console.error(error.response.data);
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comfirm booking
          </Typography>
          <Stack spacing={2}>
            <Typography>{data.title}</Typography>
            <Typography>{formData.numGuests} guests</Typography>
            <Typography>{newDate}</Typography>
            <Typography>{data.type}</Typography>
            <Typography>{data.location.name}</Typography>
            <Typography>EUR {data.price}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={3}
            sx={{ mt: "1rem" }}
          >
            <Button
              variant="text"
              sx={{ color: colors.mint }}
              onClick={() => handleClose(true)}
            >
              cancel
            </Button>
            <Button
              variant="text"
              sx={{ color: colors.mint }}
              onClick={submitReservation}
            >
              confirm
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
