import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formattedDate = (date: Date) =>
  date.toLocaleTimeString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>{formattedDate(date)}</StyledClock>;
};

export default Clock;
