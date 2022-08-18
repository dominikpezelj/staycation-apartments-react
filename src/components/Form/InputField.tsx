import { ReactNode } from "react";
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
  rows?: number;
  multiline?: boolean;
  onChange(name: string, value: string): void;
};

export const InputField = ({
  icon,
  label,
  value,
  name,
  type,
  min,
  max,
  rows,
  multiline,
  onChange,
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
            label={label}
            InputProps={icon}
            inputProps={{ min, max }}
            multiline={multiline}
            rows={rows}
            sx={{ minWidth: "200px" }}
          />
        </FormControl>
      </div>
    </Box>
  );
};
