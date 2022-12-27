import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-suite.css'

const FeatureCardSuite = (props) => {
  return (
    <div className={`feature-card-suite-card ${props.rootClassName} `}></div>
  )
}

FeatureCardSuite.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCardSuite.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
}

export default FeatureCardSuite
