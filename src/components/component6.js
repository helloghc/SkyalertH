import React from 'react'

import PropTypes from 'prop-types'

import './component6.css'

const Component6 = (props) => {
  return (
    <div className="component6-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component6-image"
      />
      <span className="component6-text">{props.text}</span>
      <h1 className="component6-text1">{props.heading}</h1>
      <button className="component6-button button">{props.button}</button>
    </div>
  )
}

Component6.defaultProps = {
  image_src:
    '/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58%20%5B1%5D-1400w.jpeg',
  button: 'Leer más',
  heading:
    '5 maneras en que un sistema de alerta temprana para sismos ayudar a tus empleados minimizar riesgos durante un sismo',
  image_alt: 'image',
  text: '20 julio 2022',
}

Component6.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Component6
