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
  color: ${({ theme }) => theme.color.chalk};
  text-shadow: 2px 2px 0px #4b4b4d;
`;

export const FormButton = styled.button`
  border: none;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.catskill};
  color: ${({ theme }) => theme.color.gray};
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
  color: ${({ theme }) => theme.color.chalk};
`;

export const Input = styled.input`
  border: 1px solid #f6ebff;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.abbey};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.peach};
  font-size: 13px;
  padding: 5px;
`;

export const Select = styled.select`
  padding: 5px;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.gray};
`;
