import React from 'react'

import PropTypes from 'prop-types'

import './dos-imgenes-al-lado.css'

const DosImgenesAlLado = (props) => {
  return (
    <div className={`dos-imgenes-al-lado-container ${props.rootClassName} `}>
      <div className="dos-imgenes-al-lado-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="dos-imgenes-al-lado-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="dos-imgenes-al-lado-image1"
        />
      </div>
    </div>
  )
}

DosImgenesAlLado.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  image_src: '/playground_assets/por-que%CC%81-skyalert_44-200h.png',
  image_src1: '/playground_assets/por-que%CC%81-skyalert_46-200h.png',
  image_alt: 'image',
}

DosImgenesAlLado.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default DosImgenesAlLado
