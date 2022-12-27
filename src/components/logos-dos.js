import React from 'react'

import PropTypes from 'prop-types'

import './logos-dos.css'

const LogosDos = (props) => {
  return <div className={`logos-dos-container ${props.rootClassName} `}></div>
}

LogosDos.defaultProps = {
  rootClassName: '',
}

LogosDos.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogosDos
