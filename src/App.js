import Form from "./Form";
import {useState} from "react";

function App() {
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState();
    const [currencies, setCurrencies] = useState([
        {
            id: 1,
            content: "EUR",
            rate: 4.85
        }, 
        {
            id: 2,
            content: "USD",
            rate: 5.0
        }, 
        {
            id: 3,
            content: "GBP",
            rate: 5.52
        }
    ]);


    return (
        <div className="body__container">
            <Form/>
        </div>
    );
}

export default App;
