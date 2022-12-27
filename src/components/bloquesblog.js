import React from 'react'

import PropTypes from 'prop-types'

import './bloquesblog.css'

const Bloquesblog = (props) => {
  return (
    <div className={`bloquesblog-container ${props.rootClassName} `}>
      <div className="bloquesblog-container1">
        <div className="bloquesblog-container2">
          <h1>{props.heading}</h1>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="bloquesblog-image"
          />
          <span>{props.text}</span>
        </div>
        <div className="bloquesblog-container3">
          <h1>{props.heading1}</h1>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="bloquesblog-image1"
          />
          <span>{props.text1}</span>
        </div>
        <div className="bloquesblog-container4">
          <h1>{props.heading11}</h1>
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="bloquesblog-image2"
          />
          <span>{props.text11}</span>
        </div>
      </div>
    </div>
  )
}

Bloquesblog.defaultProps = {
  text1: 'Text',
  text: 'Text',
  heading1: 'Heading',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_alt11: 'image',
  rootClassName: '',
  text11: 'Text',
  heading11: 'Heading',
  heading: 'Heading',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Bloquesblog.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt11: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  heading11: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Bloquesblog
