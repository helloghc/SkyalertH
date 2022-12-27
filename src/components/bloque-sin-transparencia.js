import React from 'react'

import PropTypes from 'prop-types'

import './bloque-sin-transparencia.css'

const BloqueSinTransparencia = (props) => {
  return (
    <div
      className={`bloque-sin-transparencia-container ${props.rootClassName} `}
    >
      <div className="bloque-sin-transparencia-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="bloque-sin-transparencia-image"
        />
        <h4 className="bloque-sin-transparencia-text heading4">
          {props.heading}
        </h4>
        <span className="bloque-sin-transparencia-text1 content-Light">
          {props.text}
        </span>
      </div>
    </div>
  )
}

BloqueSinTransparencia.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  heading: 'Search for ideas',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
}

BloqueSinTransparencia.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default BloqueSinTransparencia
