import { useState, useEffect } from "react";
import { Container, Typography, ImageList, ImageListItem } from "@mui/material";
import { Navigation } from "../components/Navigation";
import { SimpleSearch } from "../components/Search/SimpleSearch";
import { useTheme } from "@mui/material/styles";
import { CityCard } from "../components/Cards/CityCard";
import axios from "axios";
const locationsURL = "https://devcademy.herokuapp.com/api/Location";

export const Locations = () => {
  const { colors } = useTheme();

  const [locations, setLocations] = useState<any>();
  const [selectOptions, setSelectOptions] = useState<any>();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const getAllLocations = async () => {
      const response = await axios.get(locationsURL);
      if (response.status === 200) {
        if (selectedValue) {
          const result = response.data.find((obj: { id: string }) => {
            return obj.id === selectedValue;
          });
          setLocations([result]);
        } else {
          setLocations(response.data);
          setSelectOptions(response.data);
        }
      }
    };
    getAllLocations();
  }, [selectedValue]);
  if (!locations) return null;

  const result = selectOptions.map(({ id, name }: any) => ({
    type: id,
    value: name,
  }));

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
        <Typography
          sx={{
            color: colors.textBlack,
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "34px",
            mb: "2rem",
          }}
        >
          All Locations
        </Typography>
        <SimpleSearch data={result} setSelectedId={setSelectedValue} />

        <ImageList cols={4} rowHeight={250} gap={10}>
          {locations.map((item: any) => (
            <ImageListItem key={item.id}>
              <CityCard
                key={item.id}
                city={item.name}
                count={item.properties}
                imgUrl={item.imageUrl}
                maxHeight={240}
                minHeight={240}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};
