import {
  Container,
  Box,
  Typography,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Navigation } from "../components/Navigation";
import { useTheme } from "@mui/material/styles";
import { CityCard } from "@cards/CityCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { PlaceCard } from "../components/Cards/PlaceCard";
import { MyPlaceDeleteModal } from "src/components/Modal/MyPlaceDeleteModal";
import { Footer } from "src/components/Footer";

const accommodationsURL = "https://devcademy.herokuapp.com/api/Accomodations";

type MyPlacesProps = {
  placeId: string;
  setComponent: Function;
  setPlaceId: Function;
};

export const MyPlaces = ({
  setComponent,
  setPlaceId,
  placeId,
}: MyPlacesProps) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const [accommodationData, setAccommodationData] = useState<any>();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    const getAllAccommodations = async () => {
      const response = await axios.get(accommodationsURL);
      console.log(response.status);
      if (response.status === 200) {
        setAccommodationData(response.data);
        console.log(response.data);
      } else return;
    };
    getAllAccommodations();
  }, []);
  if (!accommodationData) return null;
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
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            marginBottom: "3rem",
          }}
        >
          <Typography
            sx={{
              color: colors.textBlack,
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "34px",
            }}
          >
            My places
          </Typography>

          <Button
            variant="contained"
            onClick={() => setComponent("newplaceform")}
            sx={{
              background: colors.mint,
              paddingX: "32px",
              color: colors.white,
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Add new place
          </Button>
        </Box>

        <ImageList cols={4} rowHeight={250} gap={10}>
          {accommodationData.map((item: any) => (
            <PlaceCard
              setPlaceId={setPlaceId}
              handleOpen={handleOpen}
              setComponent={setComponent}
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={
                item.subtitle === null || item.subtitle === ""
                  ? "No subtitle"
                  : item.subtitle
              }
              location={item?.location?.name}
              imgUrl={item.imageUrl}
            />
          ))}
        </ImageList>
        <MyPlaceDeleteModal
          open={isOpen}
          handleClose={handleClose}
          id={placeId}
        />
      </Container>
      <Footer />
    </div>
  );
};
