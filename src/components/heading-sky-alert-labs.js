import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-labs.css'

const HeadingSkyAlertLabs = (props) => {
  return (
    <div
      id="labs"
      className={`heading-sky-alert-labs-container ${props.rootClassName} `}
    >
      <div className="heading-sky-alert-labs-container1">
        <Solucionescard1
          image_src="/playground_assets/suite-de-soluciones_101-200h.png"
          rootClassName="solucionescard1-root-class-name11"
        ></Solucionescard1>
        <div className="heading-sky-alert-labs-container2">
          <div className="heading-sky-alert-labs-container3">
            <div className="heading-sky-alert-labs-container4">
              <h1 className="heading-sky-alert-labs-text">{props.heading1}</h1>
              <h1 className="heading-sky-alert-labs-text1">{props.heading}</h1>
            </div>
            <span className="heading-sky-alert-labs-text2">{props.text2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlertLabs.defaultProps = {
  rootClassName: '',
  heading1: 'SkyAlert',
  heading: 'Desk',
  text2:
    'Software receptor para  alertamiento sísmico y otros peligros naturales.',
}

HeadingSkyAlertLabs.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
}

export default HeadingSkyAlertLabs
