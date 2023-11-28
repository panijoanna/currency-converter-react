import Form from "../features/Form/index.tsx";
import Clock from "../features/Clock/clock.tsx";

function App({ result, calculateResult }) {
  return (
    <>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </>
  );
}

export default App;
