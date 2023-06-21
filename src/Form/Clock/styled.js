import styled from "styled-components";

export const StyledClock = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.comet};
  font-size: 14px;
`;
