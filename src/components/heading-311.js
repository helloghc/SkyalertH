import React from 'react'

import PropTypes from 'prop-types'

import './heading-311.css'

const Heading311 = (props) => {
  return (
    <div className={`heading-311-container ${props.rootClassName} `}>
      <h2 className="heading-311-text heading2">
        <span className="heading-311-text1">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading-311-text2">
          10 años
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading-311-text3">
          siendo líderes en el desarrollo de soluciones tecnológicas en
          alertamiento sísmico y otros peligros naturale
        </span>
      </h2>
    </div>
  )
}

Heading311.defaultProps = {
  rootClassName: '',
}

Heading311.propTypes = {
  rootClassName: PropTypes.string,
}

export default Heading311
