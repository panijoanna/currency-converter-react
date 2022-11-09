import styled from "styled-components";

export const StyledClock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px 20px;
  font-family: "Space Mono", monospace;
  color: ${({ theme }) => theme.color.chalk};
  font-size: 13px;
`;
