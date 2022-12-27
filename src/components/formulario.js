import React from 'react'

import PropTypes from 'prop-types'

import './formulario.css'

const Formulario = (props) => {
  return (
    <div className="formulario-container">
      <form className="formulario-form">
        <label>{props.text1}</label>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="input"
        />
        <label>{props.text}</label>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="input"
        />
      </form>
    </div>
  )
}

Formulario.defaultProps = {
  textinput_placeholder: 'placeholder',
  textinput_placeholder1: 'placeholder',
  text: 'Label',
  text1: 'Label',
}

Formulario.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Formulario
