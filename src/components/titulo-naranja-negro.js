import React from 'react'

import PropTypes from 'prop-types'

import Component5 from './component5'
import './titulo-naranja-negro.css'

const TituloNaranjaNegro = (props) => {
  return (
    <div className={`titulo-naranja-negro-container ${props.rootClassName} `}>
      <Component5></Component5>
    </div>
  )
}

TituloNaranjaNegro.defaultProps = {
  rootClassName: '',
}

TituloNaranjaNegro.propTypes = {
  rootClassName: PropTypes.string,
}

export default TituloNaranjaNegro
