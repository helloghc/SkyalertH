import React from 'react'

import PropTypes from 'prop-types'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className={`copyright-copyright ${props.rootClassName} `}>
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">
          <span className="copyright-text1">
            Copyright 2012 – 2022 | All Rights Reserved
          </span>
        </span>
      </div>
    </div>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
