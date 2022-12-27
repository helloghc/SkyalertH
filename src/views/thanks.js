import React from 'react'
import { Helmet } from 'react-helmet'
import Navbarblack from '../components/navbarblack'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './thanks.css'
import { Link } from 'react-router-dom'

const thanks = (props) => {
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
      <div className="thanks-container02">
        <main className="thanks-main">
          <div className="thanks-container06">
            <img
              alt="image"
              src="/playground_assets/gracias.png"
              className="thanks_master_top"
            />
          </div>
          <div className="thanks-container03 heading_b1">
            <div className="thanks-container04">
              <div className="thanks-container05 text_b1">
                <h2 className="thanks-text03">
                  ¡Gracias por tu interés!
                </h2>
                <span className="thanks-text30">
                  Hemos recibido tu información y responderemos al correo que registraste
                </span>
                <Link to="/">
                  <button className='thanks-button'>Aceptar</button>
                </Link>
              </div>
            </div>
          </div>

        </main>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default thanks
