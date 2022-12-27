/* Libraries */
import styled from 'styled-components';
/* Utils */
import {device} from '../../utils/media';

const ContentContainer = styled.div`
  position: relative;
  margin: 2rem;
  @media ${device.laptop} {
    padding: 0 10rem;
  }
`;
export default ContentContainer;
