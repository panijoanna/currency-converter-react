import Form from "./Form";
import {useState} from "react";

function App() {
    const [result, setResult] = useState();
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();


    return (
        <div className="body__container">
            <Form/>
        </div>
    );
}

export default App;
