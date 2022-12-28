import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbarblack from '../components/navbarblack'
import Solucionescard1 from '../components/solucionescard1'
import BulletSoluciones from '../components/bullet-soluciones'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import Licencitarios from '../components/licencitarios'
import './licenciatarios.css'

const Licenciatarios = (props) => {
  return (
    <div className="licenciatarios-container">
      <Helmet>
        <title>Conoce a los licenciatarios certificados SkyAlert</title>
        <meta
          name="description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
        <meta
          property="og:title"
          content="Conoce a los licenciatarios certificados de SkyAlert"
        />
        <meta
          property="og:description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name"></Navbarblack>
      <div className="licenciatarios-container01">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="licenciatarios-text01">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="licenciatarios-text02">Licenciatarios</span>
      </div>
      <div className="licenciatarios-container02">
        <main className="licenciatarios-main">
          <div className="licenciatarios-container03 heading_b1">
            <div className="licenciatarios-container04">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="icon_b1 licenciatarios-image"
              />
              <div className="licenciatarios-container05 heading2 text_b1">
                <h2 className="licenciatarios-text03">
                  Conoce a los licenciatarios certificados SkyAlert
                </h2>
                <br/>
              </div>
            </div>
          </div>
          <div className="licenciatarios-container06">
            <img
              alt="image"
              src="/playground_assets/top_car.png"
              className="licenciatario_master_top"
            />
          </div>

          <div className="licenciatarios-container03 heading_b1">
            <div className="licenciatarios-container04">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="icon_b1 licenciatarios-image"
              />
              <div className="licenciatarios-container05 heading2 text_b1">
                <h2 className="licenciatarios-text03">
                Conoce más sobre los beneficios exclusivos para los
                licenciatarios certificados de SkyAlert
                </h2>
              </div>
            </div>
          </div>
          <BulletSoluciones
            heading="Amplios márgenes de utilidad en la comercialización de las soluciones"
            rootClassName="bullet-soluciones-root-class-name10"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Apoyo logístico y acompañamiento constante para crear y ejecutar  las estrategias de comercialización y estipulación de precios. Asesoría en marketing y publicidad"
            rootClassName="bullet-soluciones-root-class-name39"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Manejo de Look &amp; Feel (apariencia del sitio) en cada una de las plataformas administrativas actuales de SkyAlert"
            rootClassName="bullet-soluciones-root-class-name12"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Jornadas de capacitación de índole comercial, técnico y operativo, con base en los diferentes perfiles del recurso humano y su rol en la interacción con el cliente final"
            rootClassName="bullet-soluciones-root-class-name11"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Autorización para la utilización de nombres, marcas y emblemas bajo lineamientos internos de SkyAlert"
            rootClassName="bullet-soluciones-root-class-name14"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Soporte técnico sobre las soluciones, formalizado a través de un acuerdo de niveles de servicio (ANS) convenido entre las partes, para garantizar la prestación cabal e idónea del servicio"
            rootClassName="bullet-soluciones-root-class-name16"
          ></BulletSoluciones>
          <div className="licenciatarios-container15 heading_b1">
            <div className="licenciatarios-container16">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="icon_b1 licenciatarios-image18"
              />
              <div className="licenciatarios-container17 heading2 text_b1">
                <h2 className="licenciatarios-text29">
                  ¿Qué es un licenciatario certificado de SkyAlert?
                </h2>
                <span className="licenciatarios-text30 notbold">Es una persona moral que obtiene el derecho a comercializar la <strong>suite de  soluciones SkyAlert</strong> en el territorio nacional</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <img
        alt="image"
        src="/playground_assets/licenciatarios-soluciones.png"
        className="licenciatarios-image19"
      />
      <div id="paquetes" className="licenciatarios-container19">
        <div className="licenciatarios-container20">
          <div className="licenciatarios-container21">
            <div className="licenciatarios-container22">
              <div id="stoc" className="licenciatarios-container23">
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                  className="licenciatarios-image20"
                />
                <div className="licenciatarios-container24">
                  <h2 className="licenciatarios-text34 heading2">
                    ¿Te interesa convertirte en licenciatario SkyAlert?
                  </h2>
                </div>
              </div>
            </div>
            <span className="licenciatarios-text35">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <Link to="/conviertete-en-licenciatario" >
        <button className='conocer-mas'>Quiero conocer más</button>
      </Link>

      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default Licenciatarios
