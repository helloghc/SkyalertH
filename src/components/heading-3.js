import React from 'react'

import PropTypes from 'prop-types'

import './heading-3.css'

const Heading3 = (props) => {
  return (
    <div className={`heading-3-container ${props.rootClassName} `}>
      <h2 className="heading-3-text heading2">
        <span className="heading-3-text1">
          &quot;Los terremotos han matado a más personas que cualquier otro tipo
          de peligro natural en los últimos 20 años...&quot;
        </span>
      </h2>
    </div>
  )
}

Heading3.defaultProps = {
  rootClassName: '',
}

Heading3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Heading3
