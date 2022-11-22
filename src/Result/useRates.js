import { useEffect, useState } from "react";

export const useRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        setRatesData({
          rates,
          date,
          status: "success",
        });
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getData, 2000);
  }, []);

  return ratesData;
};
