import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Solucionescard1 from '../components/solucionescard1'
import BulletSoluciones from '../components/bullet-soluciones'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './suite.css'

const Suite = (props) => {
  return (
    <div className="suite-container">
      <Helmet>
        <title>
          Suite de Soluciones Que SkyAlert Puede Ofrecer a tu Empresa
        </title>
        <meta
          name="description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
        <meta
          property="og:title"
          content="Suite de Soluciones Que SkyAlert Puede Ofrecer a tu Empresa"
        />
        <meta
          property="og:description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name"></Navbarblack>
      <div className="suite-container01">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="suite-text001">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="suite-text002">Suite de Soluciones</span>
      </div>
      <div className="suite-container02">
        <main className="suite-main">
          <div className="heading_b1 suite-container03">
            <div className="suite-container04">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="icon_b1 suite-image"
              />
              <div className="suite-container05 heading2 text_b1">
                <h2 className="suite-text003">
                  <span>
                    Suite de soluciones para alertamiento sísmico empresarial
                  </span>
                  <span className="suite-text005"></span>
                </h2>
                <span className="suite-text006">
                  Recibe y envía la información crítica necesaria para que tu
                  organización, por medio de la mejor tecnología pueda minimizar
                  los impactos de los peligros naturales.
                </span>
                <span className="suite-text007">
                  A través de nuestras innovadoras soluciones, tu empresa podrá
                  tomar decisiones sustentadas, con tiempo e información
                  suficientes para actuar y disminuir los riesgos.
                </span>
                <span className="suite-text008">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="suite-container06">
            <h2 className="suite-text009 heading2">
              <span>
                SkyAlert
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="suite-text011">SOS</span>
            </h2>
            <h1 className="suite-text012">(Safety Organization System)</h1>
          </div>
          <div className="suite-container07">
            <a href="#gadget" className="suite-link">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_061-200h.png"
                rootClassName="solucionescard1-root-class-name37"
                className="suite-component01"
              ></Solucionescard1>
            </a>
            <a href="#desk" className="suite-link01">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_081-200h.png"
                rootClassName="solucionescard1-root-class-name39"
                className="suite-component02"
              ></Solucionescard1>
            </a>
            <a href="#safetyadmin" className="suite-link02">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_041-200h.png"
                rootClassName="solucionescard1-root-class-name40"
                className="suite-component03"
              ></Solucionescard1>
            </a>
            <a href="#sky360" className="suite-link03">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_121-200h.png"
                rootClassName="solucionescard1-root-class-name41"
                className="suite-component04"
              ></Solucionescard1>
            </a>
            <Link to="/app" className="suite-navlink">
              <div className="suite-card">
                <img
                  alt="image"
                  src="/playground_assets/logo1-200h.png"
                  className="suite-image01"
                />
                <span className="suite-text013">SkyAlert App</span>
              </div>
            </Link>
          </div>
          <div className="suite-container08">
            <div className="suite-card01">
              <img
                alt="image"
                src="/playground_assets/suite-de-soluciones_101-200h.png"
                className="suite-image02"
              />
            </div>
            <a href="#stoc" className="suite-link04">
              <div className="suite-card02">
                <img
                  alt="image"
                  src="/playground_assets/logo1-200h.png"
                  className="suite-image03"
                />
                <span className="suite-text014">
                  <span>Servidor</span>
                  <span>
                    {' '}
                    a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="suite-text017">Cliente</span>
                </span>
              </div>
            </a>
            <a href="#stoss" className="suite-link05">
              <div className="suite-card03">
                <img
                  alt="image"
                  src="/playground_assets/logo1-200h.png"
                  className="suite-image04"
                />
                <span className="suite-text018">
                  <span className="suite-text019">Servidor</span>
                  <span>
                    {' '}
                    a
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="suite-text021">Servidor</span>
                </span>
              </div>
            </a>
            <a href="#paquetes" className="suite-link06">
              <div className="suite-card04">
                <img
                  alt="image"
                  src="/playground_assets/logo1-200h.png"
                  className="suite-image05"
                />
                <span className="suite-text022">Paquetes comerciales</span>
              </div>
            </a>
            <a href="#cursos" className="suite-link07">
              <div className="suite-card05">
                <img
                  alt="image"
                  src="/playground_assets/logo1-200h.png"
                  className="suite-image06"
                />
                <span className="suite-text023">Extras</span>
              </div>
            </a>
          </div>
          <div className="suite-container09">
            <div className="suite-container10">
              <div className="suite-card06">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_101-200h.png"
                  className="suite-image07"
                />
              </div>
              <a href="#stoc" className="suite-link08">
                <div className="suite-card07">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image08"
                  />
                  <span className="suite-text024">
                    <span>Servidor</span>
                    <span>
                      {' '}
                      a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="suite-text027">Cliente</span>
                  </span>
                </div>
              </a>
              <a href="#stoss" className="suite-link09">
                <div className="suite-card08">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image09"
                  />
                  <span className="suite-text028">
                    <span className="suite-text029">Servidor</span>
                    <span>
                      {' '}
                      a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="suite-text031">Servidor</span>
                  </span>
                </div>
              </a>
              <a href="#paquetes" className="suite-link10">
                <div className="suite-card09">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image10"
                  />
                  <span className="suite-text032">Paquetes comerciales</span>
                </div>
              </a>
              <Link to="/app" className="suite-navlink1">
                <div className="suite-card10">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image11"
                  />
                  <span className="suite-text033">SkyAlert App</span>
                </div>
              </Link>
              <a href="#cursos" className="suite-link11">
                <div className="suite-card11">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image12"
                  />
                  <span className="suite-text034">Extras</span>
                </div>
              </a>
            </div>
          </div>
          <div className="suite-container11">
            <a href="#gadget">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_061-200h.png"
                rootClassName="solucionescard1-root-class-name42"
                className="suite-component05"
              ></Solucionescard1>
            </a>
            <a href="#desk">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_081-200h.png"
                rootClassName="solucionescard1-root-class-name43"
                className="suite-component06"
              ></Solucionescard1>
            </a>
            <a href="#safetyadmin">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_041-200h.png"
                rootClassName="solucionescard1-root-class-name44"
                className="suite-component07"
              ></Solucionescard1>
            </a>
            <a href="#sky360">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_121-200h.png"
                rootClassName="solucionescard1-root-class-name45"
                className="suite-component08"
              ></Solucionescard1>
            </a>
          </div>
          <div className="suite-container12">
            <div className="suite-container13">
              <div className="suite-card12">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_061-200h.png"
                  className="suite-image13"
                />
              </div>
              <div className="suite-card13">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_081-200h.png"
                  className="suite-image14"
                />
              </div>
              <div className="suite-card14">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_041-200h.png"
                  className="suite-image15"
                />
              </div>
              <div className="suite-card15">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_121-200h.png"
                  className="suite-image16"
                />
              </div>
              <Link to="/app" className="suite-navlink2">
                <div className="suite-card16">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image17"
                  />
                  <span className="suite-text035">SkyAlert App</span>
                </div>
              </Link>
            </div>
            <div className="suite-container14">
              <div className="suite-card17">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_101-200h.png"
                  className="suite-image18"
                />
              </div>
              <a href="#stoc" className="suite-link16">
                <div className="suite-card18">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image19"
                  />
                  <span className="suite-text036">
                    <span>Servidor</span>
                    <span>
                      {' '}
                      a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="suite-text039">Cliente</span>
                  </span>
                </div>
              </a>
              <a href="#stoss" className="suite-link17">
                <div className="suite-card19">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image20"
                  />
                  <span className="suite-text040">
                    <span className="suite-text041">Servidor</span>
                    <span>
                      {' '}
                      a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="suite-text043">Servidor</span>
                  </span>
                </div>
              </a>
              <a href="#paquetes" className="suite-link18">
                <div className="suite-card20">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image21"
                  />
                  <span className="suite-text044">Paquetes comerciales</span>
                </div>
              </a>
              <a href="#cursos" className="suite-link19">
                <div className="suite-card21">
                  <img
                    alt="image"
                    src="/playground_assets/logo1-200h.png"
                    className="suite-image22"
                  />
                  <span className="suite-text045">Extras</span>
                </div>
              </a>
            </div>
          </div>
          <div id="gadget" className="suite-container15">
            <div className="suite-container16">
              <div className="suite-container17">
                <Solucionescard1
                  image_alt="asdfghj"
                  image_src="/playground_assets/suite-de-soluciones_061-200h.png"
                  rootClassName="solucionescard1-root-class-name13"
                ></Solucionescard1>
                <div className="suite-container18">
                  <span className="suite-text046">
                    Solución de alertamiento sísmico temprano con dispositivo
                    receptor Gadget; el dispositivo más moderno y rápido de
                    México
                  </span>
                  <span className="suite-text047">¡Tecnología exclusiva!</span>
                  <div className="suite-container19">
                    <h1 className="suite-text048">SkyAlert</h1>
                    <h1 className="suite-text049">Gadget</h1>
                  </div>
                  <span className="suite-text050">
                    Dispositivo receptor de alertamiento sísmico temprano para
                    plantas industriales, corporativos, oficinas u
                    organizaciones.
                  </span>
                  <span className="suite-text051">
                    Activa bocinas, estrobos y luces, entre otros. Así tus
                    colaboradores iniciarán con rapidez sus protocolos de
                    prevención establecidos.
                  </span>
                  <span className="suite-text052">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="suite-text053">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <BulletSoluciones
            heading="Alerta áreas grandes, con alta concentración de personas, con un solo dispositivo"
            rootClassName="bullet-soluciones-root-class-name10"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Automatización de  procesos: suspensión de servicio de elevadores y escaleras eléctricas, pausa de procesos de producción, apertura de puertas y encendido de  luces de emergencia, entre otros"
            rootClassName="bullet-soluciones-root-class-name39"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="El dispositivo se otorga en comodato, el cual incluye el servicio de suscripción anual de alertamiento temprano. Solo pagas una única vez la instalación de la solución"
            rootClassName="bullet-soluciones-root-class-name12"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Únicamente necesitas una conexión a internet propia; o si lo prefieres nosotros te la proveemos*"
            rootClassName="bullet-soluciones-root-class-name11"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Recibe alertas de REDSkyAlert, con la tecnología más avanzada del mercado. Nuestra red de sensores sísmicos es la más grande, rápida y exclusiva; nadie más tiene acceso a ella"
            rootClassName="bullet-soluciones-root-class-name14"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Algoritmo propio desarrollado tomando en cuenta las características del territorio mexicano"
            rootClassName="bullet-soluciones-root-class-name16"
          ></BulletSoluciones>
          <div className="suite-container20">
            <div className="suite-card22">
              <img
                alt="image"
                src="/playground_assets/icons8-escalator-down-100-200h.png"
                className="suite-image23"
              />
              <h4 className="suite-text054 heading4">Automatiza procesos</h4>
              <span className="suite-text055 content-Light">
                Abre puertas y enciende luces de emergencia. Suspende servicios
                de elevadores y escaleras eléctricas. Pausa servicios de
                producción.
              </span>
            </div>
          </div>
          <div className="suite-container21">
            <div className="suite-card23">
              <img
                alt="image"
                src="/playground_assets/icons8-alarm-100-200h.png"
                className="suite-image24"
              />
              <h4 className="suite-text056 heading4">Periféricos</h4>
              <span className="suite-text057 content-Light">
                Si requieres más bocinas, estorbos o luces para alertar de
                manera correcta todos tus espacios, nuestros expertos te
                asesorarán para implementarlos conforme a las mejores prácticas
                del mercado.
              </span>
            </div>
          </div>
          <div id="desk" className="suite-container22">
            <div className="suite-container23">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_081-200h.png"
                rootClassName="solucionescard1-root-class-name35"
              ></Solucionescard1>
              <div className="suite-container24">
                <div className="suite-container25">
                  <span className="suite-text058">
                    Solución de alertamiento sísmico temprano con software
                    receptor; software para computadoras
                  </span>
                  <span className="suite-text059">¡Nuevo y exclusivo!</span>
                  <div className="suite-container26">
                    <h1 className="suite-text060">SkyAlert</h1>
                    <h1 className="suite-text061">Desk</h1>
                  </div>
                  <span className="suite-text062">
                    Software receptor para alertamiento sísmico y otros peligros
                    naturales.
                  </span>
                  <span className="suite-text063">
                    Desk es un receptor diseñado, principalmente, para
                    alertamiento temprano en negocios pequeños, sucursales y
                    para empleados en casa.
                  </span>
                  <span className="suite-text064">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="suite-text065">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <BulletSoluciones
            heading="Se puede descargar en cualquier computadora con sistemas operativos Windows, Mac o Linux"
            rootClassName="bullet-soluciones-root-class-name1"
          ></BulletSoluciones>
          <BulletSoluciones rootClassName="bullet-soluciones-root-class-name15"></BulletSoluciones>
          <BulletSoluciones
            heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local"
            rootClassName="bullet-soluciones-root-class-name"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Muy fácil de instalar sin necesidad de implementar hardware externo"
            rootClassName="bullet-soluciones-root-class-name40"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Alertas más rápidas y precisas. Todos los usuarios reciben las notificaciones al mismo tiempo"
            rootClassName="bullet-soluciones-root-class-name2"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Envío de  mensajes corporativos clave; se pueden organizar en grupos desde un administrador"
            rootClassName="bullet-soluciones-root-class-name4"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Reporte inmediato de alertas recibidas desde cada receptor"
            rootClassName="bullet-soluciones-root-class-name3"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Monitoreo de dispositivos para garantizar la conectividad"
            rootClassName="bullet-soluciones-root-class-name5"
          ></BulletSoluciones>
          <img
            alt="image"
            src="/playground_assets/mockup-1400w.png"
            className="suite-image25"
          />
          <div className="suite-container27">
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20tormenta%20info-1200w.png"
              className="suite-image26"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20sismica-1200w.png"
              className="suite-image27"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20ciclon%20info-1200w.png"
              className="suite-image28"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__anuncio%20corporativo-1200w.png"
              className="suite-image29"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla_simulacro-1200w.png"
              className="suite-image30"
            />
          </div>
          <div className="suite-container28">
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20sismica-1200w.png"
              className="suite-image31"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20tormenta%20info-1200w.png"
              className="suite-image32"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla_simulacro-1200w.png"
              className="suite-image33"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20ciclon%20info-1200w.png"
              className="suite-image34"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__anuncio%20corporativo-1200w.png"
              className="suite-image35"
            />
          </div>
          <div id="sky360" className="suite-container29">
            <div className="suite-container30">
              <Solucionescard1
                image_src="/playground_assets/suite-de-soluciones_121-200h.png"
                rootClassName="solucionescard1-root-class-name38"
              ></Solucionescard1>
              <div className="suite-container31">
                <div className="suite-container32">
                  <span className="suite-text066">
                    Solución de alertamiento de otros peligros naturales
                  </span>
                  <div className="suite-container33">
                    <h1 className="suite-text067">SkyAlert</h1>
                    <h1 className="suite-text068">360</h1>
                  </div>
                  <span className="suite-text069">
                    Servicio de alertamiento temprano de otros peligros
                    naturales.
                  </span>
                  <span className="suite-text070">
                    El planeta, en específico nuestra región, está sufriendo los
                    efectos de peligros naturales con mayor frecuencia y cada
                    vez más extremos.
                  </span>
                  <span className="suite-text071">
                    {' '}
                    Sociedades vulnerables, que están expuestas a estos
                    peligros, tienen mayores afectaciones y pérdidas.
                  </span>
                  <span className="suite-text072">
                    {' '}
                    Atendiendo la necesidad de minimizar el riesgo de desastre,
                    desarrollamos una nueva solución para ayudar a disminuir el
                    impacto económico y social.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="suite-container34"></div>
          <div className="suite-container35">
            <div className="suite-container36">
              <h1>
                Alerta de otros
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <h1 className="suite-text074">
                {' '}
                peligros naturales
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
            </div>
            <div className="suite-container37">
              <div className="suite-card24">
                <img
                  alt="image"
                  src="/playground_assets/icons8-wind-gauge-100-200h.png"
                  className="suite-image36"
                />
                <h4 className="suite-text075 heading4">Meteorológicas</h4>
                <span className="suite-text076 content-Light">
                  Tormentas severas, inundaciones, ciclones tropicales, tiempo
                  invernal, olas de calor.
                </span>
              </div>
              <div className="suite-card25">
                <img
                  alt="image"
                  src="/playground_assets/icons8-tsunami-100-200h.png"
                  className="suite-image37"
                />
                <h4 className="suite-text077 heading4">Tsunamis</h4>
                <span className="suite-text078 content-Light">
                  De origen local, originado en costas de otros países que
                  afecten a México.
                </span>
              </div>
              <div className="suite-card26">
                <img
                  alt="image"
                  src="/playground_assets/icons8-volcano-100-200h.png"
                  className="suite-image38"
                />
                <h4 className="suite-text079 heading4">Volcánicas</h4>
                <span className="suite-text080 content-Light">
                  Emisión de ceniza. Cambio semáforo de alerta.
                </span>
              </div>
            </div>
            <div className="suite-container38">
              <div className="suite-card27">
                <img
                  alt="image"
                  src="/playground_assets/icons8-volcano-100-200h.png"
                  className="suite-image39"
                />
                <h4 className="suite-text081 heading4">Volcánicas</h4>
                <span className="suite-text082 content-Light">
                  Emisión de ceniza. Cambio semáforo de alerta.
                </span>
              </div>
            </div>
          </div>
          <span className="suite-text083">
            ¡Los desastres no son naturales!
          </span>
          <div className="suite-container39">
            <img
              alt="image"
              src="/playground_assets/b-400w.png"
              className="suite-image40"
            />
            <img
              alt="image"
              src="/playground_assets/c-400w.png"
              className="suite-image41"
            />
            <img
              alt="image"
              src="/playground_assets/d-400w.png"
              className="suite-image42"
            />
          </div>
          <span className="suite-text084">¡Los desastres son sociales!</span>
          <div id="safetyadmin" className="suite-container40">
            <div className="suite-container41">
              <div className="suite-card28">
                <img
                  alt="image"
                  src="/playground_assets/suite-de-soluciones_041-200h.png"
                  className="suite-image43"
                />
              </div>
              <div className="suite-container42">
                <div className="suite-container43">
                  <span className="suite-text085">
                    Panel de administración web para receptores
                  </span>
                  <div className="suite-container44">
                    <h1 className="suite-text086">SkyAlert</h1>
                    <h1 className="suite-text087">Safety Admin</h1>
                  </div>
                  <div className="suite-container45">
                    <h1 className="suite-text088">SkyAlert</h1>
                    <h1 className="suite-text089">Safety Admin</h1>
                  </div>
                  <span className="suite-text090">
                    Toma el control de toda la información
                  </span>
                  <span className="suite-text091">
                    ¡Plataforma de uso exclusivo para administradores!
                  </span>
                  <span className="suite-text092">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="suite-text093">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <BulletSoluciones
            heading="Plataforma diseñada para controlar todo desde un solo lugar: permisos, conectividad, reportes finales, entre otros"
            rootClassName="bullet-soluciones-root-class-name6"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Alta y baja de licencias y formas o métodos de pago"
            rootClassName="bullet-soluciones-root-class-name9"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Envío segmentado de información corporativa para todas las sucursales y todos sus gestores"
            rootClassName="bullet-soluciones-root-class-name7"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Visualización de eventos enviados a cada sucursal como: recepción de alertamiento temprano, reporte de daños y otros"
            rootClassName="bullet-soluciones-root-class-name8"
          ></BulletSoluciones>
          <div className="suite-container46"></div>
        </main>
      </div>
      <img
        alt="image"
        src="/playground_assets/mockup-sadmin-1200w.png"
        className="suite-image44"
      />
      <div className="suite-container47">
        <div id="stoss" className="suite-container48">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
            className="suite-image45"
          />
          <div className="suite-container49">
            <h2 className="suite-text094 heading2">
              <span>
                Integración
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span></span>
              <span className="suite-text097">Servidor a Servidor</span>
            </h2>
          </div>
        </div>
      </div>
      <BulletSoluciones
        heading="Alertamiento segmentado, informativo  y rápido (&lt; 100 ms) recibido directamente en tu infraestructura"
        rootClassName="bullet-soluciones-root-class-name26"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local"
        rootClassName="bullet-soluciones-root-class-name31"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Cifrado punto a punto con robustos estándares de seguridad"
        rootClassName="bullet-soluciones-root-class-name30"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Pensado para sistemas existentes en producción; la integración de SkyAlert SaaS es segura, sencilla y transparente"
        rootClassName="bullet-soluciones-root-class-name29"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Úsalo out-of-the-box o solicita una integración personalizada a tu nube e infraestructura."
        rootClassName="bullet-soluciones-root-class-name28"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Ambiente de pruebas dedicado y soporte para equipos técnicos"
        rootClassName="bullet-soluciones-root-class-name27"
      ></BulletSoluciones>
      <img
        alt="image"
        src="/playground_assets/server-1500w.png"
        className="suite-image46"
      />
      <div className="suite-container50">
        <div id="stoc" className="suite-container51">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
            className="suite-image47"
          />
          <div className="suite-container52">
            <h2 className="suite-text098 heading2">
              <span>
                Integración
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="suite-text100">Servidor a Cliente</span>
            </h2>
          </div>
        </div>
      </div>
      <BulletSoluciones
        heading="Alertamiento rápido (&lt; 100 ms) recibido directamente en dispositivos IoT"
        rootClassName="bullet-soluciones-root-class-name32"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local"
        rootClassName="bullet-soluciones-root-class-name38"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Monitoreo de conexión y recepción de alertas"
        rootClassName="bullet-soluciones-root-class-name37"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Fácil integración a una amplia gama de tecnologías, usando protocolos estándar de comunicación IoT"
        rootClassName="bullet-soluciones-root-class-name36"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Sistema administrado de configuración remota"
        rootClassName="bullet-soluciones-root-class-name35"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Administración centralizada de dispositivos, lado a lado con otros receptores SkyAlert"
        rootClassName="bullet-soluciones-root-class-name34"
      ></BulletSoluciones>
      <div className="suite-container53">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image48"
        />
        <h3 className="suite-text101">
          Ambiente de pruebas dedicado y soporte para equipos técnicos
        </h3>
      </div>
      <div id="paquetes" className="suite-container54">
        <div className="suite-container55">
          <div className="suite-container56">
            <h2 className="suite-text102 heading2">
              <span>Paquetes comerciales de soluciones</span>
              <span className="suite-text104"></span>
            </h2>
            <div className="suite-container57">
              <div id="stoc" className="suite-container58">
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                  className="suite-image49"
                />
                <div className="suite-container59">
                  <h2 className="suite-text105 heading2">
                    <span>Paquetes de soluciones comerciales</span>
                  </h2>
                </div>
              </div>
            </div>
            <span className="suite-text107">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="suite-container60">
        <div className="suite-container61">
          <div className="suite-card29">
            <span className="suite-text108">Paquete</span>
            <h1 className="suite-text109">MAX</h1>
            <ul className="list">
              <li className="list-item">
                <span className="suite-text110">
                  <br></br>
                  <span>1 dispositivo receptor</span>
                  <br></br>
                  <span>
                    2 bocinas
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    1 amplificador
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>1 base para amplificador</span>
                  <br></br>
                  <span>2 cables de audio y bocina</span>
                  <br></br>
                  <span>3 licencias Desk</span>
                  <br></br>
                  <span>3 suscripciones SkyAlert Gold</span>
                  <br></br>
                  <span>1 plataforma Safety Admin</span>
                  <br></br>
                  <span></span>
                </span>
              </li>
              <li className="list-item"></li>
              <li className="list-item"></li>
            </ul>
            <span className="suite-text122">Anual</span>
            <h1 className="suite-text123">$40,000*</h1>
            <span>*Términos y condiciones</span>
          </div>
          <div className="suite-card30">
            <span className="suite-text125">Paquete</span>
            <h1 className="suite-text126">Full</h1>
            <ul className="list">
              <li className="list-item">
                <span>
                  <span>1 dispositivo receptor</span>
                  <br></br>
                  <span>1 bocina</span>
                  <br></br>
                  <span>1 amplificador</span>
                  <br></br>
                  <span>1 base para amplificador</span>
                  <br></br>
                  <span>1 cable de audio y bocina</span>
                  <br></br>
                  <span>1 licencia Desk</span>
                  <br></br>
                  <span>1 suscripción SkyAlert Gold</span>
                  <br></br>
                  <span>1 plataforma Safety Admin</span>
                  <br></br>
                  <span></span>
                </span>
              </li>
              <li className="list-item"></li>
            </ul>
            <span className="suite-text137">Mensual</span>
            <h1 className="suite-text138">$25,000*</h1>
            <span>*Términos y condiciones</span>
          </div>
          <div className="suite-card31">
            <span className="suite-text140">Paquete</span>
            <h1 className="suite-text141">Desk Flex</h1>
            <ul className="list">
              <li className="list-item">
                <span>
                  <span>1 licencia Desk</span>
                  <br></br>
                  <span>1 plataforma Safety Admin</span>
                  <br></br>
                  <span></span>
                </span>
              </li>
              <li className="list-item"></li>
            </ul>
            <span className="suite-text146">MXN</span>
            <h1 className="suite-text147">$1,188*</h1>
            <span>*Términos y condiciones</span>
          </div>
        </div>
      </div>
      <span className="suite-text149">Términos y condiciones</span>
      <div className="suite-container62">
        <span className="suite-text150">
          <span>Precios antes de IVA (16%)</span>
          <br></br>
          <span>Precios en Moneda Nacional (MXN)</span>
          <br></br>
          <span>
            Los paquetes comerciales no incluyen el servicio de instalación
          </span>
          <br></br>
          <span>
            Una licencia Desk genera una única descarga por equipo de cómputo
          </span>
          <br></br>
          <span>
            Una licencia sobre la plataforma Safety Admin incluye hasta 3
            usuarios administradores
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Precios y valores agregados sobre licencias Desk, SkyAlert App GOLD
            válidos por el periodo de lanzamiento de abril-noviembre de 2022
          </span>
          <br></br>
          <span></span>
        </span>
      </div>
      <div id="labs" className="suite-container63">
        <div className="suite-container64">
          <Solucionescard1
            image_src="/playground_assets/suite-de-soluciones_101-200h.png"
            rootClassName="solucionescard1-root-class-name12"
          ></Solucionescard1>
          <div className="suite-container65">
            <div className="suite-container66">
              <div className="suite-container67">
                <h1 className="suite-text158">SkyAlert</h1>
                <h1 className="suite-text159">Labs</h1>
              </div>
              <span className="suite-text160">
                Laboratorio de tecnología avanzada
              </span>
            </div>
          </div>
        </div>
      </div>
      <BulletSoluciones
        heading="En este programa creamos e innovamos soluciones únicas que están orientadas al alertamiento de múltiples peligros naturales"
        rootClassName="bullet-soluciones-root-class-name17"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Nuestros clientes clave participan en una Prueba de Concepto (Proof of Concept - POC) de los productos y soluciones  beta que se están desarrollando"
        rootClassName="bullet-soluciones-root-class-name18"
      ></BulletSoluciones>
      <BulletSoluciones
        text1="Contamos con el apoyo de organismos internacionales que avalan nuestros desarrollos\n"
        heading="Contamos con el apoyo de organismos internacionales que avalan nuestros desarrollos"
        rootClassName="bullet-soluciones-root-class-name19"
      ></BulletSoluciones>
      <div className="suite-container68">
        <img
          alt="image"
          src="/playground_assets/lab1-1500w.png"
          className="suite-image50"
        />
      </div>
      <div className="suite-container69">
        <div className="suite-container70">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_22-200h.jpg"
            className="suite-image51"
          />
          <div className="suite-container71">
            <h2 className="suite-text161 heading2">
              <span>Beneficio SkyAlert Labs</span>
              <span className="suite-text163"></span>
            </h2>
            <span className="suite-text164">
              Como resultado, al finalizar la fase beta, tendrás una solución de
              alto impacto en la prevención de riesgos de desastres.
            </span>
          </div>
        </div>
      </div>
      <BulletSoluciones
        heading="Ponemos a tu disposición lo mejor de SkyAlert anticipadamente"
        rootClassName="bullet-soluciones-root-class-name20"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Serás el primero en conocer nuestra tecnología más avanzada"
        rootClassName="bullet-soluciones-root-class-name25"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Participa con nuestros expertos en la personalización de las nuevas soluciones o servicios"
        rootClassName="bullet-soluciones-root-class-name24"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Acceso a precios preferenciales durante las pruebas de concepto y pruebas piloto"
        rootClassName="bullet-soluciones-root-class-name23"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Conversión a servicio regular al terminar las pruebas de concepto con una solución específicamente orientada a tus necesidades"
        rootClassName="bullet-soluciones-root-class-name22"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Seguimiento post-implementación para evaluar la evolución del proyecto"
        rootClassName="bullet-soluciones-root-class-name21"
      ></BulletSoluciones>
      <div id="cursos" className="heading_b1 suite-container72">
        <div className="suite-container73">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
            className="icon_b1 suite-image52"
          />
          <div className="suite-container74 heading2 text_b1">
            <h2 className="suite-text165 heading2">
              <span>Propuestas de valor agregado para tu empresa</span>
            </h2>
            <span className="suite-text167">
              Además del servicio de alertamiento sísmico para tu empresa,
              también te capacitamos en procesos de Protección Civil.
            </span>
            <span className="suite-text168">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="suite-text169">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/civil2-1500w.png"
        className="suite-image53"
      />
      <span className="suite-text170">
        Te brindamos el conocimiento para que tus brigadas estén preparadas ante
        emergencias originadas por:
      </span>
      <div className="suite-container75">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image54"
        />
        <h3 className="suite-text171">Sismos</h3>
      </div>
      <div className="suite-container76">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image55"
        />
        <h3 className="suite-text172">Tormentas y ciclones</h3>
      </div>
      <div className="suite-container77">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image56"
        />
        <h3 className="suite-text173">Incendios y explosiones</h3>
      </div>
      <h1 className="suite-text174">Módulos disponibles</h1>
      <div className="suite-container78">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image57"
        />
        <h3 className="suite-text175">Comunicación de la emergencia</h3>
      </div>
      <div className="suite-container79">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image58"
        />
        <h3 className="suite-text176">
          Integración de brigadas multifuncionales
        </h3>
      </div>
      <div className="suite-container80">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image59"
        />
        <h3 className="suite-text177">Brigada de evacuación</h3>
      </div>
      <div className="suite-container81">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image60"
        />
        <h3 className="suite-text178">Brigada de primeros auxilios</h3>
      </div>
      <div className="suite-container82">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image61"
        />
        <h3 className="suite-text179">
          Brigada de prevención y combate de incendio
        </h3>
      </div>
      <div className="suite-container83">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image62"
        />
        <h3 className="suite-text180">Brigada de búsqueda y rescate</h3>
      </div>
      <div className="suite-container84">
        <img
          alt="image"
          src="/playground_assets/suite-de-soluciones_25-200w.png"
          className="suite-image63"
        />
        <h3 className="suite-text181">Materiales peligrosos</h3>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default Suite
