import { LoadingText, LoaderIcon, LoaderWrapper } from "./styled";

const Loading = () => {
  return (
    <LoaderWrapper>
      <LoadingText>Trwa ładowanie, proszę czekać...</LoadingText>
      <LoaderIcon />
    </LoaderWrapper>
  );
};

export default Loading;
