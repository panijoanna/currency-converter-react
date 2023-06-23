import styled from "styled-components";

export const StyledForm = styled.form`
  border-radius: 30px;
  background: ${({ theme }) => theme.color.white};
  margin: auto;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    margin: 20px;
  }
`;

export const FormFieldset = styled.fieldset`
  border: none;
  padding: 10px 40px;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;
`;

export const FormLegend = styled.legend`
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  padding: 20px 0 5px 0;
  color: ${({ theme }) => theme.color.dodgerBlue};
`;

export const FormButton = styled.button`
  border: none;
  font-weight: 400;
  background-color: ${({ theme }) => theme.color.dodgerBlue};
  color: ${({ theme }) => theme.color.aliceBlue};
  border-radius: 15px;
  padding: 15px;
  margin-top: 10px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }
`;

export const LabelText = styled.span`
  width: 100%;
  font-weight: 400;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;
  color: ${({ theme }) => theme.color.comet};
`;

export const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
  border: none;
  padding: 15px;
  max-width: 400px;
  width: 100%;
  border-radius: 15px;
  color: ${({ theme }) => theme.color.manatee};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.comet};
  font-size: 15px;
  padding: 5px;
`;

export const Select = styled.select`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;
  border: none;
  padding: 15px;
  max-width: 400px;
  width: 100%;
  border-radius: 15px;
  color: ${({ theme }) => theme.color.manatee};
`;

export const Loading = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.comet};
`;

export const Error = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.color.comet};
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 5px;
  background-color: ${({ theme }) => theme.color.comet};
  border: solid;
  border-color: ${({ theme }) => theme.color.comet};
  opacity: 0.8;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.comet};
  font-size: 15px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.color.athensGray};
  padding-top: 20px;
`;
