import React from 'react'

import PropTypes from 'prop-types'

import './bullet-tablaodd.css'

const BulletTablaodd = (props) => {
  return (
    <div className={`bullet-tablaodd-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-tablaodd-image"
      />
      <div className="bullet-tablaodd-container1">
        <h3 className="bullet-tablaodd-text">{props.heading}</h3>
      </div>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="bullet-tablaodd-image1"
      />
      <span className="bullet-tablaodd-text1">{props.text}</span>
    </div>
  )
}

BulletTablaodd.defaultProps = {
  rootClassName: '',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
  text: '-',
  image_alt1: 'image',
  image_src1: '/playground_assets/circulo-200h.png',
}

BulletTablaodd.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default BulletTablaodd
