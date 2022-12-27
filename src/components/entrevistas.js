import React from 'react'

import PropTypes from 'prop-types'

import './entrevistas.css'

const Entrevistas = (props) => {
  return (
    <div className={`entrevistas-container ${props.rootClassName} `}>
      <div className="entrevistas-container1">
        <div className="entrevistas-container2">
          <img
            alt="image"
            src="/playground_assets/prensa_12-500h.png"
            className="entrevistas-image"
          />
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="entrevistas-image1"
          />
          <span className="entrevistas-text">{props.text1}</span>
          <span className="entrevistas-text1">{props.text}</span>
          <button className="entrevistas-button button">{props.button}</button>
        </div>
        <div className="entrevistas-container3">
          <img
            alt="image"
            src="/playground_assets/prensa_12-500h.png"
            className="entrevistas-image2"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="entrevistas-image3"
          />
          <span className="entrevistas-text2">{props.text11}</span>
          <span className="entrevistas-text3">{props.text2}</span>
          <button className="entrevistas-button1 button">
            {props.button1}
          </button>
        </div>
      </div>
    </div>
  )
}

Entrevistas.defaultProps = {
  button: 'Ver Entrevista',
  text2: 'Text',
  image_alt: 'image',
  rootClassName: '',
  image_alt1: 'image',
  image_alt21: 'image',
  image_src: '/playground_assets/por-que%CC%81-skyalert_07-500h.png',
  image_src21: 'f5838a4d-e486-4b54-8302-e2fa422287ca',
  button1: 'Ver Entrevista',
  text: 'Text',
  image_src1: '/playground_assets/por-que%CC%81-skyalert_07-500h.png',
  text1:
    'Formamos parte de la red ARISE de la Agencia de las Naciones Unidas para la Reducción de Riesgos de Desastres de la ONU',
  image_alt2: 'image',
  image_src2: 'f5838a4d-e486-4b54-8302-e2fa422287ca',
  text11:
    'Formamos parte de la red ARISE de la Agencia de las Naciones Unidas para la Reducción de Riesgos de Desastres de la ONU',
}

Entrevistas.propTypes = {
  button: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src: PropTypes.string,
  image_src21: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  text11: PropTypes.string,
}

export default Entrevistas
