import { useState, useEffect } from "react";
import "./style.css";

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
    <div className="clock">
        Dzisiaj jest
        {" "}
        {formattedDate(date)}
    </div>
  );
};

export default Clock;
