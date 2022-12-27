import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-con-texto-a-p-p.css'

const FeatureCardConTextoAPP = (props) => {
  return (
    <div className="feature-card-con-texto-a-p-p-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-con-texto-a-p-p-image"
      />
      <h4 className="feature-card-con-texto-a-p-p-text heading4">
        {props.heading}
      </h4>
      <span className="feature-card-con-texto-a-p-p-text1 content-Light">
        {props.text}
      </span>
    </div>
  )
}

FeatureCardConTextoAPP.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Search for ideas',
}

FeatureCardConTextoAPP.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default FeatureCardConTextoAPP
