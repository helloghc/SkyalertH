import React from 'react'

import PropTypes from 'prop-types'

import './bullet-tablao1.css'

const BulletTablao1 = (props) => {
  return (
    <div className={`bullet-tablao1-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-tablao1-image"
      />
      <div className="bullet-tablao1-container1">
        <h3 className="bullet-tablao1-text">{props.heading}</h3>
      </div>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="bullet-tablao1-image1"
      />
      <img
        alt={props.image_alt11}
        src={props.image_src11}
        className="bullet-tablao1-image2"
      />
    </div>
  )
}

BulletTablao1.defaultProps = {
  image_alt1: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_alt: 'image',
  image_src11: '/playground_assets/circulo-200h.png',
  image_src1: '/playground_assets/circulo-200h.png',
  image_alt11: 'image',
}

BulletTablao1.propTypes = {
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt11: PropTypes.string,
}

export default BulletTablao1
