import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import BulletSoluciones11 from '../components/bullet-soluciones11'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './app-sky-alert.css'

const AppSkyAlert = (props) => {
  return (
    <div className="app-sky-alert-container">
      <Helmet>
        <title>
          Descarga la App de SkyAlert Para Recibir Alertas Sísmicas en Vivo
        </title>
        <meta
          name="description"
          content="¡Recibe nuestras Alertas Sísmicas en Vivo! Con un solo clic tendrás a la mano los principales eventos de terremotos que podrían ocurrir. ¡Descubre cómo!"
        />
        <meta
          property="og:title"
          content="Descarga la App de SkyAlert Para Recibir Alertas Sísmicas en Vivo"
        />
        <meta
          property="og:description"
          content="¡Recibe nuestras Alertas Sísmicas en Vivo! Con un solo clic tendrás a la mano los principales eventos de terremotos que podrían ocurrir. ¡Descubre cómo!"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name1"></Navbarblack>
      <div className="app-sky-alert-container01">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text01">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text02">SkyAlert App</span>
      </div>
      <main className="app-sky-alert-main">
        <div className="app-sky-alert-container02">
          <div className="app-sky-alert-container03">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image"
            />
            <div className="app-sky-alert-container04">
              <h2 className="app-sky-alert-text03 heading2">
                <span>
                  La App de alertamiento sísmico más descargada en México
                </span>
                <span className="app-sky-alert-text05"></span>
              </h2>
              <span className="app-sky-alert-text06">
                Te ofrecemos la aplicación de prevención más innovadora del
                mercado, incluida la alerta sísmica que funciona gracias a la
                REDSkyAlert; la red de detección sísmica privada con mayor
                cobertura en México.
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/app_07-1500w.jpg"
          className="app-sky-alert-image01"
        />
        <div className="app-sky-alert-container05">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
            className="app-sky-alert-image02 img_shii"
          />
          <div className="app-sky-alert-container06">
            <h2 className="app-sky-alert-text07 heading2">
              <span>
                Nuestros usuarios reconocen el valor de
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text09">SkyAlert App</span>
            </h2>
            <span className="app-sky-alert-text10">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="app-sky-alert-container07">
          <div className="app-sky-alert-container08">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text11">@LetiMorales18</span>
            <span className="app-sky-alert-text12">
              <span>26 de mayo 2022</span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text16">
              (Cobertura sismo Perú - Magnitud 7.2)
            </span>
            <span className="app-sky-alert-text17">
              <span className="app-sky-alert-text18">@SkyAlertMx</span>
              <span className="app-sky-alert-text19">
                {' '}
                Gracias por mantenernos informados si no fuera por ustedes,
                nunca nos enteraríamos de estos sucesos sin importar la hora del
                mismo, nos ayuda a prevenir, no estamos libres que suceda en
                nuestra localidad, estado o país
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container09">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon02"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text20">@CuakyWacky</span>
            <span className="app-sky-alert-text21">
              <span>
                Sismo 7 septiembre 2021
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text25">
              (Severo - Magnitud 7.1 en Acapulco, Gro)
            </span>
            <span className="app-sky-alert-text26">
              <span className="app-sky-alert-text27">
                Gracias
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text28">@SkyAlertMx</span>
              <span className="app-sky-alert-text29">
                {' '}
                por avisar segundos antes del
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text30">#sismo</span>
              <span className="app-sky-alert-text31">
                , me dio tiempo de poner a salvo a mis perritos y a mi 🥺🦮
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container10">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text32">
              @Kbo_Marquez
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text33">
              <span>Sismo 23 de junio 2020</span>
            </span>
            <span className="app-sky-alert-text35">
              (Severo - Magnitud 7.4 en Huatulco, Oax)
            </span>
            <span className="app-sky-alert-text36">
              <span className="app-sky-alert-text37">@SkyAlertMx</span>
              <span className="app-sky-alert-text38">
                {' '}
                Gracias SkyAlert me diste fácil 2 min para ponerme a salvo solo
                por eso ya me suscribí a gold (nuevamente).
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container11">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text39">@jose_horror</span>
            <span className="app-sky-alert-text40">
              <span>Sismo 18 de febrero 2016</span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text44">
              (Severo - Magnitud 7.1 en Pinotepa Nacional, Oax)
            </span>
            <span className="app-sky-alert-text45">
              <span className="app-sky-alert-text46">#AlertaSísmica</span>
              <span className="app-sky-alert-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text48">@SkyAlertMx</span>
              <span className="app-sky-alert-text49">
                . Estaba dando clases y me avisó con anticipación, puse a salvo
                a mis alumnos! Gracias!!
              </span>
            </span>
          </div>
        </div>
        <div className="app-sky-alert-container12">
          <h2 className="app-sky-alert-text50 heading2">
            <span className="app-sky-alert-text51">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text52">
              Tus suscripciones
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text53">
              hicieron posible que Chiapas, Veracruz, Morelos y Estado de
              México, tuvieran por primera vez un
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text54">
              sistema de alertamiento sísmico
            </span>
            <span className="app-sky-alert-text55">.</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Con tu apoyo la cobertura seguirá creciendo.</span>
          </h2>
          <div className="app-sky-alert-container13">
            <span className="app-sky-alert-text60">
              Plataformas de descarga en donde puedes encontrar SkyAlert
            </span>
          </div>
        </div>
        <footer className="app-sky-alert-footer section-container">
          <div className="app-sky-alert-container14">
          <a
            href="https://play.google.com/store/apps/details?id=com.disappster.skyalert&amp;hl=es_419"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_40-300h.jpg"
              className="app-sky-alert-image03"
            />
            </a>
            <a
              href="https://apps.apple.com/mx/app/skyalert/id774381416?l=en"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_42-300h.jpg"
              className="app-sky-alert-image04"
            />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C102311417"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_44-300h.png"
              className="app-sky-alert-image05"
            />
            </a>
          </div>
        </footer>
        <div className="app-sky-alert-container15">
          <div className="app-sky-alert-container16">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image06"
            />
            <div className="app-sky-alert-container17">
              <h2 className="app-sky-alert-text61 heading2">
                <span>Conoce los beneficios de SkyAlert App</span>
                <span className="app-sky-alert-text63"></span>
              </h2>
              <span className="app-sky-alert-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="app-sky-alert-container18">
          <div className="app-sky-alert-container19">
            <div className="app-sky-alert-card">
              <img
                alt="image"
                src="/playground_assets/icons8-alarm-100-200h.png"
                className="app-sky-alert-image07"
              />
              <h4 className="app-sky-alert-text65 heading4">
                Recibe alertas sísmicas
              </h4>
              <span className="app-sky-alert-text66 content-Light">
                Descarga la app más avanzada de alertamiento sísmico. Recibirás
                alertas con el tiempo estimado de arribo de un sismo con hasta 3
                minutos de anticipación*, aunque tu teléfono esté en modo
                &quot;No Molestar&quot;.
              </span>
            </div>
            <div className="app-sky-alert-card1">
              <img
                alt="image"
                src="/playground_assets/icons8-vibration-32-200h.png"
                className="app-sky-alert-image08"
              />
              <h4 className="app-sky-alert-text67 heading4">
                Intensidad Local
              </h4>
              <span className="app-sky-alert-text68 content-Light">
                Sólo recibirás alertas con la intensidad que se espera en tu
                ubicación.
              </span>
            </div>
            <div className="app-sky-alert-card2">
              <img
                alt="image"
                src="/playground_assets/icons8-gold-100-200h.png"
                className="app-sky-alert-image09"
              />
              <h4 className="app-sky-alert-text69 heading4">
                Obtén beneficios con SkyAlert GOLD
              </h4>
              <span className="app-sky-alert-text70 content-Light">
                Además de contar con intensidad en tu ubicación, también recibes
                el tiempo estimado de arribo y puedes agregar hasta 3
                ubicaciones adicionales
              </span>
            </div>
          </div>
          <div className="app-sky-alert-container20">
            <div className="app-sky-alert-card3">
              <img
                alt="image"
                src="/playground_assets/icons8-3d-touch-50-200h.png"
                className="app-sky-alert-image10"
              />
              <h4 className="app-sky-alert-text71 heading4">
                Filtro sísmico inteligente
              </h4>
              <span className="app-sky-alert-text72 content-Light">
                Con SkyAlert app, todos reciben alertas de sismos que pueden
                sentirse en su localidad.
              </span>
            </div>
            <div className="app-sky-alert-card4">
              <img
                alt="image"
                src="/playground_assets/icons8-clock-50-200h.png"
                className="app-sky-alert-image11"
              />
              <h4 className="app-sky-alert-text73 heading4">
                TEA (Tiempo Estimado de Arribo)
              </h4>
              <span className="app-sky-alert-text74 content-Light">
                Te notificamos cuántos segundos tienes antes de la llegada de un
                sismo a tu ubicación
              </span>
              <span>*Sólo usuarios Gold</span>
            </div>
            <div className="app-sky-alert-card5">
              <img
                alt="image"
                src="/playground_assets/icons8-volcano-100-200h.png"
                className="app-sky-alert-image12"
              />
              <h4 className="app-sky-alert-text76 heading4">
                Notificaciones de otros peligros naturales
              </h4>
              <span className="app-sky-alert-text77 content-Light">
                Actividad volcánica, tsunamis, sismos internacionales, eventos
                meteorológicos, entre otros.
              </span>
            </div>
          </div>
        </div>
        <div className="app-sky-alert-container21">
          <div className="app-sky-alert-container22">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image13"
            />
            <div className="app-sky-alert-container23">
              <h2 className="app-sky-alert-text78 heading2">
                <span>¡Sé parte de SkyAlert Gold!</span>
                <span className="app-sky-alert-text80"></span>
              </h2>
              <span className="app-sky-alert-text81">
                Generamos confianza por la calidad de nuestros servicios.
              </span>
            </div>
          </div>
        </div>
        <BulletSoluciones11
          text="Conoce el tiempo estimado en el que se comenzará a sentir un sismo en tu ubicación, para que actives los protocolos de protección adecuados conforme al tiempo con el que cuentas"
          heading="Alertas con el tiempo estimado de arribo de un sismo"
          rootClassName="bullet-soluciones11-root-class-name4"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="Recibe alertas donde quiera que te encuentres y mantente informado sobre la actividad sísmica en otros estados"
          heading="Alertas de sismos de acuerdo a tu ubicación GPS y hasta tres localidades más"
          rootClassName="bullet-soluciones11-root-class-name3"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="¡Navega por todas las secciones de la app sin publicidad, sin tener que configurar nada!"
          heading="Olvídate de los anuncios"
          rootClassName="bullet-soluciones11-root-class-name2"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="Personaliza alertas y notificaciones de otros peligros naturales, como tsunamis, tormentas y ciclones tropicales"
          heading="Alertas de peligros naturales"
          rootClassName="bullet-soluciones11-root-class-name1"
        ></BulletSoluciones11>
      </main>
      <img
        alt="image"
        src="/playground_assets/app_12-1500w.png"
        className="app-sky-alert-image14"
      />
      <h1 className="app-sky-alert-text82">
        <span className="app-sky-alert-text83">
          Descarga #LaAlertaConfiable en la tienda de aplicaciones de acuerdo al
          Sistema Operativo de tu dispositivo móvil
        </span>
      </h1>
      <h1 className="app-sky-alert-text84">
        <span>
          Descarga
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text86">#LaAlertaConfiable</span>
        <span>
          {' '}
          en la tienda de aplicaciones, de acuerdo al Sistema Operativo de tu
          móvil
        </span>
      </h1>
      <h1 className="app-sky-alert-text88">
        <span>¡Suscríbete y sé parte de la cultura de la prevención!</span>
      </h1>

      <Footer rootClassName="footer-root-class-name4"></Footer>
      <Copyright rootClassName="copyright-root-class-name2"></Copyright>
    </div>
  )
}

export default AppSkyAlert
