import React from 'react'
import { Helmet } from 'react-helmet'
import Navbarblack from '../components/navbarblack'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import Licencitarios from '../components/licencitarios'
import './formLicenciatarios.css'

const error404 = (props) => {
  return (
    <div className="licenciatarios-container">
      <Helmet>
        <title>Conoce a los licenciatarios certificados de SkyAlert</title>
        <meta
          name="description"
          content="No encontrado"
        />
        <meta
          property="og:title"
          content="Error 404"
        />
        <meta
          property="og:description"
          content="Error 404"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name"></Navbarblack>
      <div className="licenciatarios-container01">
        <span>
          Página no Encontrada
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
        <h2 className="licenciatarios-text02">Error 404</h2>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default error404
