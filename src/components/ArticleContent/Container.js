/* Libraries */
import styled from 'styled-components';
import {device} from '../../utils/media';

const Container = styled.div `
  /* Display & Box Model */
  padding: 0rem;
  padding-top: 0;

  .videoHeader{
    margin: 0 -3rem 2rem -3rem;
    iframe{
      height: 22rem !important
    }
  }
  @media ${device.laptop} {
    padding: 0;

    .videoHeader{
      margin:0 0 2rem 0;
      iframe{
        height: 450px!important
      }
    }
  }
`;

export default Container;
