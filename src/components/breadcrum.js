import React from 'react'

import PropTypes from 'prop-types'

import './breadcrum.css'

const Breadcrum = (props) => {
  return (
    <div className={`breadcrum-container ${props.rootClassName} `}>
      <span>{props.text}</span>
      <span className="breadcrum-text1">{props.text1}</span>
      <span className="breadcrum-text2">{props.text2}</span>
    </div>
  )
}

Breadcrum.defaultProps = {
  rootClassName: '',
  text: 'Home ',
  text1: ' / ',
  text2: 'Suite de Soluciones',
}

Breadcrum.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default Breadcrum
