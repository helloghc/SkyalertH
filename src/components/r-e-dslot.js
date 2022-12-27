import React from 'react'

import PropTypes from 'prop-types'

import './r-e-dslot.css'

const REDslot = (props) => {
  return (
    <div className={`r-e-dslot-container ${props.rootClassName} `}>
      <div className="r-e-dslot-container1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="r-e-dslot-image"
        />
        <span className="r-e-dslot-text">{props.text}</span>
        <span className="r-e-dslot-text1">{props.text1}</span>
        <span className="r-e-dslot-text2">{props.text2}</span>
      </div>
      <div className="r-e-dslot-container2">
        <div className="r-e-dslot-card">
          <h1 className="r-e-dslot-text3">{props.heading}</h1>
          <h1 className="r-e-dslot-text4">{props.heading2}</h1>
          <span className="r-e-dslot-text5">{props.text3}</span>
        </div>
        <div className="r-e-dslot-card1">
          <h1 className="r-e-dslot-text6">{props.heading1}</h1>
          <h1 className="r-e-dslot-text7">{props.heading11}</h1>
          <span className="r-e-dslot-text8">{props.text31}</span>
        </div>
      </div>
    </div>
  )
}

REDslot.defaultProps = {
  rootClassName: '',
  heading2: 'cobertura',
  heading1: '+120',
  rootClassName1: '',
  text31:
    'esta red inteligente puede confirmar  o descartar un sismo en milisegundos.',
  heading11: 'sensores',
  image_src1: '/playground_assets/descarga-200h.png',
  text: 'Al ser una iniciativa privada, comprometida con la seguridad de la población,  desde 2014 contamos con nuestra propia red de sensores sísmicos.',
  text1:
    'Contamos con más de 120 sensores en los estados con mayor peligro sísmico,  los cuales cubren todo el Pacífico, desde Jalisco hasta Chiapas, además de  Ciudad de México y los estados de Morelos, Puebla, Hidalgo, Estado de México  y Veracruz.',
  text3: 'de las zonas de mayor peligro  sísmico en México.',
  heading: '80%',
  text2:
    'REDSkyAlert es fuente propia para nuestras alertas sísmicas que cuenta con la capacidad de confirmar o descartar un sismo en tan solo milisegundos.',
  image_alt1: 'image',
}

REDslot.propTypes = {
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName1: PropTypes.string,
  text31: PropTypes.string,
  heading11: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default REDslot
