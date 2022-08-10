import { ReactNode } from "react";
import Box from "@mui/material/Box";

//SELECT
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type SelectProps = {
  selectOptions: { name: string; value: string }[];
  icon?: { [alignment: string]: ReactNode };
  label: string;
  value: string;
  name: string;
  onChange(name: string, value: string): void;
};

export const SelectField = ({
  selectOptions,
  icon,
  label,
  value,
  name,
  onChange,
}: SelectProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { display: "flex", minWidth: "200px" },
      }}
    >
      <div>
        <TextField
          id="outlined-select"
          select
          label={label}
          value={value}
          name={name}
          onChange={handleChange}
          InputProps={icon}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option.name} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};
