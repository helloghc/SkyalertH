import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-safety.css'

const HeadingSkyAlertSafety = (props) => {
  return (
    <div
      id="safetyadmin"
      className={`heading-sky-alert-safety-container ${props.rootClassName} `}
    >
      <div className="heading-sky-alert-safety-container1">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_041-200h.png"
          rootClassName="solucionescard1-root-class-name10"
        ></Solucionescard1>
        <div className="heading-sky-alert-safety-container2">
          <div className="heading-sky-alert-safety-container3">
            <span className="heading-sky-alert-safety-text">{props.text}</span>
            <div className="heading-sky-alert-safety-container4">
              <h1 className="heading-sky-alert-safety-text1">
                {props.heading1}
              </h1>
              <h1 className="heading-sky-alert-safety-text2">
                {props.heading}
              </h1>
            </div>
            <span className="heading-sky-alert-safety-text3">
              {props.text2}
            </span>
            <span className="heading-sky-alert-safety-text4">
              {props.text1}
            </span>
            <span className="heading-sky-alert-safety-text5">
              {props.text12}
            </span>
            <span className="heading-sky-alert-safety-text6">
              {props.text11}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlertSafety.defaultProps = {
  text: 'Panel de administración web para receptores',
  rootClassName: '',
  text12:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  text2:
    'Software receptor para  alertamiento sísmico y otros peligros naturales.',
  text11:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  heading1: 'SkyAlert',
  heading: 'Desk',
  text1:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
}

HeadingSkyAlertSafety.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text12: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
}

export default HeadingSkyAlertSafety
