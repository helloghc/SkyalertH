import React from 'react'

import PropTypes from 'prop-types'

import './sky-s-o-s.css'

const SkySOS = (props) => {
  return (
    <div className={`sky-s-o-s-container ${props.rootClassName} `}>
      <h2 className="sky-s-o-s-text heading2">
        <span className="">{props.text}</span>
        <span className="sky-s-o-s-text2">{props.text1}</span>
      </h2>
      <h1 className="sky-s-o-s-text3">{props.heading1}</h1>
    </div>
  )
}

SkySOS.defaultProps = {
  rootClassName: '',
  text: 'SkyAlert ',
  heading1: '(Safety Organization System)',
  text1: 'SOS',
}

SkySOS.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
}

export default SkySOS
