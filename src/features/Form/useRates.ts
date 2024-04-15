import { useEffect, useState } from "react";

type Success = {
  state: "success";
  rates: Record<string, number>;
  date: string;
};

type Fail = {
  state: "error";
};

type Loading = {
  state: "loading";
};

type Result = Success | Fail | Loading;

export const useRates = () => {
  const [ratesData, setRatesData] = useState<Result>({
    state: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        if (process.env.NODE_ENV === "development") {
          setRatesData({
            state: "success",
            rates: {
              EUR: 4.31,
              GBP: 5.04,
              JPY: 0.026,
            },
            date: new Date().toISOString().slice(0, 10),
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
