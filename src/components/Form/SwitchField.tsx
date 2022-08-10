import Switch from "@mui/material/Switch";

type SwitchFieldProps = {
  checked: boolean;
  name: string;
  onChange(name: string, value: boolean): void;
};
export const SwitchField = ({ checked, name, onChange }: SwitchFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.checked);
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
