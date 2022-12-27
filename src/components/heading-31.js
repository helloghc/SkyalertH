import React from 'react'

import PropTypes from 'prop-types'

import './heading-31.css'

const Heading31 = (props) => {
  return (
    <div className={`heading-31-container ${props.rootClassName} `}>
      <h2 className="heading-31-text heading2">
        <span className="heading-31-text01">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading-31-text02">
          Tus suscripciones
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading-31-text03">
          hicieron posible que Chiapas, Veracruz, Morelos y Estado de México,
          tuvieran por primera vez un
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading-31-text04">
          sistema de alertamiento sísmico
        </span>
        <span className="heading-31-text05">.</span>
        <br className=""></br>
        <span className=""></span>
        <br className=""></br>
        <span className="">Con tu apoyo la cobertura seguirá creciendo.</span>
      </h2>
      <div className="heading-31-container1">
        <span className="heading-31-text10">{props.text}</span>
      </div>
    </div>
  )
}

Heading31.defaultProps = {
  text: 'Plataformas de descarga  en donde puedes encontrar SkyAlert',
  rootClassName: '',
}

Heading31.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Heading31
