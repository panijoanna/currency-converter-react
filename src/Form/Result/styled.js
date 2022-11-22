import styled from "styled-components";

export const Loading = styled.p`
font-size: 18px;
font-weight: 500;
`;

export const Error = styled.p`
color: ${({ theme }) => theme.color.red};
`;