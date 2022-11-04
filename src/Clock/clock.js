import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [date, setdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(changeDate, 1000);

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
