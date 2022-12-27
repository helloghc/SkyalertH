import React from 'react'

import PropTypes from 'prop-types'

import './icono-texto-bajada.css'

const IconoTextoBajada = (props) => {
  return (
    <div className="icono-texto-bajada-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="icono-texto-bajada-image"
      />
      <h1>{props.heading}</h1>
      <span className="icono-texto-bajada-text1">{props.text1}</span>
      <span className="icono-texto-bajada-text2">{props.text}</span>
    </div>
  )
}

IconoTextoBajada.defaultProps = {
  text1: 'Text',
  text: 'Se escucha un tono corto y una voz de',
  image_alt: 'image',
  heading: 'Sismo Detectado',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

IconoTextoBajada.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default IconoTextoBajada
