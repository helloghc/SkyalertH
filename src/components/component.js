import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-container1">
        <div className="component-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="component-image"
          />
          <h1 className="component-text">{props.heading}</h1>
          <span>{props.text}</span>
          <button className="component-button button">{props.button}</button>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Button',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Heading',
  text: 'Text',
  image_alt: 'image',
}

AppComponent.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
