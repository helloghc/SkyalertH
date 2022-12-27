import React from 'react'

import PropTypes from 'prop-types'

import './paquetes.css'

const Paquetes = (props) => {
  return (
    <div className={`paquetes-container ${props.rootClassName} `}>
      <div className="paquetes-container1">
        <div className="paquetes-card">
          <span className="paquetes-text">{props.text}</span>
          <h1 className="paquetes-text01">{props.heading}</h1>
          <ul className="list">
            <li className="list-item">
              <span className="paquetes-text02">
                <br className=""></br>
                <span className="">1 dispositivo receptor</span>
                <br className=""></br>
                <span className="">
                  2 bocinas de 15W
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className=""></br>
                <span className="">
                  1 amplificador de 20W
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className=""></br>
                <span className="">1 base para amplificador</span>
                <br className=""></br>
                <span className="">2 cables de audio y bocina</span>
                <br className=""></br>
                <span className="">3 licencias Desk</span>
                <br className=""></br>
                <span className="">3 suscripciones SkyAlert Gold</span>
                <br className=""></br>
                <span className="">1 plataforma Safety Admin</span>
                <br className=""></br>
                <span className=""></span>
              </span>
            </li>
            <li className="list-item"></li>
            <li className="list-item"></li>
          </ul>
          <span className="paquetes-text14">{props.text3}</span>
          <h1 className="paquetes-text15">{props.heading3}</h1>
          <span className="">{props.text4}</span>
        </div>
        <div className="paquetes-card1">
          <span className="paquetes-text17">{props.text2}</span>
          <h1 className="paquetes-text18">{props.heading2}</h1>
          <ul className="list">
            <li className="list-item">
              <span className="">
                <span className="">1 dispositivo receptor</span>
                <br className=""></br>
                <span className="">1 bocina de 15W</span>
                <br className=""></br>
                <span className="">1 amplificador de 20W</span>
                <br className=""></br>
                <span className="">1 base para amplificador</span>
                <br className=""></br>
                <span className="">1 cable de audio y bocina</span>
                <br className=""></br>
                <span className="">1 licencia Desk</span>
                <br className=""></br>
                <span className="">1 suscripción SkyAlert Gold</span>
                <br className=""></br>
                <span className="">1 plataforma Safety Admin</span>
                <br className=""></br>
                <span className=""></span>
              </span>
            </li>
            <li className="list-item"></li>
          </ul>
          <span className="paquetes-text29">{props.text32}</span>
          <h1 className="paquetes-text30">{props.heading32}</h1>
          <span className="">{props.text42}</span>
        </div>
        <div className="paquetes-card2">
          <span className="paquetes-text32">{props.text1}</span>
          <h1 className="paquetes-text33">{props.heading1}</h1>
          <ul className="list">
            <li className="list-item">
              <span className="">
                <span className="">1 licencia Desk</span>
                <br className=""></br>
                <span className="">1 plataforma Safety Admin</span>
                <br className=""></br>
                <span className=""></span>
              </span>
            </li>
            <li className="list-item"></li>
          </ul>
          <span className="paquetes-text38">{props.text31}</span>
          <h1 className="paquetes-text39">{props.heading31}</h1>
          <span className="">{props.text41}</span>
        </div>
      </div>
    </div>
  )
}

Paquetes.defaultProps = {
  text32: 'Mensual',
  rootClassName: '',
  text4: '*Términos y condiciones',
  heading32: '$25,000*',
  text: 'Paquete',
  text41: '*Términos y condiciones',
  heading3: '$40,000*',
  text1: 'Paquete',
  heading: 'MAX',
  heading31: '$1,188*',
  text2: 'Paquete',
  rootClassName2: '',
  heading1: 'Desk Flex',
  heading2: 'Full',
  rootClassName1: '',
  text3: 'Anual',
  text42: '*Términos y condiciones',
  text31: 'MXN',
}

Paquetes.propTypes = {
  text32: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  heading32: PropTypes.string,
  text: PropTypes.string,
  text41: PropTypes.string,
  heading3: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  heading31: PropTypes.string,
  text2: PropTypes.string,
  rootClassName2: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  rootClassName1: PropTypes.string,
  text3: PropTypes.string,
  text42: PropTypes.string,
  text31: PropTypes.string,
}

export default Paquetes
