import React from 'react'

import PropTypes from 'prop-types'

import FeatureCardSuite from './feature-card-suite'
import './heading-sky-alert-12.css'

const HeadingSkyAlert12 = (props) => {
  return (
    <div className={`heading-sky-alert-12-container ${props.rootClassName} `}>
      <div className="heading-sky-alert-12-container1">
        <div className="heading-sky-alert-12-container2">
          <FeatureCardSuite
            image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            rootClassName="feature-card-suite-root-class-name8"
            className=""
          ></FeatureCardSuite>
          <div className="heading-sky-alert-12-container3">
            <h1 className="heading-sky-alert-12-text">{props.heading}</h1>
            <span className="heading-sky-alert-12-text1">{props.text2}</span>
            <span className="heading-sky-alert-12-text2">{props.text1}</span>
            <span className="heading-sky-alert-12-text3">{props.text12}</span>
            <span className="heading-sky-alert-12-text4">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert12.defaultProps = {
  text12: '¡Uso exclusivo para administradores!',
  text11: '¡Uso exclusivo para administradores!',
  text2: 'Toma el control de toda la información',
  rootClassName: '',
  heading1: 'Heading',
  text1: '¡Uso exclusivo para administradores!',
  heading: 'Heading',
}

HeadingSkyAlert12.propTypes = {
  text12: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
}

export default HeadingSkyAlert12
