import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-360.css'

const HeadingSkyAlert360 = (props) => {
  return (
    <div
      id="sky360"
      className={`heading-sky-alert-360-container ${props.rootClassName} `}
    >
      <div className="heading-sky-alert-360-container1">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_121-200h.png"
          rootClassName="solucionescard1-root-class-name9"
        ></Solucionescard1>
        <div className="heading-sky-alert-360-container2">
          <div className="heading-sky-alert-360-container3">
            <span className="heading-sky-alert-360-text">{props.text}</span>
            <div className="heading-sky-alert-360-container4">
              <h1 className="heading-sky-alert-360-text1">{props.heading1}</h1>
              <h1 className="heading-sky-alert-360-text2">{props.heading}</h1>
            </div>
            <span className="heading-sky-alert-360-text3">{props.text2}</span>
            <span className="heading-sky-alert-360-text4">{props.text1}</span>
            <span className="heading-sky-alert-360-text5">{props.text12}</span>
            <span className="heading-sky-alert-360-text6">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert360.defaultProps = {
  text12:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  text1:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  rootClassName: '',
  heading: 'Desk',
  text2:
    'Software receptor para  alertamiento sísmico y otros peligros naturales.',
  text: 'Solución de alertamiento de otros peligros naturales',
  heading1: 'SkyAlert',
  text11:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
}

HeadingSkyAlert360.propTypes = {
  text12: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text11: PropTypes.string,
}

export default HeadingSkyAlert360
