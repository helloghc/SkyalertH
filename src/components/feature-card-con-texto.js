import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-con-texto.css'

const FeatureCardConTexto = (props) => {
  return (
    <div className={`feature-card-con-texto-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-con-texto-image"
      />
      <h4 className="feature-card-con-texto-text heading4">{props.heading}</h4>
      <span className="feature-card-con-texto-text1 content-Light">
        {props.text}
      </span>
    </div>
  )
}

FeatureCardConTexto.defaultProps = {
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName: '',
  heading: 'Search for ideas',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

FeatureCardConTexto.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCardConTexto
