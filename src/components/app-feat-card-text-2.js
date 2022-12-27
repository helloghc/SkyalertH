import React from 'react'

import PropTypes from 'prop-types'

import './app-feat-card-text-2.css'

const AppFeatCardText2 = (props) => {
  return (
    <div className={`app-feat-card-text-2-container ${props.rootClassName} `}>
      <div className="app-feat-card-text-2-container1">
        <div className="app-feat-card-text-2-card">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="app-feat-card-text-2-image"
          />
          <h4 className="app-feat-card-text-2-text heading4">
            {props.heading2}
          </h4>
          <span className="app-feat-card-text-2-text01 content-Light">
            {props.text2}
          </span>
        </div>
        <div className="app-feat-card-text-2-card1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="app-feat-card-text-2-image1"
          />
          <h4 className="app-feat-card-text-2-text02 heading4">
            {props.heading1}
          </h4>
          <span className="app-feat-card-text-2-text03 content-Light">
            {props.text1}
          </span>
        </div>
        <div className="app-feat-card-text-2-card2">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="app-feat-card-text-2-image2"
          />
          <h4 className="app-feat-card-text-2-text04 heading4">
            {props.heading11}
          </h4>
          <span className="app-feat-card-text-2-text05 content-Light">
            {props.text11}
          </span>
        </div>
      </div>
      <div className="app-feat-card-text-2-container2">
        <div className="app-feat-card-text-2-card3">
          <img
            alt={props.image_alt21}
            src={props.image_src21}
            className="app-feat-card-text-2-image3"
          />
          <h4 className="app-feat-card-text-2-text06 heading4">
            {props.heading21}
          </h4>
          <span className="app-feat-card-text-2-text07 content-Light">
            {props.text21}
          </span>
        </div>
        <div className="app-feat-card-text-2-card4">
          <img
            alt={props.image_alt12}
            src={props.image_src12}
            className="app-feat-card-text-2-image4"
          />
          <h4 className="app-feat-card-text-2-text08 heading4">
            {props.heading12}
          </h4>
          <span className="app-feat-card-text-2-text09 content-Light">
            {props.text12}
          </span>
          <span>{props.text}</span>
        </div>
        <div className="app-feat-card-text-2-card5">
          <img
            alt={props.image_alt111}
            src={props.image_src111}
            className="app-feat-card-text-2-image5"
          />
          <h4 className="app-feat-card-text-2-text11 heading4">
            {props.heading111}
          </h4>
          <span className="app-feat-card-text-2-text12 content-Light">
            {props.text111}
          </span>
        </div>
      </div>
    </div>
  )
}

AppFeatCardText2.defaultProps = {
  heading11: 'Search for ideas',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName111: '',
  text21:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text: '*Sólo usuarios Gold',
  image_src21: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName2: '',
  heading21: 'Search for ideas',
  heading111: 'Search for ideas',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName1: '',
  heading12: 'Search for ideas',
  image_alt21: 'image',
  heading1: 'Search for ideas',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src12: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt2: 'image',
  image_alt1: 'image',
  text111:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_alt12: 'image',
  image_alt11: 'image',
  text12:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName: '',
  heading2: 'Search for ideas',
  image_alt111: 'image',
  rootClassName11: '',
  rootClassName21: '',
  rootClassName12: '',
  text2:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text11:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
}

AppFeatCardText2.propTypes = {
  heading11: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName111: PropTypes.string,
  text21: PropTypes.string,
  text: PropTypes.string,
  image_src21: PropTypes.string,
  rootClassName2: PropTypes.string,
  heading21: PropTypes.string,
  heading111: PropTypes.string,
  image_src2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName1: PropTypes.string,
  heading12: PropTypes.string,
  image_alt21: PropTypes.string,
  heading1: PropTypes.string,
  image_src11: PropTypes.string,
  image_src111: PropTypes.string,
  image_src12: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  text111: PropTypes.string,
  image_alt12: PropTypes.string,
  image_alt11: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  image_alt111: PropTypes.string,
  rootClassName11: PropTypes.string,
  rootClassName21: PropTypes.string,
  rootClassName12: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
}

export default AppFeatCardText2
