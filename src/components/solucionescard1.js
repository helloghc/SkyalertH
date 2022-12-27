import React from 'react'

import PropTypes from 'prop-types'

import './solucionescard1.css'

const Solucionescard1 = (props) => {
  return (
    <div className={`solucionescard1-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="solucionescard1-image"
      />
    </div>
  )
}

Solucionescard1.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Solucionescard1.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Solucionescard1
