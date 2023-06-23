import Form from "./features/Form";
import Clock from "./features/Clock/clock.js";

function App({ result, calculateResult }) {
  return (
    <>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </>
  );
}

export default App;
