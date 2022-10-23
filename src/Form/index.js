import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

return (
    <form 
        className="form" 
        onSubmit={onFormSubmit}
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
                        value={amount}
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
                        readOnly
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
                <select 
                    className="form__option"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map(currency => (
                        <option 
                        key={currency.content}
                        value={currency.content}
                        >
                        {currency.name}
                        </option>
                        ))};
                </select>
            </label>
            <button className="form__button">
                    Przelicz walutę
            </button>
        </fieldset>
    </form>
);
};

export default Form;