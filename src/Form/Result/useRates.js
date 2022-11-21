import axios from "axios";
import { useEffect, useState } from "react";

export const useRates = () => {
    const [rates, setRates] = useState({ state: "loading" });

const baseURL = "https://api.exchangerate.host/latest?base=PLN";
};