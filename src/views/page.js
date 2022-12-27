import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './page.css'

const Page404 = (props) => {
  return (
    <div className="page-container">
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
      <div className="page404container">
        <h1 className="page-text">404</h1>
        <h2 className="page-text1">Página no encontrada</h2>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default Page404
