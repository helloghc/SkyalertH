import React from 'react'

import PropTypes from 'prop-types'

import './heading-sky-alert-13.css'

const HeadingSkyAlert13 = (props) => {
  return (
    <div className={`heading-sky-alert-13-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="heading-sky-alert-13-image"
      />
      <h1 className="heading-sky-alert-13-text">{props.heading}</h1>
      <div className="heading-sky-alert-13-container1">
        <div className="heading-sky-alert-13-container2">
          <span>{props.text}</span>
          <span className="heading-sky-alert-13-text2">{props.text1}</span>
        </div>
        <span>{props.text2}</span>
      </div>
      <div className="heading-sky-alert-13-container3">
        <div className="heading-sky-alert-13-card">
          <img
            alt={props.image_alt11}
            src={props.image_src11}
            className="heading-sky-alert-13-image1"
          />
          <h4 className="heading-sky-alert-13-text4 heading4">
            {props.heading11}
          </h4>
          <span className="heading-sky-alert-13-text5 content-Light">
            {props.text31}
          </span>
        </div>
        <div className="heading-sky-alert-13-card1">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="heading-sky-alert-13-image2"
          />
          <h4 className="heading-sky-alert-13-text6 heading4">
            {props.heading111}
          </h4>
          <span className="heading-sky-alert-13-text7 content-Light">
            {props.text311}
          </span>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert13.defaultProps = {
  rootClassName: '',
  text2: 'con la intensidad local esperada.',
  rootClassName111: '',
  image_src: '/playground_assets/redskyalert_10-400h.png',
  text31:
    'Solo se mueven objetos colgantes. No suelen causar daños a estructuras.',
  heading11: 'Débil',
  text1: '“SISMO DETECTADO”',
  text311: 'Llegan a sentirse, pero no suelen  ser destructivos.',
  image_alt11: 'image',
  heading: 'Sismo Detectado',
  image_alt: 'image',
  heading111: 'Leve',
  rootClassName11: '',
  image_src11: '/playground_assets/redskyalert_19-200h.png',
  image_src1: '/playground_assets/redskyalert_13-200h.png',
  text: 'Se escucha un tono corto y una voz de',
  image_alt1: 'image',
}

HeadingSkyAlert13.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  rootClassName111: PropTypes.string,
  image_src: PropTypes.string,
  text31: PropTypes.string,
  heading11: PropTypes.string,
  text1: PropTypes.string,
  text311: PropTypes.string,
  image_alt11: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  heading111: PropTypes.string,
  rootClassName11: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default HeadingSkyAlert13
