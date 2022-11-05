import { StyledForm, FormFieldset } from "./styled";
import { useState } from "react";
import Clock from "../Clock/clock.js";
import { currencies } from "../currencies/currencies";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].content);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}>
      <FormFieldset>
      <Clock />
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label>
            <span className="form__labelText">Kwota w zł*:</span>
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
            <span className="form__labelText">Wynik:</span>
            <input className="form__field" readOnly value={result} />
          </label>
        </p>
        <p className="form__paragraph">* - pole obowiązkowe</p>
        <label>
          <select
            className="form__option"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.content} value={currency.content}>
                {currency.name}
              </option>
            ))}
            ;
          </select>
        </label>
        <button className="form__button">Przelicz walutę</button>
      </FormFieldset>
    </StyledForm>
  );
};

export default Form;
