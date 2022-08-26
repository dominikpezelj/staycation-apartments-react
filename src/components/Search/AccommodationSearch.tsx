import { useState } from "react";
import moment from "moment";
import { Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import InputAdornment from "@mui/material/InputAdornment";

//DATA
import { searchLabel } from "../../common/constants";
import { locations, accommodationTypes } from "../../common/data";
//INPUT FIELDS
import { InputField } from "../Form/InputField";
import { DateField } from "../Form/DateField";
import { SelectField } from "../Form/SelectField";
//ICONS
import { Profile } from "../Icons/Profile";
import { Car } from "../Icons/Car";
import axios from "axios";
import { Link } from "react-router-dom";

const accommodationURL = "https://devcademy.herokuapp.com/api/Accomodations";
const reservationsURL = "https://devcademy.herokuapp.com/api/Reservation";
type AccommodationSearchProps = {
  setSearchData: Function;
  data: { type: string; value: string }[];
  setSelectedId(value: string): void;
  setSearchResult: Function;
};

export const AccommodationSearch = ({
  setSearchData,
  setSearchResult,
  data,
  setSelectedId,
}: AccommodationSearchProps): JSX.Element => {
  const [formValues, setFormValues] = useState({
    location: "",
    checkIn: new Date(),
    checkOut: new Date(),
    guests: "",
    accommodation: "",
  });

  const { colors, shadow } = useTheme();

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const getAllAccommodations = async () => {
    const response = await axios.get(accommodationURL);
    return response.data;
  };

  const getAllReservations = async () => {
    const response = await axios.get(reservationsURL);
    return response.data;
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const allAccommodations = await getAllAccommodations();
    const allReservations = await getAllReservations();

    console.log(allReservations);
    const filteredAccommodations = allAccommodations.filter((data: any) => {
      if (
        data.location?.name === formValues.location &&
        data.capacity > formValues.guests &&
        data.type === formValues.accommodation
      ) {
        return data;
      }
    });
    const filter = allReservations.filter((data: any) => {
      if (data.accomodationId === filteredAccommodations[0].id) {
        const formCheckIn = moment(formValues.checkIn).format("MM-DD-YYYY");
        const formCheckOut = moment(formValues.checkOut).format("MM-DD-YYYY");
        const dataCheckIn = moment(data.checkIn).format("MM-DD-YYYY");
        const dataCheckOut = moment(data.checkOut).format("MM-DD-YYYY");

        const checkInCondition = moment(formCheckIn).isBetween(
          dataCheckIn,
          dataCheckOut
        );
        const checkOutCondition = moment(formCheckOut).isBetween(
          dataCheckIn,
          dataCheckOut
        );
        console.log(checkInCondition);
        console.log(checkOutCondition);
        if (!checkInCondition && !checkOutCondition) {
          alert("free");
          setSearchResult(data);
          return data;
        } else alert("booked");
      }
    });

    console.log(filter.accommodationId);

    if (filteredAccommodations.length === 0 && !filter) {
      alert("No result");
    } else {
      setSelectedId(filter.accommodationId);
      setSearchData(formValues.location);
    }
  };
  const now = moment().format("DD-MM-YYYY");

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          background: colors.white,
          display: "flex",
          marginTop: "-100px",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.75rem",
          borderRadius: "20px",
          marginX: "7.5rem",
          height: "6.25rem",
          boxShadow: shadow.main,
        }}
      >
        <SelectField
          onChange={handleChange}
          selectOptions={data}
          value={formValues.location || data[0].value}
          label={"Where are you going?"}
          name={"location"}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
              </InputAdornment>
            ),
          }}
        />

        <DateField
          value={formValues.checkIn || now}
          label={"Check in"}
          name={"checkIn"}
          onChange={handleChange}
        />
        <DateField
          value={formValues.checkOut || now}
          label={"Check out"}
          name={"checkOut"}
          onChange={handleChange}
        />
        <InputField
          onChange={handleChange}
          value={formValues.guests}
          label={"How many people?"}
          name={"guests"}
          type={"number"}
          min={1}
          max={100}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Profile />
              </InputAdornment>
            ),
          }}
        />
        <SelectField
          onChange={handleChange}
          selectOptions={accommodationTypes}
          value={formValues.accommodation || accommodationTypes[0].value}
          label={"What type of accommodation?"}
          name={"accommodation"}
          icon={{
            startAdornment: (
              <InputAdornment position="start">
                <Car />
              </InputAdornment>
            ),
          }}
        />
        <Link to={"/accommodations"} style={{ textDecoration: "none" }}>
          <Button
            variant={"contained"}
            type={"submit"}
            sx={{
              background: colors.mint,
              color: colors.white,
              maxWidth: "9.25rem",
              height: "3.5rem",
            }}
          >
            {searchLabel}
          </Button>
        </Link>
      </Stack>
    </form>
  );
};
