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
import { currencies } from "../../currencies/currencies";
import { useRates } from "./useRates.js";
import { Error, StyledContainer, Info } from "./styled";
import Loading from "../Loading";

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
    <StyledForm onSubmit={onFormSubmit}>
      <FormFieldset>
        <FormLegend>Kalkulator walut</FormLegend>
        {ratesData.state === "loading" ? (
          <Loading />
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
                <LabelText>Kwota w wybranej walucie*:</LabelText>
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
                <LabelText>Wynik w zł*:</LabelText>
                <Input readOnly value={result} />
              </label>
            </p>
            <label>
              <LabelText>Kurs walut:</LabelText>
              <Select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
                ;
              </Select>
            </label>
            <Paragraph>* - pole obowiązkowe</Paragraph>
            <FormButton>Przelicz walutę</FormButton>
            <Info>Kursy walut są aktualne na dzień {ratesData.date}</Info>
          </>
        )}
      </FormFieldset>
    </StyledForm>
  );
};

export default Form;
