import React from 'react'

import PropTypes from 'prop-types'

import './heading-21-subt-blog.css'

const Heading21SubtBlog = (props) => {
  return (
    <div className={`heading-21-subt-blog-container ${props.rootClassName} `}>
      <div className="heading-21-subt-blog-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="heading-21-subt-blog-image"
        />
        <div className="heading-21-subt-blog-container2">
          <h2 className="heading-21-subt-blog-text heading2">
            <span className="">{props.text}</span>
            <span className="heading-21-subt-blog-text2">{props.text1}</span>
          </h2>
          <span className="heading-21-subt-blog-text3">{props.text2}</span>
          <span className="heading-21-subt-blog-text4">{props.text21}</span>
        </div>
      </div>
    </div>
  )
}

Heading21SubtBlog.defaultProps = {
  image_alt: 'image',
  text2: 'Text',
  rootClassName: '',
  text1: '&#8203;',
  text: 'Empresas que también confían en ',
  text21: 'Text',
  image_src: '04540208-63cf-4476-8faa-c15e7bd7f236',
}

Heading21SubtBlog.propTypes = {
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text21: PropTypes.string,
  image_src: PropTypes.string,
}

export default Heading21SubtBlog
