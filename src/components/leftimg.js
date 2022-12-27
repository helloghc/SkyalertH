import React from 'react'

import PropTypes from 'prop-types'

import './leftimg.css'

const Leftimg = (props) => {
  return (
    <div className={`leftimg-container ${props.rootClassName} `}>
      <div className="leftimg-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="leftimg-image"
        />
        <h4 className="leftimg-text heading4">{props.heading}</h4>
        <span className="leftimg-text1 content-Light">{props.text}</span>
      </div>
    </div>
  )
}

Leftimg.defaultProps = {
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName: '',
  image_alt: 'image',
  heading: 'Search for ideas',
  rootClassName1: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Leftimg.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Leftimg
