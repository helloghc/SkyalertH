import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <div className="component3-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component3-image"
        />
        <span className="component3-text">{props.text}</span>
      </div>
      <div className="component3-container2">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="component3-image1"
        />
        <span className="component3-text1">{props.text1}</span>
      </div>
      <div className="component3-container3">
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="component3-image2"
        />
        <span className="component3-text2">{props.text2}</span>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  image_alt: 'image',
  text: '“SkyAlert es una empresa con una tecnología innovadora que contribuye a alertar oportunamente a millones de personas que viven no sólo aquí en la Cd. De México. Promueven una cultura de prevención ante sismos y peligros naturales. Implementan un servicio eficiente del envío de la alerta que permite que llegue el mensaje y la alarma en pocos segundos”',
  image_alt2: 'image',
  rootClassName: '',
  text1:
    '“El servicio y atención han sido eficientes y oportunos cuando así se ha necesitado. Felicidades, SkyAlert, por su 10° aniversario, les deseamos que sigan ofreciendo el excelente servicio que hasta ahora los ha caracterizado. Que sigan creciendo y cosechando éxitos”',
  image_src2: '/playground_assets/skyalert-%5B2%5D_12-200h.jpg',
  text2:
    '“SkyAlert nos ha brindado la oportunidad de lograr este cometido gracias al servicio que brinda, alertando a tiempo un evento como este, así como apoyando en las activaciones vía remota para la realización de simulacros o el apoyo para mantenimiento de los equipos y asesorías”',
  image_src: '/playground_assets/skyalert-%5B2%5D_09-200w.png',
  image_src1: '/playground_assets/skyalert-%5B2%5D_15-200h.jpg',
  image_alt1: 'image',
}

Component3.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  image_src2: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Component3
