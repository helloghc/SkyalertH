import React from 'react'

import PropTypes from 'prop-types'

import './a-p-p-featured-card-texto-1.css'

const APPFeaturedCardTexto1 = (props) => {
  return (
    <div className="a-p-p-featured-card-texto-1-container">
      <div className="a-p-p-featured-card-texto-1-container1"></div>
      <div className="a-p-p-featured-card-texto-1-card">
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="a-p-p-featured-card-texto-1-image"
        />
        <h4 className="a-p-p-featured-card-texto-1-text heading4">
          {props.heading2}
        </h4>
        <span className="a-p-p-featured-card-texto-1-text1 content-Light">
          {props.text2}
        </span>
      </div>
      <div className="a-p-p-featured-card-texto-1-card1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="a-p-p-featured-card-texto-1-image1"
        />
        <h4 className="a-p-p-featured-card-texto-1-text2 heading4">
          {props.heading1}
        </h4>
        <span className="a-p-p-featured-card-texto-1-text3 content-Light">
          {props.text1}
        </span>
      </div>
      <div className="a-p-p-featured-card-texto-1-card2">
        <img
          alt={props.image_alt11}
          src={props.image_src11}
          className="a-p-p-featured-card-texto-1-image2"
        />
        <h4 className="a-p-p-featured-card-texto-1-text4 heading4">
          {props.heading11}
        </h4>
        <span className="a-p-p-featured-card-texto-1-text5 content-Light">
          {props.text11}
        </span>
      </div>
    </div>
  )
}

APPFeaturedCardTexto1.defaultProps = {
  rootClassName11: '',
  rootClassName2: '',
  image_alt11: 'image',
  rootClassName1: '',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt2: 'image',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading2: 'Search for ideas',
  heading11: 'Search for ideas',
  image_alt1: 'image',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading1: 'Search for ideas',
  text2:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text11:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

APPFeaturedCardTexto1.propTypes = {
  rootClassName11: PropTypes.string,
  rootClassName2: PropTypes.string,
  image_alt11: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  heading2: PropTypes.string,
  heading11: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  image_src1: PropTypes.string,
}

export default APPFeaturedCardTexto1
