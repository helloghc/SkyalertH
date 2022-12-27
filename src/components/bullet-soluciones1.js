import React from 'react'

import PropTypes from 'prop-types'

import './bullet-soluciones1.css'

const BulletSoluciones1 = (props) => {
  return (
    <div className="bullet-soluciones1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-soluciones1-image"
      />
      <h3 className="bullet-soluciones1-text">{props.heading}</h3>
    </div>
  )
}

BulletSoluciones1.defaultProps = {
  image_alt: 'image',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_src: '/playground_assets/suite-de-soluciones_25-200w.png',
  rootClassName: '',
}

BulletSoluciones1.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BulletSoluciones1
