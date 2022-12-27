import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './component9.css'

const Component9 = (props) => {
  return (
    <div className="component9-container">
      <a href="#gadget" className="component9-link">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_061-200h.png"
          rootClassName="solucionescard1-root-class-name29"
          className="component9-component"
        ></Solucionescard1>
      </a>
      <a href="#desk" className="component9-link1">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_081-200h.png"
          rootClassName="solucionescard1-root-class-name30"
          className="component9-component1"
        ></Solucionescard1>
      </a>
      <a href="#safetyadmin" className="component9-link2">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_041-200h.png"
          rootClassName="solucionescard1-root-class-name32"
          className="component9-component2"
        ></Solucionescard1>
      </a>
      <a href="#sky360" className="component9-link3">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_121-200h.png"
          rootClassName="solucionescard1-root-class-name31"
          className="component9-component3"
        ></Solucionescard1>
      </a>
      <Link to="/app" className="component9-navlink">
        <div className="component9-card">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="component9-image"
          />
          <span className="component9-text">{props.text}</span>
        </div>
      </Link>
    </div>
  )
}

Component9.defaultProps = {
  text: 'SkyAlert App',
  image_src: '/playground_assets/logo1-200h.png',
  image_alt: 'image',
}

Component9.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component9
