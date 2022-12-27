import React from 'react'
import { Helmet } from 'react-helmet'
import Navbarblack from '../components/navbarblack'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import Licencitarios from '../components/licencitarios'
import './formLicenciatarios.css'

const formLicenciatarios = (props) => {
  return (
    <div className="licenciatarios-container">
      <Helmet>
        <title>Conoce a los licenciatarios certificados de SkyAlert</title>
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
                  ¡Hola!
                </h2>
              </div>
            </div>
          </div>
        </main>
        <div className='licenciatarios-text010'>
          <span className='text0101'>Agradecemos tu interés en formar parte de la unidad de negocio <strong>Licenciatarios SkyAlert.</strong><br/>Te invitamos a que nos dejes tus datos para ponernos en contacto contigo.</span>
        </div>
      </div>
      <Licencitarios></Licencitarios>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default formLicenciatarios
