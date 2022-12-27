import React from 'react'

import PropTypes from 'prop-types'

import './sky-alert-otros.css'

const SkyAlertOtros = (props) => {
  return (
    <div className={`sky-alert-otros-container ${props.rootClassName} `}>
      <div className="sky-alert-otros-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="sky-alert-otros-image"
        />
        <div className="sky-alert-otros-container2">
          <h3 className="sky-alert-otros-text">{props.heading}</h3>
        </div>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="sky-alert-otros-image1"
        />
        <span className="sky-alert-otros-text1">{props.text}</span>
      </div>
    </div>
  )
}

SkyAlertOtros.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src1: '/playground_assets/logo1-200h.png',
  image_alt1: 'image',
  image_alt: 'image',
  rootClassName: '',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  text: 'Otros',
}

SkyAlertOtros.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default SkyAlertOtros
