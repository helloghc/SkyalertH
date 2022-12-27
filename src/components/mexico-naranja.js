import React from 'react'

import PropTypes from 'prop-types'

import './mexico-naranja.css'

const MexicoNaranja = (props) => {
  return (
    <div className={`mexico-naranja-container ${props.rootClassName} `}>
      <div className="mexico-naranja-container1">
        <h1 className="mexico-naranja-text">{props.heading}</h1>
        <h1 className="mexico-naranja-text1">{props.heading1}</h1>
        <h1 className="mexico-naranja-text2">{props.heading2}</h1>
      </div>
      <h1 className="mexico-naranja-text3">{props.heading3}</h1>
      <h1 className="mexico-naranja-text4">{props.heading4}</h1>
      <h1 className="mexico-naranja-text5">{props.heading5}</h1>
    </div>
  )
}

MexicoNaranja.defaultProps = {
  heading3: 'alertamiento sísmico y otros peligros',
  heading5: 'organismos internacionales',
  heading1: 'México',
  heading: 'En',
  rootClassName: '',
  heading4: 'naturales que cuenta con el aval de',
  heading2: 'somos la única empresa de',
}

MexicoNaranja.propTypes = {
  heading3: PropTypes.string,
  heading5: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  heading4: PropTypes.string,
  heading2: PropTypes.string,
}

export default MexicoNaranja
