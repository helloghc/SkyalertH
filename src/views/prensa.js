import React from 'react';
import { Helmet } from 'react-helmet';
import Navbarblack from '../components/navbarblack';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import './prensa.css';
import { Posts } from '../components/Posts';

export const Prensa = (props) => {

  return (

    <>
      <div className="prensa-container">
        <Helmet>
          <title>
            La Empresa de Alertamiento Sísmico de México en Los Medios
          </title>
          <meta
            name="description"
            content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
          />
          <meta
            property="og:title"
            content="La Empresa de Alertamiento Sísmico de México en Los Medios"
          />
          <meta
            property="og:description"
            content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
          />
        </Helmet>
        <Navbarblack rootClassName="navbarblack-root-class-name6"></Navbarblack>
        <div className="prensa-container01">
          <span>
            Home
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="prensa-text01">
            {' '}
            /
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="prensa-text02">Prensa</span>
        </div>
        <Posts />
        <Footer rootClassName="footer-root-class-name7"></Footer>
        <Copyright rootClassName="copyright-root-class-name1"></Copyright>
      </div>
    </>

  )
}

export default Prensa
