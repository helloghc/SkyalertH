import React from 'react'

import PropTypes from 'prop-types'

import './titulos-dos-colores.css'

const TitulosDosColores = (props) => {
  return (
    <div className={`titulos-dos-colores-container ${props.rootClassName} `}>
      <h2 className="titulos-dos-colores-text heading2">
        <span className="">{props.text}</span>
        <span className="titulos-dos-colores-text2">{props.text1}</span>
      </h2>
    </div>
  )
}

TitulosDosColores.defaultProps = {
  rootClassName: '',
  text1: 'Servidor a Servidor',
  text: 'Integración ',
}

TitulosDosColores.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default TitulosDosColores
