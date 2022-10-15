import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies.js";

const Form = () => {
    const [currency, setCurrency] = useState(0);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const exchangeRate = currencies.find(({ content }) => content === currency);
        setResult(amount / exchangeRate);
    };

    const insertResult = () => {
        let result = calculateResult(currency, amount);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        insertResult();
    };

return (
    <form 
        className="form" 
        onFormSubmit={onFormSubmit}
        >
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zł*:
                    </span>
                    <input
                        className="form__field"
                        required
                        type="number"
                        name="kwota"
                        step="0.01"
                        min="1"
                        max="1000000000"
                        onChange={({ target }) => setAmount(target.value)}
                        />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wynik:
                    </span>
                    <input
                        className="form__field"
                        readonly
                        type="number"
                        name="wynik"
                        step="0.01"
                        min="1"
                        max="1000000000"/>
                </label>
            </p>
            <p className="form__paragraph">
                * - pole obowiązkowe
            </p>
            <label>
                <select className="form__option">
                    <option value="EUR">Euro</option>
                    <option value="GBP">Funt brytyjski</option>
                    <option value="USD">Dolar amerykański</option>
                </select>
            </label>
            <button onClick={insertResult} 
                    className="form__button">
                    Przelicz walutę
            </button>
        </fieldset>
    </form>
);
};

export default Form;