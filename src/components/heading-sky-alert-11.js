import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-11.css'

const HeadingSkyAlert11 = (props) => {
  return (
    <div
      id="gadget"
      className={`heading-sky-alert-11-container ${props.rootClassName} `}
    >
      <div className="heading-sky-alert-11-container1">
        <div className="heading-sky-alert-11-container2">
          <Solucionescard1
            image_alt="asdfghj"
            image_src="/playground_assets/suite-de-soluciones_061-200h.png"
            rootClassName="solucionescard1-root-class-name6"
            className=""
          ></Solucionescard1>
          <div className="heading-sky-alert-11-container3">
            <span className="heading-sky-alert-11-text">{props.text}</span>
            <span className="heading-sky-alert-11-text1">{props.text3}</span>
            <div className="heading-sky-alert-11-container4">
              <h1 className="heading-sky-alert-11-text2">{props.heading1}</h1>
              <h1 className="heading-sky-alert-11-text3">{props.heading}</h1>
            </div>
            <span className="heading-sky-alert-11-text4">{props.text2}</span>
            <span className="heading-sky-alert-11-text5">{props.text1}</span>
            <span className="heading-sky-alert-11-text6">{props.text12}</span>
            <span className="heading-sky-alert-11-text7">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert11.defaultProps = {
  heading1: 'Heading',
  heading: 'Heading',
  text2: 'Toma el control de toda la información',
  text1: '¡Uso exclusivo para administradores!',
  rootClassName: '',
  text12: '¡Uso exclusivo para administradores!',
  text11: '¡Uso exclusivo para administradores!',
  text3: '¡Tecnología exclusiva!',
  text: 'Solución de alertamiento sísmico temprano con dispositivo receptor gadget; El dispositivo más moderno y rápido de México',
}

HeadingSkyAlert11.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text12: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default HeadingSkyAlert11
