import React from 'react'

import PropTypes from 'prop-types'

import TitulosDosColores1 from './titulos-dos-colores1'
import './servidor-a-cliente.css'

const ServidorACliente = (props) => {
  return (
    <div className={`servidor-a-cliente-container ${props.rootClassName} `}>
      <div id="stoc" className="servidor-a-cliente-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="servidor-a-cliente-image"
        />
        <TitulosDosColores1 rootClassName="titulos-dos-colores1-root-class-name"></TitulosDosColores1>
      </div>
    </div>
  )
}

ServidorACliente.defaultProps = {
  rootClassName: '',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
  image_alt: 'image',
}

ServidorACliente.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ServidorACliente
