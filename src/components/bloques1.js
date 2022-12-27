import React from 'react'

import PropTypes from 'prop-types'

import FeatureCardConTexto from './feature-card-con-texto'
import './bloques1.css'

const Bloques1 = (props) => {
  return (
    <div className={`bloques1-container ${props.rootClassName} `}>
      <div className="bloques1-container1"></div>
      <FeatureCardConTexto
        text="Al referirnos a intensidad, hablamos de qué tan fuerte es el movimiento que se genera en la superficie. Involucra factores como: tipo de suelo, distancia al epicentro, \n profundidad y magnitud"
        heading="Intensidad"
        image_src="/playground_assets/icons8-3d-touch-50-200h.png"
        rootClassName="feature-card-con-texto-root-class-name1"
      ></FeatureCardConTexto>
      <FeatureCardConTexto
        text="Al referirnos a magnitud  hacemos  referencia a la medición de la energía que es liberada por el sismo"
        heading="Magnitud"
        image_src="/playground_assets/icons8-depth-50-200h.png"
        rootClassName="feature-card-con-texto-root-class-name"
      ></FeatureCardConTexto>
    </div>
  )
}

Bloques1.defaultProps = {
  rootClassName: '',
}

Bloques1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Bloques1
