import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const formattedDate = (date) => date.toLocaleTimeString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
});

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledClock>
        Dzisiaj jest
        {" "}
        {formattedDate(date)}
    </StyledClock>
  );
};

export default Clock;
