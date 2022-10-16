import Form from "./Form";
import { useState } from "react";
import { currencies } from "../currencies";

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const exchangeRate = currencies.find(({ content }) => content === currency);
        setResult(amount / exchangeRate);
    };

    return (
        <div className="body__container">
            <Form 
            result = {result}
            calculateResult = {calculateResult}

            />
        </div>
    );
}

export default App;
