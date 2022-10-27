import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies/currencies";

function App() {

    const [result, setResult] = useState();

    const calculateResult = (amount, currency) => {
        const exchangeRate = currencies.find((el => el.content === currency));
        const rate = exchangeRate.rate;
        setResult({
            total: amount / rate,
            currency
        }
        )};

    return (
        <div className="body__container">
            <Form 
            result = {result}
            calculateResult = {calculateResult}
            />
        </div>
    );
};

export default App;
