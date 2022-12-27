import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-text navbar-link">
        {props.text}
      </Link>
      <Link
        to="/suite-de-soluciones"
        className="navigation-links-navlink navbar-link"
      >
        {props.text1}
      </Link>
      <Link to="/app" className="navigation-links-navlink1 navbar-link">
        {props.text2}
      </Link>
      <Link
        to="/red-skyalert"
        className="navigation-links-navlink2 navbar-link"
      >
        {props.text3}
      </Link>
      <Link
        to="/por-que-skyalert"
        className="navigation-links-navlink3 navbar-link"
      >
        {props.text4}
      </Link>
      <Link
        to="/licenciatarios"
        className="navigation-links-navlink4 navbar-link"
        onClick={() => window.location.href = "./licenciatarios"}>
        {props.text5}
      </Link>
      <Link to="/prensa" className="navigation-links-navlink4 navbar-link">
        {props.text41}
      </Link>
      <a
        href="https://news.skyalert.mx/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-navlink4 navbar-link"
      >{props.text411} </a>
    </nav>
  )
}


NavigationLinks.defaultProps = {
  text411: 'SkyAlert News',
  text2: 'App',
  text3: 'REDSkyAlert',
  rootClassName: '',
  text4: '¿Por qué SkyAlert?',
  text41: 'Prensa',
  text: 'Home',
  hover: () => {},
  text1: 'Suite de soluciones',
  text5: 'Licenciatarios'
}

NavigationLinks.propTypes = {
  text411: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text41: PropTypes.string,
  text: PropTypes.string,
  hover: PropTypes.func,
  text1: PropTypes.string,
  text5: PropTypes.string,
}

export default NavigationLinks
