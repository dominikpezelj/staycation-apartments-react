import { Modal, Box, Typography, Stack, Button, colors } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
const accomodationURL = "https://devcademy.herokuapp.com/api/Accomodations/";

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
  id: string;
};
export const MyPlaceDeleteModal = ({
  open,
  handleClose,
  id,
}: ReservationConfirmModalProps) => {
  const { colors } = useTheme();

  const removeAccommodation = async () => {
    const response = await axios.delete(accomodationURL + id);
    console.log(response.status);
  };
  console.log(id);
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

          <Typography>
            Are you sure you want to delete this listing? This action cannot be
            reversed.
          </Typography>

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
              onClick={removeAccommodation}
            >
              delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
