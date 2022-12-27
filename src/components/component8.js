import React from 'react'

import PropTypes from 'prop-types'

import './component8.css'

const Component8 = (props) => {
  return (
    <div className="component8-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component8-image"
      />
      <span className="component8-text">{props.text}</span>
      <h1 className="component8-text1">{props.heading}</h1>
      <button className="component8-button button">{props.button}</button>
    </div>
  )
}

Component8.defaultProps = {
  image_alt: 'image',
  text: '20 julio 2022',
  button: 'Leer más',
  image_src:
    '/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58-1400w.jpeg',
  heading:
    '5 maneras en que un sistema de alerta temprana para sismos ayudar a tus empleados minimizar riesgos durante un sismo',
}

Component8.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default Component8
