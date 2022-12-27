import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './logo-soluciones.css'

const LogoSoluciones = (props) => {
  return (
    <div className={`logo-soluciones-container ${props.rootClassName} `}>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_061-200h.png"
        rootClassName="solucionescard1-root-class-name"
        className=""
      ></Solucionescard1>
      <a
        href="https://google.com"
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_081-200h.png"
          rootClassName="solucionescard1-root-class-name4"
          className="logo-soluciones-component1"
        ></Solucionescard1>
      </a>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_121-200h.png"
        rootClassName="solucionescard1-root-class-name3"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_041-200h.png"
        rootClassName="solucionescard1-root-class-name2"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_101-200h.png"
        rootClassName="solucionescard1-root-class-name1"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_141-200h.png"
        rootClassName="solucionescard1-root-class-name5"
        className=""
      ></Solucionescard1>
    </div>
  )
}

LogoSoluciones.defaultProps = {
  rootClassName: '',
}

LogoSoluciones.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogoSoluciones
