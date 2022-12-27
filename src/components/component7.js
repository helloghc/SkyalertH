import React from 'react'

import PropTypes from 'prop-types'

import './component7.css'

const Component7 = (props) => {
  return (
    <div className="component7-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component7-image"
      />
      <span className="component7-text">{props.text}</span>
      <h1 className="component7-text1">{props.heading}</h1>
      <button className="component7-button button">{props.button}</button>
    </div>
  )
}

Component7.defaultProps = {
  text: '20 julio 2022',
  heading:
    '5 maneras en que un sistema de alerta temprana para sismos ayudar a tus empleados minimizar riesgos durante un sismo',
  button: 'Leer más',
  image_alt: 'image',
  image_src:
    '/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58%20%5B2%5D-1400w.jpeg',
}

Component7.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component7
