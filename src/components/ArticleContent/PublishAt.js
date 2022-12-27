/* Libraries */
import styled, { withTheme } from 'styled-components';

const PublishAt = styled.p`
  /* Display & Box Model */
  margin-bottom: 2rem;
  /* Style */
  color: ${(articleContent) => (articleContent.date)};
  /* Text */
  font-family: var(--main-font-medium);
  font-size: 1.6rem;
`;

export default PublishAt;
