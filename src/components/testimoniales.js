import React from 'react'

import PropTypes from 'prop-types'

import './testimoniales.css'

const Testimoniales = (props) => {
  return (
    <div className={`testimoniales-container ${props.rootClassName} `}>
      <div className="testimoniales-container1">
        <div className="testimoniales-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="testimoniales-image"
          />
          <span className="testimoniales-text">{props.text}</span>
        </div>
        <div className="testimoniales-container3">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="testimoniales-image1"
          />
          <span className="testimoniales-text1">{props.text1}</span>
        </div>
        <div className="testimoniales-container4">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="testimoniales-image2"
          />
          <span className="testimoniales-text2">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Testimoniales.defaultProps = {
  image_alt1: 'image',
  image_src1: '/playground_assets/skyalert-%5B2%5D_15-200h.jpg',
  image_src: '/playground_assets/skyalert-%5B2%5D_09-200w.png',
  text: '“SkyAlert es una empresa con una tecnología innovadora que contribuye a alertar oportunamente a millones de personas que viven no sólo aquí en la Cd. De México. Promueven una cultura de prevención ante sismos y peligros naturales. Implementan un servicio eficiente del envío de la alerta que permite que llegue el mensaje y la alarma en pocos segundos”',
  text1:
    '“El servicio y atención han sido eficientes y oportunos cuando así se ha necesitado. Felicidades, SkyAlert, por su 10° aniversario, les deseamos que sigan ofreciendo el excelente servicio que hasta ahora los ha caracterizado. Que sigan creciendo y cosechando éxitos”',
  image_alt2: 'image',
  image_alt: 'image',
  image_src2: '/playground_assets/skyalert-%5B2%5D_12-200h.jpg',
  text2:
    '“SkyAlert nos ha brindado la oportunidad de lograr este cometido gracias al servicio que brinda, alertando a tiempo un evento como este, así como apoyando en las activaciones vía remota para la realización de simulacros o el apoyo para mantenimiento de los equipos y asesorías”',
  rootClassName: '',
}

Testimoniales.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src2: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Testimoniales
