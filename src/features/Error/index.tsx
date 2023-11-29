import { ErrorContainer, Icon, StyledParagraph } from "./styled";

const Error = () => {
  return (
    <ErrorContainer>
      <Icon />
      <StyledParagraph>
        Oooops! Something went wrong...Please try again later.
      </StyledParagraph>
    </ErrorContainer>
  );
};

export default Error;
