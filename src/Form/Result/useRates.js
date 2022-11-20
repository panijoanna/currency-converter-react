import axios from "axios";
import { useEffect } from "react";

export const useRates = () => {
    const statusRequest = {
        status: "loading",
    };

const baseURL = "https://api.exchangerate.host/latest?base=PLN";
};