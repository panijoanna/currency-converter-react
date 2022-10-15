import Form from "./Form";
import { useState } from "react";

function App() {

    return (
        <div className="body__container">
            <Form 
            result = {result}
            currency = {currency}
            amount = {amount}
            calculateResult = {calculateResult}

            />
        </div>
    );
}

export default App;
