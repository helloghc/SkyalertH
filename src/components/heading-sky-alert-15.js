import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './heading-sky-alert-15.css'

const HeadingSkyAlert15 = (props) => {
  return (
    <div className={`heading-sky-alert-15-container ${props.rootClassName} `}>
      <div className="heading-sky-alert-15-container1">
        <Solucionescard1 rootClassName="solucionescard1-root-class-name7"></Solucionescard1>
        <div className="heading-sky-alert-15-container2">
          <div className="heading-sky-alert-15-container3">
            <div className="heading-sky-alert-15-container4">
              <h1 className="heading-sky-alert-15-text">{props.heading1}</h1>
              <h1 className="heading-sky-alert-15-text1">{props.heading}</h1>
            </div>
            <span className="heading-sky-alert-15-text2">{props.text2}</span>
            <span className="heading-sky-alert-15-text3">{props.text1}</span>
            <span className="heading-sky-alert-15-text4">{props.text12}</span>
            <span className="heading-sky-alert-15-text5">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert15.defaultProps = {
  rootClassName: '',
  heading: 'Heading',
  text1: '¡Uso exclusivo para administradores!',
  text2: 'Toma el control de toda la información',
  heading1: 'Heading',
  text12: '¡Uso exclusivo para administradores!',
  text11: '¡Uso exclusivo para administradores!',
}

HeadingSkyAlert15.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  text12: PropTypes.string,
  text11: PropTypes.string,
}

export default HeadingSkyAlert15
