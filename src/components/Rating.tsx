import { Stack } from "@mui/material";
import { Star } from "./Icons/Star";

type RatingProps = { categorization: number };

export const Rating = ({ categorization }: RatingProps): JSX.Element => {
  const numEl = Array(categorization).fill("");

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      {numEl.map((e, i) => (
        <Star key={i} />
      ))}
    </Stack>
  );
};
