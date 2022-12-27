/* Libraries */
import styled from 'styled-components';
/* Utils */
import {device} from '../../utils/media';

const SocialContainer = styled.div `
  /* Style */
  position: relative;
  display: inline-flex;

  @media ${device.laptop} {
    display: block;
    position: absolute;
    top:0;
    left:30px;
    button{
      margin-top: 9px !important;
    }
    a{
      margin-top: 4px !important;
    }
  }
`;

export default SocialContainer;
