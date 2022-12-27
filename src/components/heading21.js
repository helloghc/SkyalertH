import React from 'react'

import PropTypes from 'prop-types'

import './heading21.css'

const Heading21 = (props) => {
  return (
    <div className={`heading21-container ${props.rootClassName} `}>
      <div className="heading21-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="heading21-image"
        />
        <div className="heading21-container2">
          <h2 className="heading21-text heading2">
            <span className="">{props.text}</span>
            <span className="heading21-text2"></span>
          </h2>
          <span className="heading21-text3">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Heading21.defaultProps = {
  image_alt: 'image',
  text: 'Empresas que también confían en ',
  rootClassName: '',
  text2: 'Generamos confianza por la calidad de nuestros servicios.',
  image_src: '/playground_assets/skyalert-%5B2%5D_22-300h.jpg',
}

Heading21.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
}

export default Heading21
