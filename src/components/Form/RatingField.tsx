import Rating from "@mui/material/Rating";
import React from "react";

type RatingFieldProps = {
  name: string;
  value: string;
  onChange(name: string, value: number | null): void;
  onBlur(event: React.FocusEvent<HTMLInputElement>): void;
};
export const RatingField = ({
  name,
  value,
  onChange,
  onBlur,
}: RatingFieldProps) => {
  const handleChange = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    onChange(name, newValue);
  };
  return (
    <Rating
      name={name}
      value={Number(value)}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};
