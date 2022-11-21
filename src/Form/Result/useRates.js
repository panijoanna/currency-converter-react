import axios from "axios";
import { useEffect, useState } from "react";

export const useRates = () => {
    const [rates, setRates] = useState({ state: "loading" });

const baseURL = "https://api.exchangerate.host/latest?base=PLN";

useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get(baseURL);
            const { rates, date } = response.data;

            setRates({
                rates,
                date,
                status: "success",
            });
        } catch (error) {
            setRates({
                state: "error",
            });
        }  
        };
        setTimeout(getData, 2000);
    }, []);

    return rates;
};