import {
  StyledForm,
  FormFieldset,
  FormLegend,
  FormButton,
  LabelText,
  Input,
  Paragraph,
  Select,
  Info,
} from "./styled";
import { useState, FormEventHandler } from "react";
import { currencies } from "../../currencies/currencies";
import { useRates } from "./useRates";
import Loading from "../Loading/index";
import Error from "../Error/index";
import { ChangeEvent } from "react";

const Form = () => {
  const onFormSubmit: FormEventHandler = event => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const [currency, setCurrency] = useState(currencies[0].content);
  const [amount, setAmount] = useState("");

  const ratesData = useRates();

  const [result, setResult] = useState("0");

  const calculateResult = (currency: string, amount: string) => {
    if (ratesData.state !== "success") {
      return;
    }

    const rate = ratesData.rates[currency];
    setResult((+amount * rate).toFixed(2));
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <FormFieldset>
        <FormLegend>Kalkulator walut</FormLegend>
        {ratesData.state === "loading" ? (
          <Loading />
        ) : ratesData.state === "error" ? (
          <Error />
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
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAmount(event.target.value)
                  }
                />
              </label>
            </p>
            <p>
              <label>
                <LabelText>Wynik w zł:</LabelText>
                <Input readOnly value={result} />
              </label>
            </p>
            <label>
              <LabelText>Kurs walut:</LabelText>
              <Select
                value={currency}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  setCurrency(event.target.value)
                }
              >
                {ratesData &&
                  ratesData.rates &&
                  Object.keys(ratesData.rates).map(currency => (
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
