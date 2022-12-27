import React from 'react'

import PropTypes from 'prop-types'

import './bloques.css'

const Bloques = (props) => {
  return (
    <div className={`bloques-container ${props.rootClassName} `}>
      <div className="bloques-container1">
        <h1 className="">{props.heading}</h1>
        <h1 className="bloques-text01">{props.heading2}</h1>
      </div>
      <div className="bloques-container2">
        <div className="bloques-card">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="bloques-image"
          />
          <h4 className="bloques-text02 heading4">{props.heading3}</h4>
          <span className="bloques-text03 content-Light">{props.text}</span>
        </div>
        <div className="bloques-card1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="bloques-image1"
          />
          <h4 className="bloques-text04 heading4">{props.heading31}</h4>
          <span className="bloques-text05 content-Light">{props.text1}</span>
        </div>
      </div>
      <div className="bloques-container3">
        <div className="bloques-card2">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="bloques-image2"
          />
          <h4 className="bloques-text06 heading4">{props.heading32}</h4>
          <span className="bloques-text07 content-Light">{props.text2}</span>
        </div>
        <div className="bloques-card3">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="bloques-image3"
          />
          <h4 className="bloques-text08 heading4">{props.heading311}</h4>
          <span className="bloques-text09 content-Light">{props.text11}</span>
        </div>
      </div>
    </div>
  )
}

Bloques.defaultProps = {
  heading: 'Proceso de',
  image_alt11: 'image',
  heading31: 'Search for ideas',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading32: 'Search for ideas',
  image_alt2: 'image',
  heading1: 'Alertas de eventos',
  image_alt: 'image',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName12: '',
  text11:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading3: 'Search for ideas',
  heading2: 'Alertas de eventos',
  text2:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  rootClassName1: '',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading311: 'Search for ideas',
  rootClassName11: '',
  rootClassName111: '',
  rootClassName: '',
}

Bloques.propTypes = {
  heading: PropTypes.string,
  image_alt11: PropTypes.string,
  heading31: PropTypes.string,
  image_src1: PropTypes.string,
  heading32: PropTypes.string,
  image_alt2: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName12: PropTypes.string,
  text11: PropTypes.string,
  image_src2: PropTypes.string,
  heading3: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName1: PropTypes.string,
  text: PropTypes.string,
  heading311: PropTypes.string,
  rootClassName11: PropTypes.string,
  rootClassName111: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Bloques
