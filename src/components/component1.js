import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_121-200h.png"
        rootClassName="solucionescard1-root-class-name36"
      ></Solucionescard1>
      <div className="component1-container1">
        <div className="component1-container2">
          <span className="component1-text">{props.text}</span>
          <div className="component1-container3">
            <h1 className="component1-text1">{props.heading}</h1>
            <h1 className="component1-text2">{props.heading1}</h1>
          </div>
          <span className="component1-text3">{props.text1}</span>
          <span className="component1-text4">{props.text2}</span>
          <span className="component1-text5">{props.text3}</span>
          <span className="component1-text6">{props.text4}</span>
        </div>
      </div>
    </div>
  )
}

Component1.defaultProps = {
  heading: 'SkyAlert',
  rootClassName: '',
  text1: 'Servicio de alertamiento temprano de otros peligros naturales.',
  text: 'Solución de alertamiento de otros peligros naturales',
  text4:
    ' Atendiendo la necesidad de minimizar el riesgo de desastre, desarrollamos una nueva solución para ayudar a disminuir el impacto económico y social.',
  text2:
    'El planeta, en específico nuestra región, está sufriendo los efectos de peligros naturales con mayor frecuencia y cada vez más extremos.',
  heading1: '360',
  text3:
    ' Sociedades vulnerables, que están expuestas a estos peligros, tienen mayores afectaciones y pérdidas.',
}

Component1.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  text3: PropTypes.string,
}

export default Component1
