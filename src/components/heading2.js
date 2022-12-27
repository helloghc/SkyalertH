import React from 'react'

import PropTypes from 'prop-types'

import './heading2.css'

const Heading2 = (props) => {
  return (
    <div className={`heading2-container ${props.rootClassName} `}>
      <div className="heading2-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="img_shii heading2-image"
        />
        <div className="heading2-container2">
          <h2 className="heading2-text heading2">
            <span className="">{props.text}</span>
            <span className="heading2-text2">{props.text1}</span>
          </h2>
          <span className="heading2-text3">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Heading2.defaultProps = {
  text1: 'SkyAlert',
  rootClassName: '',
  image_src: '/playground_assets/skyalert-%5B2%5D_04-400h.png',
  text: 'Empresas que también confían en',
  text2: 'Generamos confianza por la calidad de nuestros servicios.',
  image_alt: 'image',
}

Heading2.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Heading2
