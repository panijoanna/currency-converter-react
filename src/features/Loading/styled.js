import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/spinner.svg";

export const LoadingText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.comet};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoaderIcon = styled(Icon)`
  animation: rotate 1s linear infinite;
  width: 80px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
