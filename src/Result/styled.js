import styled from "styled-components";

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

`;
