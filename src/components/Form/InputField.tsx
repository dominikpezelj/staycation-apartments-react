import { FocusEventHandler, ReactNode } from "react";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

type InputFieldProps = {
  icon?: { [alignment: string]: ReactNode };
  label: string;
  value: string | number | null;
  name: string;
  type: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  multiline?: boolean;
  helperText?: string;
  error?: boolean;
  onChange(name: string, value: string): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
};

export const InputField = ({
  icon,
  label,
  value,
  name,
  type,
  min,
  max,
  minLength,
  maxLength,
  rows,
  multiline,
  helperText,
  error,
  onChange,
  onBlur,
}: InputFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.name + event.target.value);
    onChange(event.target.name, event.target.value);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <div>
        <FormControl fullWidth>
          <TextField
            id="outlined-adornment"
            value={value}
            type={type}
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            label={label}
            InputProps={icon}
            inputProps={{
              min: min,
              max: max,
              minLength,
              maxLength,
            }}
            multiline={multiline}
            rows={rows}
            helperText={helperText}
            error={error}
            sx={{ minWidth: "200px" }}
          />
        </FormControl>
      </div>
    </Box>
  );
};
