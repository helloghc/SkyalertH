import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import FeatureCardConTexto from '../components/feature-card-con-texto'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './r-e-d-sky-alert.css'

const REDSkyAlert = (props) => {
  return (
    <div className="r-e-d-sky-alert-container">
      <Helmet>
        <title>
          Red SkyAlert: ¡Nuestro Sensor de Sismos al Servicio del México!
        </title>
        <meta
          name="description"
          content="Conoce el funcionamiento del Sensor de Sismos REDSkyAlert. ¡Haz clic aquí para conocer cómo aportamos al cuidado de todo México!"
        />
        <meta
          property="og:title"
          content="Red SkyAlert: ¡Nuestro Sensor de Sismos al Servicio del México!"
        />
        <meta
          property="og:description"
          content="Conoce el funcionamiento del Sensor de Sismos REDSkyAlert. ¡Haz clic aquí para conocer cómo aportamos al cuidado de todo México!"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name8"></Navbarblack>
      <div className="r-e-d-sky-alert-container01">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="r-e-d-sky-alert-text01">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="r-e-d-sky-alert-text02">REDSkyAlert</span>
      </div>
      <main className="r-e-d-sky-alert-main">
        <div className="r-e-d-sky-alert-container02">
          <div className="r-e-d-sky-alert-container03">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
              className="r-e-d-sky-alert-image"
            />
            <div className="r-e-d-sky-alert-container04">
              <h2 className="r-e-d-sky-alert-text03 heading2">
                <span>¿Qué es y cómo funciona nuestra REDSkyAlert?</span>
                <span className="r-e-d-sky-alert-text05"></span>
              </h2>
              <span className="r-e-d-sky-alert-text06">
                Contamos con más de 120 sensores instalados en 12 estados de la
                República Mexicana.
              </span>
            </div>
          </div>
        </div>
        <div className="r-e-d-sky-alert-container05">
          <div className="r-e-d-sky-alert-container06">
            <img
              alt="image"
              src="/playground_assets/descarga-200h.png"
              className="r-e-d-sky-alert-image01"
            />
            <span className="r-e-d-sky-alert-text07">
              Al ser una iniciativa privada, comprometida con la seguridad de la
              población, desde 2014 contamos con nuestra propia red de sensores
              sísmicos.
            </span>
            <span className="r-e-d-sky-alert-text08">
              Contamos con más de 120 sensores en los estados con mayor peligro
              sísmico, los cuales cubren todo el Pacífico, desde Jalisco hasta
              Chiapas, además de Ciudad de México y los estados de Morelos,
              Puebla, Hidalgo, Estado de México y Veracruz.
            </span>
            <span className="r-e-d-sky-alert-text09">
              REDSkyAlert es fuente propia para nuestras alertas sísmicas que
              cuenta con la capacidad de confirmar o descartar un sismo en tan
              solo milisegundos.
            </span>
          </div>
          <div className="r-e-d-sky-alert-container07">
            <div className="r-e-d-sky-alert-card">
              <h1 className="r-e-d-sky-alert-text10">80%</h1>
              <h1 className="r-e-d-sky-alert-text11">cobertura</h1>
              <span className="r-e-d-sky-alert-text12">
                de las zonas de mayor peligro sísmico en México.
              </span>
            </div>
            <div className="r-e-d-sky-alert-card1">
              <h1 className="r-e-d-sky-alert-text13">+120</h1>
              <h1 className="r-e-d-sky-alert-text14">sensores</h1>
              <span className="r-e-d-sky-alert-text15">
                en la red inteligente de SkyAlert pueden confirmar o descartar
                un sismo en milisegundos.
              </span>
            </div>
          </div>
        </div>
        <div className="r-e-d-sky-alert-container08">
          <div className="r-e-d-sky-alert-container09">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
              className="r-e-d-sky-alert-image02"
            />
            <div className="r-e-d-sky-alert-container10">
              <h2 className="r-e-d-sky-alert-text16 heading2">
                <span>Cobertura REDSkyAlert</span>
                <span className="r-e-d-sky-alert-text18"></span>
              </h2>
              <span className="r-e-d-sky-alert-text19">
                Contamos con más de 120 sensores instalados en 12 estados de la
                República Mexicana
              </span>
            </div>
          </div>
        </div>
        <div className="r-e-d-sky-alert-container11">
          <img
            alt="image"
            src="/playground_assets/redskyalert_05-1500w.png"
            className="r-e-d-sky-alert-image03"
          />
        </div>
        <div className="r-e-d-sky-alert-container12">
          <div className="r-e-d-sky-alert-container13">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
              className="r-e-d-sky-alert-image04 img_shii"
            />
            <div className="r-e-d-sky-alert-container14">
              <h2 className="r-e-d-sky-alert-text20 heading2">
                <span>
                  Basamos las alertas en la escala de
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="r-e-d-sky-alert-text22">
                  INTENSIDAD SkyAlert
                </span>
              </h2>
              <span className="r-e-d-sky-alert-text23">
                Los sismos tienen una sola magnitud, pero cada localidad tiene
                distintas intensidades con base en la distancia del epicentro y
                tipo de suelo. Por ejemplo, en Ciudad de México las ondas
                sísmicas suelen amplificarse por el tipo de suelo blando.
              </span>
            </div>
          </div>
        </div>
        <div className="r-e-d-sky-alert-container15">
          <FeatureCardConTexto
            text="Al referirnos a intensidad, hablamos de qué tan fuerte es el movimiento que se genera en la superficie. Involucra factores como: tipo de suelo, distancia al epicentro, profundidad y magnitud"
            heading="Intensidad"
            image_src="/playground_assets/icons8-3d-touch-50-200h.png"
            rootClassName="feature-card-con-texto-root-class-name2"
          ></FeatureCardConTexto>
          <FeatureCardConTexto
            text="Es un valor único, en el que se mide la liberación de energía sísmica. Este dato es dado a conocer por los institutos sismológicos de cada país. En el caso de México es el Servicio Sismológico Nacional (SSN)."
            heading="Magnitud"
            image_src="/playground_assets/icons8-depth-50-200h.png"
            rootClassName="feature-card-con-texto-root-class-name3"
          ></FeatureCardConTexto>
        </div>
        <div className="r-e-d-sky-alert-container17">
          <div className="r-e-d-sky-alert-container18">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
              className="r-e-d-sky-alert-image05"
            />
            <div className="r-e-d-sky-alert-container19">
              <h2 className="r-e-d-sky-alert-text24 heading2">
                <span>Escala de INTENSIDAD sísmica SkyAlert</span>
                <span className="r-e-d-sky-alert-text26"></span>
              </h2>
              <span className="r-e-d-sky-alert-text27">
                En SkyAlert alertamos basado en nuestra escala de INTENSIDAD
              </span>
            </div>
          </div>
        </div>
        <div className="r-e-d-sky-alert-container20">
          <img
            alt="image"
            src="/playground_assets/redskyalert_10-700h.png"
            className="r-e-d-sky-alert-image06"
          />
          <h1 className="r-e-d-sky-alert-text28">Sismo Detectado</h1>
          <h1 className="r-e-d-sky-alert-text29">
            Se escucha un tono corto y una voz de &quot;SISMO DETECTADO&quot;
            con la intensidad local esperada.
          </h1>
          <div className="r-e-d-sky-alert-container21">
            <div className="r-e-d-sky-alert-container22">
              <span>Se escucha un tono corto y una voz de</span>
              <span className="r-e-d-sky-alert-text31">“SISMO DETECTADO”</span>
            </div>
            <span className="r-e-d-sky-alert-text32">
              con la intensidad local esperada.
            </span>
          </div>
          <div className="r-e-d-sky-alert-container23">
            <div className="r-e-d-sky-alert-card2">
              <img
                alt="image"
                src="/playground_assets/redskyalert_19-200h.png"
                className="r-e-d-sky-alert-image07"
              />
              <h4 className="r-e-d-sky-alert-text33 heading4">Débil</h4>
              <span className="r-e-d-sky-alert-text34 content-Light">
                Solo se mueven objetos colgantes. No suelen causar daños a
                estructuras.
              </span>
            </div>
            <div className="r-e-d-sky-alert-card3">
              <img
                alt="image"
                src="/playground_assets/redskyalert_13-200h.png"
                className="r-e-d-sky-alert-image08"
              />
              <h4 className="r-e-d-sky-alert-text35 heading4">Leve</h4>
              <span className="r-e-d-sky-alert-text36 content-Light">
                Llegan a sentirse, pero no suelen ser destructivos.
              </span>
            </div>
          </div>
        </div>
        <h1 className="r-e-d-sky-alert-text37">
          Se escucha un tono fuerte y diferente al de sismos no destructivos,
          con una voz de &quot;ALERTA SÍSMICA&quot; con la intensidad local
          esperada.
        </h1>
        <div className="r-e-d-sky-alert-container24">
          <img
            alt="image"
            src="/playground_assets/redskyalert_10-700h.png"
            className="r-e-d-sky-alert-image09"
          />
          <h1 className="r-e-d-sky-alert-text38">Alerta Sísmica</h1>
          <img
            alt="image"
            src="/playground_assets/redskyalert_10-700h.png"
            className="r-e-d-sky-alert-image10"
          />
          <h1 className="r-e-d-sky-alert-text39">Alerta Sísmica</h1>
          <h1 className="r-e-d-sky-alert-text40">
            Se escucha un tono fuerte y diferente al de sismos no destructivos,
            con una voz de &quot;ALERTA SÍSMICA&quot; con la intensidad local
            esperada.
          </h1>
          <div className="r-e-d-sky-alert-container25">
            <div className="r-e-d-sky-alert-card4">
              <img
                alt="image"
                src="/playground_assets/redskyalert_16-200h.png"
                className="r-e-d-sky-alert-image11"
              />
              <h4 className="r-e-d-sky-alert-text41 heading4">Moderado</h4>
              <span className="r-e-d-sky-alert-text42 content-Light">
                Pueden causar daños ligeros en estructuras y caída de objetos
              </span>
            </div>
            <div className="r-e-d-sky-alert-card5">
              <img
                alt="image"
                src="/playground_assets/redskyalert_07-200h.png"
                className="r-e-d-sky-alert-image12"
              />
              <h4 className="r-e-d-sky-alert-text43 heading4">Fuerte</h4>
              <span className="r-e-d-sky-alert-text44 content-Light">
                Pueden causar daños dependiendo del tipo de estructura. Se
                pueden generar grietas
              </span>
            </div>
          </div>
          <div className="r-e-d-sky-alert-container26">
            <div className="r-e-d-sky-alert-card6">
              <img
                alt="image"
                src="/playground_assets/redskyalert_21-200h.png"
                className="r-e-d-sky-alert-image13"
              />
              <h4 className="r-e-d-sky-alert-text45 heading4">Violento</h4>
              <span className="r-e-d-sky-alert-text46 content-Light">
                Potencialmente destructivos. Son percibidos a distancias mayores
                a 500km del epicentro
              </span>
            </div>
            <div className="r-e-d-sky-alert-card7">
              <img
                alt="image"
                src="/playground_assets/redskyalert_24-200h.png"
                className="r-e-d-sky-alert-image14"
              />
              <h4 className="r-e-d-sky-alert-text47 heading4">Severo</h4>
              <span className="r-e-d-sky-alert-text48 content-Light">
                Altamente destructivos. Afectaciones importantes a estructuras y
                dificultad para permanecer en pie
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default REDSkyAlert
