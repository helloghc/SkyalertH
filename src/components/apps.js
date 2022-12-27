import React from 'react'

import PropTypes from 'prop-types'

import './apps.css'

const Apps = (props) => {
  return (
    <footer className={`apps-footer section-container ${props.rootClassName} `}>
      <div className="apps-container">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="apps-image"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="apps-image1"
        />
        <img
          alt={props.image_alt21}
          src={props.image_src21}
          className="apps-image2"
        />
      </div>
    </footer>
  )
}

Apps.defaultProps = {
  image_alt2: 'image',
  image_src1: '/playground_assets/skyalert-%5B2%5D_40-200h.jpg',
  image_alt21: 'image',
  image_src2: '/playground_assets/skyalert-%5B2%5D_42-200h.jpg',
  rootClassName: '',
  image_alt1: 'image',
  image_src21: '/playground_assets/skyalert-%5B2%5D_44-200h.png',
}

Apps.propTypes = {
  image_alt2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src21: PropTypes.string,
}

export default Apps
