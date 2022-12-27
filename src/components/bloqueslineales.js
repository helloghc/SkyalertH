import React from 'react'

import PropTypes from 'prop-types'

import './bloqueslineales.css'

const Bloqueslineales = (props) => {
  return (
    <div className={`bloqueslineales-container ${props.rootClassName} `}>
      <div className="bloqueslineales-container1">
        <div className="bloqueslineales-card">
          <h1 className="bloqueslineales-text">{props.heading}</h1>
          <h1 className="bloqueslineales-text01">{props.heading2}</h1>
          <span className="bloqueslineales-text02">{props.text3}</span>
        </div>
        <div className="bloqueslineales-card1">
          <h1 className="bloqueslineales-text03">{props.heading4}</h1>
          <h1 className="bloqueslineales-text04">{props.heading23}</h1>
          <span className="bloqueslineales-text05">{props.text33}</span>
        </div>
        <div className="bloqueslineales-card2">
          <div className="bloqueslineales-container2">
            <span className="bloqueslineales-text06">{props.text}</span>
            <h1 className="bloqueslineales-text07">{props.heading3}</h1>
          </div>
          <span className="bloqueslineales-text08">{props.text32}</span>
        </div>
        <div className="bloqueslineales-card3">
          <h1 className="bloqueslineales-text09">{props.heading1}</h1>
          <span className="bloqueslineales-text10">{props.text31}</span>
        </div>
      </div>
    </div>
  )
}

Bloqueslineales.defaultProps = {
  heading: '+450',
  rootClassName1: '',
  text32:
    'la universidad de Berkeley nos seleccionó para ser uno de los proveedores de la alerta sísmica en California',
  text: 'en',
  heading1: 'Hoy en día,',
  heading2: 'Compañías',
  rootClassName: '',
  text33: 'en SkyAlert App',
  rootClassName2: '',
  text3: 'son casos de éxito de SkyAlert',
  rootClassName3: '',
  heading23: 'de descargas',
  text31:
    'somos la única empresa de Alertamiento  Sísmico privado que cuenta con la base  legal para operar sin restricciones',
  heading4: '+10 millones',
  heading3: '2017',
}

Bloqueslineales.propTypes = {
  heading: PropTypes.string,
  rootClassName1: PropTypes.string,
  text32: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName: PropTypes.string,
  text33: PropTypes.string,
  rootClassName2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName3: PropTypes.string,
  heading23: PropTypes.string,
  text31: PropTypes.string,
  heading4: PropTypes.string,
  heading3: PropTypes.string,
}

export default Bloqueslineales
