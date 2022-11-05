import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 40px;
  border-radius: 10px;
`;

export const FormFieldset = styled.fieldset`
  border: 2px solid #f1f8f8;
  padding: 30px 80px 80px 80px;
  border-radius: 5px;
  max-width: 800px;
  margin: auto;
`;

export const FormLegend = styled.legend`
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  color: #f6ebff;
  text-shadow: 2px 2px 0px #4b4b4d;
`;

export const FormButton = styled.button`
  border: none;
  font-weight: 500;
  background-color: #f1f8f8;
  color: #808080;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background-color: #d1e2e2;
  }

  &:active {
    background-color: #f9f871;
  }
`;

export const LabelText = styled.span`
  width: 100%;
  font-weight: 500;
  max-width: 100px;
  display: inline-block;
  margin-right: 5px;
  color: #f6ebff;
`;

export const Input = styled.input`
  border: 1px solid #f6ebff;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  color: #4b4b4d;
`;
