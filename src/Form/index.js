import {
  StyledForm,
  FormFieldset,
  FormLegend,
  FormButton,
  LabelText,
  Input,
  Paragraph,
  Select,
} from "./styled";
import { useState } from "react";
import Clock from "../Clock/clock.js";
import { currencies } from "../currencies/currencies";
import { useRates } from "../Result/useRates.js";
import { Error, Loading, StyledContainer } from "../Result/styled";

const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [currency, setCurrency] = useState(currencies[0].content);
  const [amount, setAmount] = useState("");

  const ratesData = useRates();

  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult((+amount / rate).toFixed(2));
  };

  return (
    <StyledForm 
      onSubmit={onFormSubmit}>
      <FormFieldset>
        <Clock />
        <FormLegend>
          Kalkulator walut
        </FormLegend>
        {ratesData.state === "loading" ? (
          <Loading>
            Trwa ładowanie, proszę czekać...
          </Loading>
        ) : ratesData.state === "error" ? (
          <StyledContainer>
            <Error>
              Wystąpił błąd, sprawdź połączenie z internetem lub spróbuj
              ponownie.
            </Error>
          </StyledContainer>
        ) : (
          <>
            <p>
              <label>
                <LabelText>Kwota w zł*:</LabelText>
                <Input
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
                <LabelText>
                  Wynik:
                </LabelText>
                <Input 
                  readOnly 
                  value={result} />
              </label>
            </p>
            <Paragraph>
              * - pole obowiązkowe
            </Paragraph>
            <label>
              <Select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.content} value={currency.content}>
                    {currency.name}
                  </option>
                ))}
                ;
              </Select>
            </label>
            <FormButton>
              Przelicz walutę
            </FormButton>
          </>
        )}
      </FormFieldset>
    </StyledForm>
  );
};

export default Form;
