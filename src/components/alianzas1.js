import React from 'react'

import PropTypes from 'prop-types'

import './alianzas1.css'

const Alianzas1 = (props) => {
  return (
    <div className={`alianzas1-container ${props.rootClassName} `}>
      <div className="alianzas1-container1">
        <div className="alianzas1-container2">
          <div className="alianzas1-container3">
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="alianzas1-image"
            />
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="alianzas1-image1"
            />
            <span className="alianzas1-text">{props.text1}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Alianzas1.defaultProps = {
  image_alt2: 'image',
  text1:
    'Formamos parte de la red ARISE de la Agencia de las Naciones Unidas para la Reducción de Riesgos de Desastres de la ONU',
  rootClassName: '',
  image_src: '/playground_assets/por-que%CC%81-skyalert_07-200h.png',
  image_src2: '/playground_assets/por-que%CC%81-skyalert_071-200h.png',
  image_alt: 'image',
}

Alianzas1.propTypes = {
  image_alt2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Alianzas1
