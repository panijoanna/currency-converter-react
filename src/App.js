import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies/currencies";

function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ content }) => content === currency).rate;

    }

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
