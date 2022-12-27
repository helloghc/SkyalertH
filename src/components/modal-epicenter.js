import React from 'react'

import PropTypes from 'prop-types'

import './modal-epicenter.css'

const ModalEpicenter = (props) => {
  return (
    <div className={`modal-epicenter-container ${props.rootClassName} `}></div>
  )
}

ModalEpicenter.defaultProps = {
  rootClassName: '',
}

ModalEpicenter.propTypes = {
  rootClassName: PropTypes.string,
}

export default ModalEpicenter
