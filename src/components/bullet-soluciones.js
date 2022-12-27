import React from 'react'

import PropTypes from 'prop-types'

import './bullet-soluciones.css'

const BulletSoluciones = (props) => {
  return (
    <div className={`bullet-soluciones-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-soluciones-image"
      />
      <h3 className="bullet-soluciones-text">{props.heading}</h3>
    </div>
  )
}

BulletSoluciones.defaultProps = {
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_src: '/playground_assets/suite-de-soluciones_25-200w.png',
  image_alt: 'image',
  rootClassName: '',
}

BulletSoluciones.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BulletSoluciones
