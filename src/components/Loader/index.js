/* Libraries */
import React from 'react';
import styled from 'styled-components';
/* Utils */
// import {
//     device
// } from 'utils/media';


const LoaderContainer = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    // background: url(img/about/fondoSome.jpg);
    background: #f8f8f8;
    z-index: 99999999999999;
    left: 0;
    text-align: 0;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding-top: 30vh;
`;


const Loader = (props) =>
    <LoaderContainer>
        <img src="/img/skyAlert.gif" alt="SkyAlert-logo-Loader.gif" longdesc="Logo oficial de SkyAlert" />
    </LoaderContainer>
export default Loader;
