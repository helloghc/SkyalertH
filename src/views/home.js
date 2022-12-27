import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import MaxWidth from '../components/max-width'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sistema de Alertamiento Sísmico: Seguridad Garantizada</title>
        <meta
          name="description"
          content="Sistema de alertamiento sísmico, detectamos al momento de producirse un sismo y notificamos a los usuarios antes de que llegue a su localidad. ¡Conócelo!"
        />
        <meta
          property="og:title"
          content="Sistema de Alertamiento Sísmico: Seguridad Garantizada"
        />
        <meta
          property="og:description"
          content="Sistema de alertamiento sísmico que detecta los eventos momentos antes de que se produzcan y notifica a los usuarios en peligro. ¡Conócelo!"
        />
      </Helmet>
      <div className="home-container01">
        <main className="home-main">
          <div className="home-hero section-container">
            <Navbar rootClassName="navbar-root-class-name"></Navbar>
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="home-text heading1">
                  <span>
                    Soluciones de alertamiento sísmico y otros peligros
                    naturales
                  </span>
                </h1>
                <span className="home-text02">
                  <span>
                    Somos una empresa dedicada al desarrollo de soluciones
                    tecnológicas para el alertamiento sísmico y otros peligros
                    naturales,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    con más de 10 años de experiencia en innovación a favor de
                    la prevención.
                  </span>
                  <br></br>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <a
                href="https://safety.skyalert.mx/login"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_031-1200w.png"
                  className="home-image"
                />
              </a>
            </div>
          </div>
          <div className="home-container02">
            <div className="home-container03">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="home-image01 img_shii"
              />
              <div className="home-container04">
                <h2 className="home-text08 heading2">
                  <span>
                    Empresas que también confían en
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text10">SkyAlert</span>
                </h2>
                <span className="home-text11">
                  Generamos confianza por la calidad de nuestros servicios.
                </span>
              </div>
            </div>
          </div>
          <div className="home-container05">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_121-1500w.png"
              className="home-image02"
            />
          </div>
          <div className="home-container06">
            <div className="home-container07">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="home-image03 img_shii"
              />
              <div className="home-container08">
                <h2 className="home-text12 heading2">
                  <span>
                    Nuestros clientes reconocen nuestro valor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h2>
                <span className="home-text15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="home-container09">
            <div className="home-container10">
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_09-200w.png"
                  className="home-image04"
                />
                <span className="home-text16">
                  “SkyAlert es una empresa con una tecnología innovadora que
                  contribuye a alertar oportunamente a millones de personas que
                  viven no sólo aquí en la Cd. De México. Promueven una cultura
                  de prevención ante sismos y peligros naturales. Implementan un
                  servicio eficiente del envío de la alerta que permite que
                  llegue el mensaje y la alarma en pocos segundos”
                </span>
              </div>
              <div className="home-container12">
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_15-200h.jpg"
                  className="home-image05"
                />
                <span className="home-text17">
                  “El servicio y atención han sido eficientes y oportunos cuando
                  así se ha necesitado. Felicidades, SkyAlert, por su 10°
                  aniversario, les deseamos que sigan ofreciendo el excelente
                  servicio que hasta ahora los ha caracterizado. Que sigan
                  creciendo y cosechando éxitos”
                </span>
              </div>
              <div className="home-container13">
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_12-200h.jpg"
                  className="home-image06"
                />
                <span className="home-text18">
                  “SkyAlert nos ha brindado la oportunidad de lograr este
                  cometido gracias al servicio que brinda, alertando a tiempo un
                  evento como este, así como apoyando en las activaciones vía
                  remota para la realización de simulacros o el apoyo para
                  mantenimiento de los equipos y asesorías”
                </span>
              </div>
            </div>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_22-200h.jpg"
                className="home-image07"
              />
              <div className="home-container16">
                <h2 className="home-text19 heading2">
                  <span>Alertamiento sísmico para empresas</span>
                  <span className="home-text21"></span>
                </h2>
                <span className="home-text22">
                  ¿Qué harías con hasta 3 minutos* antes de un sismo?
                </span>
              </div>
            </div>
          </div>
          <div className="home-section-one section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-cards-container">
                <FeatureCard
                  text="Pausa procesos críticos de producción, enciende luces de emergencia. También suspende servicios como suministro de gas, elevadores y escaleras eléctricas."
                  heading="Prevención en tu organización"
                  image_src="/playground_assets/icons8-organization-chart-people-80-200h.png"
                  rootClassName="feature-card-root-class-name2"
                ></FeatureCard>
                <FeatureCard
                  text="Monitorea tus dispositivos receptores, realiza o programa simulacros desde el panel de administración “Safety Admin”."
                  text1="See how &gt;"
                  heading="Prevención en todo momento"
                  image_src="/playground_assets/icons8-calendar-15-50-200h.png"
                  rootClassName="feature-card-root-class-name1"
                ></FeatureCard>
                <FeatureCard
                  text="Las alertas sísmicas las podrás recibir con hasta 3 minutos* antes del evento sísmico,  de acuerdo con el epicentro. *Tiempo máximo para CDMX desde Tapachula, Chiapas."
                  text1="Learn more &gt;"
                  heading="Alertas Anticipadas"
                  image_src="/playground_assets/icons8-alarm-100-200h.png"
                  rootClassName="feature-card-root-class-name"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="heading_b1 home-container17">
            <div className="home-container18">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="home-image08 icon_b1"
              />
              <div className="home-container19 heading2 text_b1">
                <h2 className="home-text23">
                  <span>SkyAlert App (uso personal)</span>
                  <span className="home-text25"></span>
                </h2>
                <span className="home-text26">
                  Lleva #LaAlertaConfiable en tu celular para que siempre estés
                  prevenido ante sismos.
                </span>
                <span className="home-text27">
                  Más de 10.000.000 de descargas
                </span>
                <span className="home-text28">Más de 500 sismos alertados</span>
              </div>
            </div>
          </div>
          <MaxWidth
            text1='Descarga la app más avanzada de alertamiento sísmico. Recibirás alertas con el tiempo estimado de arribo de un sismo con hasta 3 minutos de anticipación*, aunque tu teléfono esté en modo "No Molestar"  (exclusivo para usuarios GOLD).'
            text11="Con SkyAlert App, todos reciben alertas de sismos que puedan sentirse en su localidad, de manera simultanea."
            text12="Navega sin anuncios, recibe el tiempo estimado de arribo y agrega hasta 3 ubicaciones adicionales, además de tu GPS."
            text13="Recibirás alertas con la intensidad que se espera en tu ubicación."
            text111="Actividad volcánica, tsunamis, sismos internacionales, eventos meteorológicos, entre otros."
            text112="Te notificamos cuántos segundos tienes antes de la llegada de un sismo a tu ubicación."
            heading1="Recibe alertas sísmicas"
            heading11="Filtro sísmico inteligente"
            heading12="Obtén beneficios con SkyAlert Gold"
            heading13="Intensidad local"
            heading111="Notificaciones de otros peligros naturales"
            heading112="TEA (Tiempo Estimado de Arribo)"
            image_src1="/playground_assets/icons8-alarm-100-200h.png"
            image_src11="/playground_assets/icons8-3d-touch-50-200h.png"
            image_src12="/playground_assets/icons8-gold-100-200h.png"
            image_src13="/playground_assets/icons8-vibration-32-200h.png"
            image_src111="/playground_assets/icons8-volcano-100-200h.png"
            image_src112="/playground_assets/icons8-clock-50-200h.png"
            rootClassName="max-width-root-class-name"
          ></MaxWidth>
          <div className="home-max-width2 max-content-container homeskyapp">
            <div className="home-cards-container1">
              <div className="home-container20">
                <div className="home-container21">
                  <div className="home-card">
                    <img
                      alt="image"
                      src="/playground_assets/icons8-alarm-100-200h.png"
                      className="home-image09"
                    />
                    <h4 className="home-text29 heading4">
                      Recibe alertas sísmicas
                    </h4>
                    <span className="home-text30 content-Light">
                      Descarga la app más avanzada de alertamiento sísmico.
                      Recibirás alertas con el tiempo estimado de arribo de un
                      sismo con hasta 3 minutos de anticipación*, aunque tu
                      teléfono esté en modo &quot;No Molestar&quot; (exclusivo
                      para usuarios GOLD).
                    </span>
                  </div>
                  <div className="home-card1">
                    <img
                      alt="image"
                      src="/playground_assets/icons8-vibration-32-200h.png"
                      className="home-image10"
                    />
                    <h4 className="home-text31 heading4">Intensidad local</h4>
                    <span className="home-text32 content-Light">
                      Todas las alertas se filtran automáticamente, así solo
                      recibirás alertas con la intensidad que se espera en tu
                      ubicación.
                    </span>
                  </div>
                  <div className="home-card2">
                    <img
                      alt="image"
                      src="/playground_assets/icons8-gold-100-200h.png"
                      className="home-image11"
                    />
                    <h4 className="home-text33 heading4">
                      Obtén beneficios con SkyAlert Gold
                    </h4>
                    <span className="home-text34 content-Light">
                      Navega sin anuncios, recibe el tiempo estimado de arribo y
                      agrega hasta 3 ubicaciones adicionales, además de tu GPS.
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-container22">
                <div className="home-card3">
                  <img
                    alt="image"
                    src="/playground_assets/icons8-3d-touch-50-200h.png"
                    className="home-image12"
                  />
                  <h4 className="home-text35 heading4">
                    Filtro sísmico inteligente
                  </h4>
                  <span className="home-text36 content-Light">
                    Con SkyAlert 4, todos reciben alertas de sismos que puedan
                    sentirse en su localidad.
                  </span>
                </div>
                <div className="home-card4">
                  <img
                    alt="image"
                    src="/playground_assets/icons8-clock-50-200h.png"
                    className="home-image13"
                  />
                  <h4 className="home-text37 heading4">
                    TEA (Tiempo Estimado de Arribo)
                  </h4>
                  <span className="home-text38 content-Light">
                    Te notificamos cuántos segundos tienes antes de la llegada
                    de un sismo a tu ubicación.
                  </span>
                </div>
                <div className="home-card5">
                  <img
                    alt="image"
                    src="/playground_assets/icons8-volcano-100-200h.png"
                    className="home-image14"
                  />
                  <h4 className="home-text39 heading4">
                    Notificaciones de otros peligros naturales
                  </h4>
                  <span className="home-text40 content-Light">
                    Actividad volcánica, tsunamis, sismos internacionales,
                    eventos meteorológicos, entre otros.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container23">
            <h2 className="home-text41 heading2">
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text43">
                Tus suscripciones
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text44">
                hicieron posible que Chiapas, Veracruz, Morelos y Estado de
                México, tuvieran por primera vez un
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text45">
                sistema de alertamiento sísmico
              </span>
              <span className="home-text46">.</span>
              <br></br>
              <span></span>
              <br></br>
              <span>Con tu apoyo la cobertura seguirá creciendo.</span>
            </h2>
            <div className="home-container24">
              <span className="home-text51">
                Plataformas de descarga en donde puedes encontrar SkyAlert
              </span>
            </div>
          </div>
          <div className="home-container25">
            <a
              href="https://play.google.com/store/apps/details?id=com.disappster.skyalert&amp;hl=en&amp;gl=US"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_40-300h.jpg"
                className="home-image15"
              />
            </a>
            <a
              href="https://apps.apple.com/mx/app/skyalert/id774381416"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_42-300h.jpg"
                className="home-image16"
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C102311417"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_44-300h.png"
                className="home-image17"
              />
            </a>
          </div>
          <div className="heading_b1 home-container26">
            <div className="home-container27">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
                className="home-image18 icon_b1"
              />
              <div className="home-container28 heading2 text_b1">
                <h2 className="home-text52">
                  <span>¿Qué es la REDSkyAlert y cómo funciona?</span>
                  <span className="home-text54"></span>
                </h2>
                <span className="home-text55">
                  Con más de 120 sensores sísmicos, es la única red privada para
                  la detección de sismos que cubre más del 80% de las zonas de
                  mayor peligro sísmico en México. REDSkyAlert es fuente propia
                  para nuestras alertas sísmicas que cuenta con la capacidad de
                  confirmar o descartar un sismo en tan solo milisegundos.
                </span>
                <span className="home-text56">
                  ¡REDSkyAlert cuenta con la cobertura más grande de todo
                  México!
                </span>
                <span className="home-text57">
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
            src="/playground_assets/skyalert-%5B2%5D_56-1500w.png"
            className="home-image19"
          />
          <div className="home-container29">
            <div className="home-container30">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_22-200h.jpg"
                className="home-image20"
              />
              <div className="home-container31">
                <h2 className="home-text58 heading2">
                  <span>Súmate a la comunidad SkyAlert</span>
                  <span className="home-text60"></span>
                </h2>
                <span className="home-text61">
                  Publicamos la mejor información de manera oportuna y veraz.
                </span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_58-1500w.jpg"
            className="home-image21"
          />
          <div className="home-container32">
            <div className="home-container33">
              <a
                href="https://www.facebook.com/SkyAlertMx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_60-600w.png"
                  className="home-image22"
                />
              </a>
              <div className="home-container34">
                <a
                  href="https://twitter.com/skyalertmx"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  <img
                    alt="image"
                    src="/playground_assets/skyalert-%5B2%5D_67-500w.png"
                    className="home-image23"
                  />
                </a>
              </div>
              <a
                href="https://www.instagram.com/skyalertmx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_62-600w.png"
                  className="home-image24"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/skyalert-mx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_70-600w.png"
                  className="home-image25"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJwJrlu4G7kmOKyoVXzUhbA"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_64-600w.png"
                  className="home-image26"
                />
              </a>
            </div>
          </div>
          <div className="home-container35">
            <div className="home-container36">
              <a
                href="https://www.facebook.com/SkyAlertMx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_60-600w.png"
                  className="home-image27"
                />
              </a>
              <a
                href="https://www.instagram.com/skyalertmx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_62-600w.png"
                  className="home-image28"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJwJrlu4G7kmOKyoVXzUhbA"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_64-600w.png"
                  className="home-image29"
                />
              </a>
            </div>
            <div className="home-container37">
              <a
                href="https://twitter.com/skyalertmx"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_67-500w.png"
                  className="home-image30"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/skyalert-mx/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <img
                  alt="image"
                  src="/playground_assets/skyalert-%5B2%5D_70-600w.png"
                  className="home-image31"
                />
              </a>
            </div>
          </div>
          <div className="home-container38">
          <a
            href="https://www.facebook.com/SkyAlertMx/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link04"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_60-600w.png"
              className="home-image32"
            />
            </a>
            <a
              href="https://www.instagram.com/skyalertmx/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06"
            >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_62-600w.png"
              className="home-image33"
            />
            </a>
            <a
              href="https://twitter.com/skyalertmx"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_67-500w.png"
              className="home-image34"
            />
            </a>
          </div>
          <div className="home-container39">
          <a
            href="https://www.linkedin.com/company/skyalert-mx/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link13"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_70-600w.png"
              className="home-image35"
            />
            </a>
            <a
              href="https://www.youtube.com/channel/UCJwJrlu4G7kmOKyoVXzUhbA"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_64-600w.png"
              className="home-image36"
            />
            </a>
          </div>
          <div className="home-container40">
            <div className="home-container41">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_22-200h.jpg"
                className="home-image37"
              />
              <div className="home-container42">
                <h2 className="home-text62 heading2">
                  <span>¡SkyAlert es una empresa excepcional!</span>
                  <span className="home-text64"></span>
                </h2>
                <span className="home-text65">
                  Gracias a nuestro proyecto “Reactivando México” fuimos
                  reconocidos como una Empresa Excepcional.
                </span>
              </div>
            </div>
          </div>
          <iframe
            id="youtube skyalert"
            src="https://www.youtube.com/embed/_t4vL_VK3II?start=1"
            allow="autoplay"
            allowFullScreen
            className="home-iframe"
          ></iframe>
        </main>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
      <Copyright rootClassName="copyright-root-class-name2"></Copyright>
    </div>
  )
}

export default Home
