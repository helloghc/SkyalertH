import React from 'react'

import PropTypes from 'prop-types'

import './bullet-soluciones11.css'

const BulletSoluciones11 = (props) => {
  return (
    <div className={`bullet-soluciones11-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-soluciones11-image"
      />
      <div className="bullet-soluciones11-container1">
        <h3 className="bullet-soluciones11-text">{props.heading}</h3>
        <span className="bullet-soluciones11-text1">{props.text}</span>
      </div>
    </div>
  )
}

BulletSoluciones11.defaultProps = {
  image_alt: 'image',
  text: 'Text',
  rootClassName: '',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_src: '/playground_assets/suite-de-soluciones_25-200w.png',
}

BulletSoluciones11.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default BulletSoluciones11
