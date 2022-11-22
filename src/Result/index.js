import Form from "../Form";

const Result = ({ result, calculateResult }) => {
  return (
    <Form 
        result={result} 
        calculateResult={calculateResult} 
    />
  )
};

export default Result;
