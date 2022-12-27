import React from 'react'

import PropTypes from 'prop-types'

import './bullet-tablaodd1.css'

const BulletTablaodd1 = (props) => {
  return (
    <div className={`bullet-tablaodd1-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-tablaodd1-image"
      />
      <div className="bullet-tablaodd1-container1">
        <h3 className="bullet-tablaodd1-text">{props.heading}</h3>
      </div>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="bullet-tablaodd1-image1"
      />
      <img
        alt={props.image_alt11}
        src={props.image_src11}
        className="bullet-tablaodd1-image2"
      />
    </div>
  )
}

BulletTablaodd1.defaultProps = {
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_src1: '/playground_assets/circulo-200h.png',
  image_alt1: 'image',
  image_alt11: 'image',
  image_src11: '/playground_assets/circulo-200h.png',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
  rootClassName: '',
}

BulletTablaodd1.propTypes = {
  heading: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src11: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BulletTablaodd1
