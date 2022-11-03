import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [dateItem, setDateItem] = useState(new Date());

  const changeDate = () => {
    setDateItem(new Date());
  };

  useEffect(() => {
    const interval = setInterval(changeDate, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
        Dzisiaj jest{" "}
        {dateItem.toLocaleTimeString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
    </div>
  );
};

export default Clock;
