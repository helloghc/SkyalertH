import React from 'react'

import PropTypes from 'prop-types'

import './max-width.css'

const MaxWidth = (props) => {
  return (
    <div className="max-content-container homeskyapp max-width-max-width">
      <div className="max-width-cards-container">
        <div className="max-width-container">
          <div className="max-width-container1">
            <div className="max-width-card">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="max-width-image"
              />
              <h4 className="max-width-text heading4">{props.heading1}</h4>
              <span className="max-width-text01 content-Light">
                {props.text1}
              </span>
            </div>
            <div className="max-width-card1">
              <img
                alt={props.image_alt13}
                src={props.image_src13}
                className="max-width-image1"
              />
              <h4 className="max-width-text02 heading4">{props.heading13}</h4>
              <span className="max-width-text03 content-Light">
                {props.text13}
              </span>
            </div>
            <div className="max-width-card2">
              <img
                alt={props.image_alt12}
                src={props.image_src12}
                className="max-width-image2"
              />
              <h4 className="max-width-text04 heading4">{props.heading12}</h4>
              <span className="max-width-text05 content-Light">
                {props.text12}
              </span>
            </div>
          </div>
          <div className="max-width-container2">
            <div className="max-width-card3">
              <img
                alt={props.image_alt11}
                src={props.image_src11}
                className="max-width-image3"
              />
              <h4 className="max-width-text06 heading4">{props.heading11}</h4>
              <span className="max-width-text07 content-Light">
                {props.text11}
              </span>
            </div>
            <div className="max-width-card4">
              <img
                alt={props.image_alt112}
                src={props.image_src112}
                className="max-width-image4"
              />
              <h4 className="max-width-text08 heading4">{props.heading112}</h4>
              <span className="max-width-text09 content-Light">
                {props.text112}
              </span>
              <span className="">{props.text}</span>
            </div>
            <div className="max-width-card5">
              <img
                alt={props.image_alt111}
                src={props.image_src111}
                className="max-width-image5"
              />
              <h4 className="max-width-text11 heading4">{props.heading111}</h4>
              <span className="max-width-text12 content-Light">
                {props.text111}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MaxWidth.defaultProps = {
  image_alt112: 'image',
  rootClassName111: '',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src112: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt11: 'image',
  heading13: 'Search for ideas',
  heading1: 'Search for ideas',
  heading111: 'Search for ideas',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName1: '',
  image_src13: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src12: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text111:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName112: '',
  rootClassName: '',
  text11:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_alt1: 'image',
  image_alt13: 'image',
  image_alt12: 'image',
  text112:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading12: 'Search for ideas',
  text13:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_alt111: 'image',
  text: '*Sólo usuarios Gold',
  heading11: 'Search for ideas',
  rootClassName13: '',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading112: 'Search for ideas',
  rootClassName12: '',
  text12:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  rootClassName11: '',
}

MaxWidth.propTypes = {
  image_alt112: PropTypes.string,
  rootClassName111: PropTypes.string,
  image_src11: PropTypes.string,
  image_src111: PropTypes.string,
  image_src112: PropTypes.string,
  image_alt11: PropTypes.string,
  heading13: PropTypes.string,
  heading1: PropTypes.string,
  heading111: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName1: PropTypes.string,
  image_src13: PropTypes.string,
  image_src12: PropTypes.string,
  text111: PropTypes.string,
  rootClassName112: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt13: PropTypes.string,
  image_alt12: PropTypes.string,
  text112: PropTypes.string,
  heading12: PropTypes.string,
  text13: PropTypes.string,
  image_alt111: PropTypes.string,
  text: PropTypes.string,
  heading11: PropTypes.string,
  rootClassName13: PropTypes.string,
  text1: PropTypes.string,
  heading112: PropTypes.string,
  rootClassName12: PropTypes.string,
  text12: PropTypes.string,
  rootClassName11: PropTypes.string,
}

export default MaxWidth
