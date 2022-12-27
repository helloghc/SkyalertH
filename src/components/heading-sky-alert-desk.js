import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-desk.css'

const HeadingSkyAlertDesk = (props) => {
  return (
    <div
      id="desk"
      className={`heading-sky-alert-desk-container ${props.rootClassName} `}
    >
      <div className="heading-sky-alert-desk-container1">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_081-200h.png"
          rootClassName="solucionescard1-root-class-name8"
        ></Solucionescard1>
        <div className="heading-sky-alert-desk-container2">
          <div className="heading-sky-alert-desk-container3">
            <span className="heading-sky-alert-desk-text">{props.text}</span>
            <span className="heading-sky-alert-desk-text1">{props.text3}</span>
            <div className="heading-sky-alert-desk-container4">
              <h1 className="heading-sky-alert-desk-text2">{props.heading1}</h1>
              <h1 className="heading-sky-alert-desk-text3">{props.heading}</h1>
            </div>
            <span className="heading-sky-alert-desk-text4">{props.text2}</span>
            <span className="heading-sky-alert-desk-text5">{props.text1}</span>
            <span className="heading-sky-alert-desk-text6">{props.text12}</span>
            <span className="heading-sky-alert-desk-text7">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlertDesk.defaultProps = {
  rootClassName: '',
  text: 'Solución de alertamiento sísmico temprano con software receptor (software para computadoras)',
  heading: 'Desk',
  text12:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  heading1: 'SkyAlert',
  text2:
    'Software receptor para  alertamiento sísmico y otros peligros naturales.',
  text1:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
  text3: '¡Nuevo y exclusivo!',
  text11:
    'Desk es un receptor diseñado, principalmente, para alertamiento temprano en negocios pequeños, sucursales y para empleados en casa.',
}

HeadingSkyAlertDesk.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text12: PropTypes.string,
  heading1: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
}

export default HeadingSkyAlertDesk
