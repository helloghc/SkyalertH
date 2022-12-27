import React from 'react'

import PropTypes from 'prop-types'

import TitulosDosColores from './titulos-dos-colores'
import './servidor-a-servidor.css'

const ServidorAServidor = (props) => {
  return (
    <div className={`servidor-a-servidor-container ${props.rootClassName} `}>
      <div id="stos" className="servidor-a-servidor-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="servidor-a-servidor-image"
        />
        <TitulosDosColores rootClassName="titulos-dos-colores-root-class-name1"></TitulosDosColores>
      </div>
    </div>
  )
}

ServidorAServidor.defaultProps = {
  image_alt: 'image',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
  rootClassName: '',
}

ServidorAServidor.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ServidorAServidor
