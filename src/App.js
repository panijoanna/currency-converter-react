import Form from "./Form";
import { useState } from "react";
import { currencies } from "./currencies/currencies";

function App() {
  

  return (
    <>
      <Form 
        result={result} 
        calculateResult={calculateResult} />
    </>
  );
}

export default App;
