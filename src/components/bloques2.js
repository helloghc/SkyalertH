import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'
import './bloques2.css'

const Bloques2 = (props) => {
  return (
    <div className={`bloques2-container ${props.rootClassName} `}>
      <div className="bloques2-container1">
        <h1 className="">{props.heading}</h1>
        <h1 className="bloques2-text1">{props.heading2}</h1>
      </div>
      <div className="bloques2-container2">
        <FeatureCard
          text="SkyAlert identifica el peligro con potencial de hacer daño a personas y/o infraestructura.\n"
          heading=" "
          image_src="/playground_assets/icons8-clock-50-200h.png"
          rootClassName="feature-card-root-class-name9"
          className=""
        ></FeatureCard>
        <FeatureCard
          text="Se envía alerta a cada dispositivo dentro del área de impacto seleccionada de acuerdo a la intensidad del peligro, tiempo estimado de arribo y duración.\n"
          heading=" "
          image_src="/playground_assets/icons8-clock-50-200h.png"
          rootClassName="feature-card-root-class-name10"
          className=""
        ></FeatureCard>
      </div>
      <div className="bloques2-container3">
        <FeatureCard
          text="Se procesa y valida la información para determinar la zona a ser alertada por el peligro en observación, dividida en radios de alertamiento."
          heading=" "
          image_src="/playground_assets/icons8-clock-50-200h.png"
          rootClassName="feature-card-root-class-name22"
          className=""
        ></FeatureCard>
        <FeatureCard
          text="Los eventos alertados son registrados en cada dispositivo que recibió el alertamiento, con información adicional sobre el  peligro."
          heading=" "
          image_src="/playground_assets/icons8-clock-50-200h.png"
          rootClassName="feature-card-root-class-name23"
          className=""
        ></FeatureCard>
      </div>
    </div>
  )
}

Bloques2.defaultProps = {
  heading: 'Proceso de',
  rootClassName: '',
  heading2: 'alertas de eventos',
  heading1: 'Alertas de eventos',
}

Bloques2.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
}

export default Bloques2
