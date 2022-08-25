import { Box, Grid, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Rating } from "../Rating";

type ReservationCardProps = {
  data: AccommodationDataProps;
};

type AccommodationDataProps = {
  title: string;
  categorization: number;
  imageUrl: string;
  type: string;
  location: { name: string; postalCode: number };
  price: number;
};
export const ReservationCard = ({
  data,
}: ReservationCardProps): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        marginTop: "5rem",
        background: colors.white,
        border: "1px solid #E3E3E3",
        borderRadius: "0.5rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img
            src={data.imageUrl}
            style={{
              margin: "1rem",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "203px",
              height: "210px",
              borderRadius: "4px",
            }}
            alt={data.title}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ padding: "1rem" }}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: "500",
                color: colors.textBlack,
                marginBottom: "10px",
              }}
            >
              {data.title}
            </Typography>
            <Rating categorization={data.categorization} />

            <Stack
              spacing={1}
              justifyContent="flex-start"
              sx={{ marginTop: "23px" }}
            >
              <Typography>{data.type}</Typography>
              <Typography>{data.location.name}</Typography>
              <Typography>{data.location.postalCode}</Typography>
              <Typography>EUR {data.price} per day</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
