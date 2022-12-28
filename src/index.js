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
import thanks from './views/thanks';
import formLicenciatarios from './views/formLicenciatarios';
import error404 from './views/Error404';
import { Page } from 'react-facebook';
import { ResetPassword } from './components/AppRoutes/ResetPassword';
import { VerifyEmail } from './components/AppRoutes/VerifyEmail';
import FAQ from './components/FAQ';
import { unregister } from './serviceWorker';
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
            <Route exact component={Prensa} path="/prensa" />
            <Route exact component={thanks} path="/thanks" />
            <Route exact component={formLicenciatarios} path="/conviertete-en-licenciatario" />
            <Route exact component={PostDetail} path="/prensa/:name" />
            <Route exact path="/reset-password" component={ResetPassword}/>{' '}
            {/* ${siteRoot}/reset-password?token=${customer.email.token} */}
            <Route exact component={ResetPassword} path="/setPassword/:token" />
            <Route exact path="/verify" component={VerifyEmail} />{' '}
            {/* ${siteRoot}/verify?type=customer&token=${customer.email.token} */}
            <Route exact path="/verify/:token" component={VerifyEmail} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/preguntasv3-ios" component={FAQ} />
            <Route exact path="/preguntasv3-android" component={FAQ} />
            <Route path="*" component={Page404} />
          </Switch>
        </Router>
        {window.location.pathname !== '/protege-a-tu-personal-epicenter-01'
        }
        {
          window.location.pathname !== '/licenciatarios' && window.location.pathname !== '/conviertete-en-licenciatario' && window.location.pathname !== '/thanks' &&
          <FloatButton sticked={isSticky} type='info' />
        }
        {window.location.pathname !== '/licenciatarios' && window.location.pathname !== '/conviertete-en-licenciatario' && window.location.pathname !== '/thanks' &&
        <FloatButton sticked={isSticky} type='whatsapp' />
        }
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
