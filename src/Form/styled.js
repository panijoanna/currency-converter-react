import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 40px;
  border-radius: 10px;
`;

export const FormFieldset = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.color.catskill};
  padding: 10px 40px 40px 40px;
  border-radius: 5px;
  max-width: 800px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 15px;
  }
`;

export const FormLegend = styled.legend`
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.color.chalk};
  text-shadow: 2px 2px 0px ${({ theme }) => theme.color.abbey};
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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
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
  border: 1px solid ${({ theme }) => theme.color.chalk};
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.abbey};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.peach};
  font-size: 15px;
  padding: 5px;
`;

export const Select = styled.select`
  padding: 5px;
  width: 100%;
  margin: 5px 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.gray};
`;

export const Loading = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.casablanca};
`;

export const Error = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.color.copper};
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 5px;
  background-color: ${({ theme }) => theme.color.yellow};
  border: solid;
  border-color: ${({ theme }) => theme.color.copper};
  opacity: 0.8;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.chalk};
  text-shadow: 2px 2px ${({ theme }) => theme.color.gray};
  font-size: 15px;
  text-align: center;
`;
