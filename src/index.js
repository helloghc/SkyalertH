import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Switch, History,  Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import { ModalContext } from './context'
import './style.css'
import AppSkyAlert from './views/app-sky-alert'
import SuitedeSoluciones from './views/suite'
import REDSkyAlert from './views/r-e-d-sky-alert'
import Home from './views/home'
import PorQuSkyAlert from './views/por-qu-sky'
import Page404 from './views/page'
import Prensa from './views/prensa';
import Licenciatarios from './views/licenciatarios';
import Aviso from './views/aviso';
import Terms from './views/terms';
import FloatButton from './components/FloatButton'
import ModalEpicenter from './components/Modal/Epicenter';
import PostDetail from './components/Posts/PostDetail';
const browserHistory = createBrowserHistory();

const App = () => {

  const [isSticky, setIsSticky] = useState(true);
  const [isOpenModalEpicenter, setIsOpenModalEpicenter] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementsByClassName("footer-container")[0];
    const offset = footer.getBoundingClientRect().top;
    setTimeout(() => {
      setIsSticky(offset <= 920 ? false : true);
    }, 50)
  }

  const toggleModalEpicenter = () => setIsOpenModalEpicenter(!isOpenModalEpicenter);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ModalContext.Provider value={{
        isOpen: isOpenModalEpicenter,
        toogleOpen: toggleModalEpicenter,
      }}>
      <Router history={browserHistory}>
          <Switch>
            <Route exact component={AppSkyAlert} path="/app" />
            <Route exact component={SuitedeSoluciones} path="/suite-de-soluciones"/>
            <Route exact component={REDSkyAlert} path="/red-skyalert" />
            <Route exact component={Aviso} path="/aviso-de-privacidad" />
            <Route exact component={Terms} path="/terminos-y-condiciones-de-uso" />
            <Route exact component={Home} path="/" />
            <Route exact component={PorQuSkyAlert} path="/por-que-skyalert" />
            <Route exact component={Licenciatarios} path="/licenciatarios" />
            <Route component={Page404} path="/404" />
            <Route exact component={Prensa} path="/prensa" />
            <Route exact component={PostDetail} path="/prensa/:name" />

          </Switch>
        </Router>
        {window.location.pathname !== '/protege-a-tu-personal-epicenter-01' &&
          <FloatButton sticked={isSticky} type='info' />
        }

        <FloatButton sticked={isSticky} type='whatsapp' />
        {
					isOpenModalEpicenter && (
						<ModalEpicenter
							id="modal"
							isOpen={isOpenModalEpicenter}
							onClose={toggleModalEpicenter}
						/>
					)
				}
      </ModalContext.Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
