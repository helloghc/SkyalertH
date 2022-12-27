import React from 'react'

import PropTypes from 'prop-types'

import './por-nuestro-gran.css'

const PorNuestroGran = (props) => {
  return (
    <div className={`por-nuestro-gran-container ${props.rootClassName} `}>
      <div className="por-nuestro-gran-container1">
        <h1 className="por-nuestro-gran-text">{props.heading}</h1>
        <h1 className="por-nuestro-gran-text1">{props.heading1}</h1>
        <div className="por-nuestro-gran-container2">
          <h1 className="por-nuestro-gran-text2">{props.heading2}</h1>
          <h1 className="por-nuestro-gran-text3">{props.heading3}</h1>
          <h1 className="por-nuestro-gran-text4">{props.heading4}</h1>
        </div>
        <h1 className="por-nuestro-gran-text5">{props.heading5}</h1>
      </div>
    </div>
  )
}

PorNuestroGran.defaultProps = {
  heading: 'Por nuestro gran avance e innovación',
  heading4: 'a nivel nacional',
  heading3: 'reconocimientos',
  heading2: 'diferentes',
  heading5: 'e internacional',
  rootClassName: '',
  heading1: 'SkyAlert ha sido merecedor de',
}

PorNuestroGran.propTypes = {
  heading: PropTypes.string,
  heading4: PropTypes.string,
  heading3: PropTypes.string,
  heading2: PropTypes.string,
  heading5: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default PorNuestroGran
