import React from 'react'

import PropTypes from 'prop-types'

import './alianzas.css'

const Alianzas = (props) => {
  return (
    <div className={`alianzas-container ${props.rootClassName} `}>
      <div className="alianzas-container1">
        <div className="alianzas-container2">
          <div className="alianzas-container3">
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="alianzas-image"
            />
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="alianzas-image1"
            />
            <span className="alianzas-text">{props.text1}</span>
          </div>
        </div>
        <div className="alianzas-container4">
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="alianzas-image2"
          />
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="alianzas-image3"
          />
          <span className="alianzas-text1">{props.text11}</span>
        </div>
      </div>
    </div>
  )
}

Alianzas.defaultProps = {
  text1:
    'Formamos parte de la red ARISE de la Agencia de las Naciones Unidas para la Reducción de Riesgos de Desastres de la ONU',
  image_alt3: 'image',
  image_alt2: 'image',
  image_alt1: 'image',
  image_alt: 'image',
  text11:
    'Somos socios oficiales del Servicio Geológico de los Estados Unidos (USGS) desde el 2018',
  image_src3: '/playground_assets/por-que%CC%81-skyalert_071-400h.png',
  rootClassName: '',
  image_src: '/playground_assets/por-que%CC%81-skyalert_07-400h.png',
  image_src1: '/playground_assets/por-que%CC%81-skyalert_09-400h.png',
  image_src2: '/playground_assets/por-que%CC%81-skyalert_071-400h.png',
}

Alianzas.propTypes = {
  text1: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  text11: PropTypes.string,
  image_src3: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
}

export default Alianzas
