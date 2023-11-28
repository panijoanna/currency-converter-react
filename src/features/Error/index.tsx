import { ErrorContainer, Icon, StyledParagraph } from "./styled.ts";

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
