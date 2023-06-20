import Form from "./Form";
import Clock from "./Form/Clock/clock";

function App({ result, calculateResult }) {
  return (
    <>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </>
  );
}

export default App;
