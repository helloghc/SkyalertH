import React from 'react'

import PropTypes from 'prop-types'

import './bullet-tablao.css'

const BulletTablao = (props) => {
  return (
    <div className={`bullet-tablao-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="bullet-tablao-image"
      />
      <div className="bullet-tablao-container1">
        <h3 className="bullet-tablao-text">{props.heading}</h3>
      </div>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="bullet-tablao-image1"
      />
      <span className="bullet-tablao-text1">{props.text}</span>
    </div>
  )
}

BulletTablao.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  text: 'X',
  image_src1: '/playground_assets/circulo-200h.png',
  rootClassName: '',
  image_alt: 'image',
  heading: 'Distribución masiva y de bajo costo de alertamiento temprano',
}

BulletTablao.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default BulletTablao
