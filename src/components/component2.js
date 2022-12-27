import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container heading_b1">
      <div className="component2-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="icon_b1 component2-image"
        />
        <div className="component2-container2 heading2 text_b1">
          <h2 className="component2-text">
            <span>
              Soluciones de alertamiento sísmico y otros peligros naturales
            </span>
            <span className="component2-text2"></span>
          </h2>
          <span className="component2-text3">{props.text}</span>
          <span className="component2-text4">{props.text1}</span>
          <span className="component2-text5">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  image_alt: 'image',
  text1:
    'El desarrollo y las soluciones tecnológicas de SkyAlert nos permiten ofrecer el servicio a empresas, organizaciones y particulares.',
  text2: ' ',
  text: 'Nuestro objetivo es brindarte las herramientas adecuadas para que puedas estar prevenido ante un evento sísmico o cualquier otro peligro natural.',
  image_src: '/playground_assets/skyalert-%5B2%5D_22-300h.jpg',
}

Component2.propTypes = {
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component2
