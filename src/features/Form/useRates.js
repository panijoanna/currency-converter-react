import { useEffect, useState } from "react";

export const useRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        if (process.env.NODE_ENV === "development") {
          setRatesData({
            state: "success",
            rates: {
              EUR: 0.813399,
              GBP: 0.72007,
              JPY: 107.346001,
            },
            date: "2021-03-17",
          });
        } else {
          const response = await fetch(
            "https://api.exchangerate.host/latest?base=PLN"
          );

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const { rates, date } = await response.json();

          setRatesData({
            state: "success",
            rates,
            date,
          });
        }
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(getData, 1000);
  }, []);

  return ratesData;
};
