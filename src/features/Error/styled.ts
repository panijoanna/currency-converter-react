import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/warning.svg";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.comet};
`;

export const Icon = styled(ErrorIcon)``;
