import moment from "moment";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

//DATA
import { searchLabel } from "../../common/constants";
import { accommodationTypes } from "../../common/data";

//INPUT FIELDS
import { InputField } from "../Form/InputField";
import { DateField } from "../Form/DateField";
import { SelectField } from "../Form/SelectField";

//ICONS
import { Profile } from "../Icons/Profile";
import { Bed } from "../Icons/Bed";

type AdvancedSearch = {
  searchResult: any[];
  setSearchResult: Function;
};

export const AdvancedSearch = ({
  searchResult,
  setSearchResult,
}: AdvancedSearch): JSX.Element => {
  const { colors } = useTheme();

  const [formValues, setFormValues] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
    guests: "",
    accommodation: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const advancedFilter = [searchResult].filter((data: any) => {
      if (
        data.accomodation.capacity > formValues.guests &&
        data.accomodation.type === formValues.accommodation
      ) {
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
        } else return;
      }
    });
  };

  const now = moment().format("DD-MM-YYYY");

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
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
                <Bed />
              </InputAdornment>
            ),
          }}
        />
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
      </Stack>
    </form>
  );
};
