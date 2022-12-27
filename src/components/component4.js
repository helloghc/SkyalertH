import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="img_shii component4-image"
      />
      <div className="component4-container1">
        <h2 className="component4-text heading2">
          <span>
            Nuestros clientes reconocen nuestro valor
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="component4-text2">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
        <span className="component4-text3">{props.text}</span>
      </div>
    </div>
  )
}

Component4.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: ' ',
  image_src: '/playground_assets/skyalert-%5B2%5D_04-200w.png',
}

Component4.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component4
