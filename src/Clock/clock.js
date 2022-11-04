import { useState, useEffect } from "react";
import "./style.css";

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
        {date.toLocaleTimeString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
    </div>
  );
};

export default Clock;
