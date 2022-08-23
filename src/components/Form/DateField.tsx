import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { InputCalendar } from "../Icons/InputCalendar";

type DateFieldProps = {
  label: string;
  value: string;
  name: string;
  disableFuture?: boolean;
  onChange(name: string, value: string | null): void;
};

export const DateField = ({
  label,
  value,
  name,
  disableFuture,
  onChange,
}: DateFieldProps) => {
  const handleChange = (inputDate: string | null) => {
    onChange(name, inputDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        inputFormat="dd/MM/yyyy"
        value={value}
        disableFuture={disableFuture}
        onChange={handleChange}
        InputAdornmentProps={{ position: "start" }}
        components={{
          OpenPickerIcon: InputCalendar,
        }}
        renderInput={(params) => <TextField {...params} sx={{ flex: 1 }} />}
      />
    </LocalizationProvider>
  );
};
