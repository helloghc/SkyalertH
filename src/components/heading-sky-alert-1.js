import React from 'react'

import PropTypes from 'prop-types'

import FeatureCardSuite from './feature-card-suite'
import './heading-sky-alert-1.css'

const HeadingSkyAlert1 = (props) => {
  return (
    <div className={`heading-sky-alert-1-container ${props.rootClassName} `}>
      <div className="heading-sky-alert-1-container1">
        <div className="heading-sky-alert-1-container2">
          <FeatureCardSuite
            image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            rootClassName="feature-card-suite-root-class-name6"
          ></FeatureCardSuite>
          <div className="heading-sky-alert-1-container3">
            <div className="heading-sky-alert-1-container4">
              <h1 className="heading-sky-alert-1-text">{props.heading1}</h1>
            </div>
            <span className="heading-sky-alert-1-text1">{props.text2}</span>
            <span className="heading-sky-alert-1-text2">{props.text1}</span>
            <span className="heading-sky-alert-1-text3">{props.text12}</span>
            <span className="heading-sky-alert-1-text4">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert1.defaultProps = {
  text2: 'Toma el control de toda la información',
  text1: '¡Uso exclusivo para administradores!',
  text12: '¡Uso exclusivo para administradores!',
  text11: '¡Uso exclusivo para administradores!',
  heading1: 'Heading',
  rootClassName: '',
}

HeadingSkyAlert1.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text11: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeadingSkyAlert1
