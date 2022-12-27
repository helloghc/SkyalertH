import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-linksblack.css'

const NavigationLinksblack = (props) => {
  return (
    <nav className={`navigation-linksblack-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-linksblack-text navbar-link" onClick={() => window.location.href = "./"}>
        {props.text}
      </Link>
      <Link
        to="/suite-de-soluciones"
        className="navigation-linksblack-navlink navbar-link"
        onClick={() => window.location.href = "./suite-de-soluciones"}
      >
        {props.text1}
      </Link>
      <Link to="/app" className="navigation-linksblack-navlink1 navbar-link" onClick={() => window.location.href = "./app"}>
        {props.text2}
      </Link>
      <Link
        to="/red-skyalert"
        className="navigation-linksblack-navlink2 navbar-link"
        onClick={() => window.location.href = "./red-skyalert"}
      >
        {props.text3}
      </Link>
      <Link
        to="/por-que-skyalert"
        className="navigation-linksblack-navlink3 navbar-link"
        onClick={() => window.location.href = "./por-que-skyalert"}
      >
        {props.text4}
      </Link>
      <Link
        to="/licenciatarios"
        className="navigation-linksblack-navlink3 navbar-link"
        onClick={() => window.location.href = "./licenciatarios"}
      >
        {props.text5}
      </Link>
      <Link to="/prensa" className="navigation-linksblack-navlink4 navbar-link" >
        {props.text41}
      </Link>
        <a
          href="https://news.skyalert.mx/"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-linksblack-navlink4 navbar-link"
        >{props.text411} </a>
    </nav>

  )
}

NavigationLinksblack.defaultProps = {
  text4: '¿Por qué SkyAlert?',
  rootClassName: '',
  text2: 'App',
  text1: 'Suite de soluciones',
  text3: 'REDSkyAlert',
  text: 'Home',
  text411: 'SkyAlert News',
  text41: 'Prensa',
  text5: 'Licenciatarios',
}

NavigationLinksblack.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text411: PropTypes.string,
  text41: PropTypes.string,
  text5: PropTypes.string,
}

export default NavigationLinksblack
