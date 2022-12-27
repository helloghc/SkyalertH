import React from 'react'

import PropTypes from 'prop-types'

import './rightimg.css'

const Rightimg = (props) => {
  return (
    <div className={`rightimg-container ${props.rootClassName} `}>
      <div className="rightimg-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="rightimg-image"
        />
        <h4 className="rightimg-text heading4">{props.heading}</h4>
        <span className="rightimg-text1 content-Light">{props.text}</span>
      </div>
    </div>
  )
}

Rightimg.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName1: '',
  image_alt: 'image',
  heading: 'Search for ideas',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName: '',
}

Rightimg.propTypes = {
  image_src: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Rightimg
