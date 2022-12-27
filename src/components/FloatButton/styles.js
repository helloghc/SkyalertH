import styled, { keyframes } from 'styled-components';

export const wave = keyframes`
50%{
  opacity: 0.5;
  transform: scale(1);
}
100%{
  opacity: 0;
  transform: scale(1.5);
}
`;

export const Anchor = styled.a`
  outline:none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  cursor:pointer;
`;

// export const ContainerButton = styled.button`
//   position: ${({sticked}) => sticked ? 'fixed' :'absolute'};
//   display: ${({sticked}) => sticked ? 'flex' : 'none'};
//   opacity: ${({sticked}) => sticked ? 1 : 0};
//   transition: all 800ms ease;
//   justify-content:center;
//   align-items:center;
//   border-radius: 50%;
//   border: none;
//   width: 60px;
//   height: 60px;

//   &:before{
//     content: ' ';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     z-index: -99;
//     border-radius: 50%;
//     animation: ${wave} 2s ease infinite both;
//     animation-play-state: ${({sticked}) => sticked ? 'running': 'pause'} 
//   }
// `;

export const ButtonWhatsapp = styled.button`
    position:fixed;
    width:auto;
    height:auto;
    bottom:40px;
    right:10px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:14px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    padding:10px 20px;
    text-decoration:none;
`;

export const ButtonInfo = styled.button `
    position:fixed;
    width:auto;
    height:auto;
    bottom:90px;
    right:10px;
    background-color:#fa7931;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:14px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    padding:10px 20px;
    text-decoration:none;
`