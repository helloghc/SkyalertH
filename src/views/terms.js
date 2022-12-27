import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Términos y condiciones SkyAlert</title>
        <meta
          name="description"
          content="Sistema de alerta sísmica para México 120 segundos previo al impacto Más rápido que otros sistemas App de alerta sísmica gratuita para iOS y Android."
        />
        <meta property="og:title" content="Términos y condiciones SkyAlert" />
        <meta
          property="og:description"
          content="Sistema de alerta sísmica para México 120 segundos previo al impacto Más rápido que otros sistemas App de alerta sísmica gratuita para iOS y Android."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name2"></Navbarblack>
      <div className="terms-container1">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="terms-text001">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="terms-text002">Términos y condiciones</span>
      </div>
      <main className="terms-main">
        <div className="terms-container2"></div>
      </main>
      <span></span>
      <h1 className="terms-text004">Términos y condiciones de uso</h1>
      <span className="terms-text005">
        <span>
          SkyAlert de México, S.A.P.I.de C.V.(“SkyAlert”) contiene servicios y
          equipos que buscan salvar vidas, evitar accidentes y mitigar los
          efectos provocados por sismos ocurridos en los Estados Unidos
          Mexicanos(según sean desarrollados e instalados los sistemas de
          detección correspondientes en el territorio), a través de nuestra red
          de sensores sísmicos RED SkyAlert sustentada en tecnología innovadora,
          así como otros servicios relacionados.
        </span>
        <br></br>
        <br></br>
        <span>
          PARA SU BENEFICIO, PROTECCIÓN Y SEGURIDAD, REVISE CUIDADOSAMENTE ESTOS
          TÉRMINOS Y CONDICIONES, YA QUE CONSTITUYEN UN ACUERDO LEGAL ENTRE
          USTED Y SKYALERT EN RELACIÓN CON EL USO DE LOS EQUIPOS, DISPOSITIVOS O
          PRODUCTOS QUE USTED CONTRATE CON SKYALERT(LOS“ PRODUCTOS O
          DISPOSITIVOS”).
        </span>
        <br></br>
        <br></br>
        <span>
          AL USAR LOS PRODUCTOS O DISPOSITIVOS PROPORCIONADOS POR SKYALERT,
          USTED MANIFIESTA SU ACUERDO INCONDICIONAL A QUEDAR OBLIGADO CONFORME A
          TODOS Y CADA UNO DE LOS TÉRMINOS Y CONDICIONES AQUÍ SEÑALADOS.
        </span>
        <br></br>
        <br></br>
        <span>
          Los presentes términos y condiciones pueden ser modificados en
          cualquier tiempo.Dichas modificaciones serán válidas en forma
          inmediata al ser publicadas en la página de internet de SkyAlert.Al
          respecto, el Usuario deberá revisar y aceptar las modificaciones
          correspondientes para poder seguir haciendo uso de los Productos o
          Dispositivos proporcionados por SkyAlert
        </span>
        <br></br>
        <br></br>
        <span className="terms-text018">
          Productos o Dispositivos SkyAlert.
        </span>
        <br className="terms-text019"></br>
        <span>
          Los Productos o Dispositivos proporcionados por SkyAlert, están
          configurados para recibir información de nuestra red de sensores
          sísmicos RED SkyAlert.Derivado de esta implementación, se tiene la
          capacidad de detectar sismos cuya intensidad fluctúa en débil, leve,
          moderada, fuerte, violenta y severa.
        </span>
        <br></br>
        <br></br>
        <span>
          Una vez entregada la instalación finalizada al cliente, empezará a
          recibir en el sistema de Alertamiento sísmico SkyAlert, las alertas de
          sismos que representan un riesgo de acuerdo a la ubicación del equipo,
          intensidad y aceleración.Las intensidades que detonan una alerta
          sísmica son: Moderado, Fuerte, Violento y Severo.
        </span>
        <br></br>
        <br></br>
        <span>
          Con el objetivo de mantener una correcta práctica de protección civil
          y con la intención de evitar alertas innecesarias, e interrumpir las
          actividades propias de nuestros clientes, como procesos de
          fabricación, los eventos sísmicos cuyas intensidades no superen los
          rangos de débil y leve no serán notificados a los dispositivos.
        </span>
        <br></br>
        <br></br>
        <span>
          Los dispositivos modelo Epicenter, excluyendo Epicenter Lite, al
          contar con una pantalla digital interactiva, mostrará una notificación
          en forma de leyenda de los sismo débiles y leves detectados, sin
          embargo, estas notificaciones no deben ser consideradas alertas debido
          a que no representan un riesgo.
        </span>
        <br></br>
        <br></br>
        <span>
          Para ambos equipos, es necesario remarcar que dependiendo de los
          factores propios de la zona geográfica y el inmueble donde se
          encuentre instalado el dispositivo SkyAlert, la percepción particular
          del sismo podrá variar respecto al tipo de alerta emitido por
          SkyAlert. La cobertura de SkyAlert se limita específicamente a las
          zonas donde tenemos instalados sensores sísmicos propios de la Red
          SkyAlert.Sin embargo, por cuestiones geofísicas propias de los sismos,
          las alertas sísmicas emitidas por SkyAlert pueden o no alertar zonas
          geográficas del territorio mexicano donde aún no se cuente con la
          infraestructura de la Red SkyAlert.Sugerimos siempre validar la zona
          de cobertura con personal de SkyAlert, previo a cualquier tipo de
          ejercicio comercial.
        </span>
        <br></br>
        <br></br>
        <span>
          La decisión de participar, adquirir o comercializar los dispositivos
          SkyAlert es decisión absoluta del Cliente, en conocimiento concreto de
          los alcances, comentarios y / o cualquier otra información contenida
          en este documento y cualquier otro proporcionado por SkyAlert y sus
          representantes comerciales.
        </span>
        <br></br>
        <br></br>
        <span>
          Los Productos o Dispositivos pueden ser adquiridos directamente con
          SkyAlert, mediante el pago de la cuota correspondiente según se ampara
          con
        </span>
        <br></br>
        <span>las facturas que SkyAlert le emita.</span>
        <br></br>
        <br></br>
        <span>
          Una vez realizado el pago de la cuota de anticipo(50 % ), SkyAlert le
          podrá proporcionar los Productos o Dispositivos para recibir la señal
          de la alerta sísmica hasta por el tiempo contratado, el pago de la
          cuota restante(50 % ) se realizará al término de la instalación de los
          productos o dispositivos contratados con SkyAlert.
        </span>
        <br></br>
        <br></br>
        <span>
          No obstante, lo anterior, podrá ser requerido el pago de cantidades
          adicionales, por concepto de renovación o por cualquier otra índole
          que sea aplicable al producto o dispositivo y que al efecto sean
          determinados por SkyAlert, en cuyo caso dichos montos serán
          notificados al usuario y deberán ser cubiertos por el mismo para
          seguir recibiendo los servicios y usando los Productos o Dispositivos
          de SkyAlert.
        </span>
        <br></br>
        <br></br>
        <span>
          Ambas partes acuerdan que, en caso de existir falta de pago puntual de
          cualquiera de los importes estipulados en las facturas emitidas por
          SKYALERT hacia USTED, SKYALERT dará por vencido anticipadamente el
          saldo insoluto pendiente de pago y causará intereses moratorios a
          razón del 3.5 % (tres punto cinco por ciento) mensual más IVA como
          pena convencional durante todo el periodo que dure la mora. Los
          Productos o Dispositivos, únicamente deberán ser otorgados por
          SkyAlert, en caso contrario SkyAlert no se hace responsable por
          cualquier daño o perjuicio que le pudiera causar.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text052">Alerta Sísmica.</span>
        <br className="terms-text053"></br>
        <span>
          Obtener y transmitir información sísmica precisa y confiable implica
          un esfuerzo considerable que requiere tecnología que combina sistemas
          de detección locales y regionales, sistemas de transmisión de
          datos(incluyendo internet), redes telefónicas y electrónicas, social
          media, news media, entre otros.La transmisión de la alerta sísmica de
          SkyAlert depende de un sistema de detección privado, con tecnología de
          punta desarrollada y calibrada por instituciones líderes en su ramo,
          con la mayor confiabilidad existente hoy en día.No obstante, como
          cualquier desarrollo tecnológico, el sistema es falible y pueden
          ocurrir: (i) fallas de origen en las centrales de detección; (ii)
          fallas en el sistema de transmisión al servidor central; (iii) fallas
          en la transmisión del servidor central al Usuario; (iv) fallas en las
          redes electrónicas y / o Internet, incluyendo sin limitar aquellas
          derivadas de falta de abastecimiento energético o de proveedores de
          telecomunicaciones; (v) fallas debido a fenómenos climáticos o
          geológicos; (vi) robo; (vii) vandalismo; (viii) entre otras(las“
          Fallas”).
        </span>
        <br></br>
        <br></br>
        <span>
          Lo anterior, puede provocar que los sistemas de detección se activen
          en falso o no se activen, que los sistemas de transmisión no
          transmitan o transmitan erróneamente la información correspondiente y
          / o que los dispositivos de los Usuarios no reciban la información o
          la reciban de manera incorrecta Al respecto, el Usuario reconoce que
          la alerta sísmica está diseñada para proporcionar una alerta
          situacional respecto de la posibilidad de un sismo, pero NO debe ser
          utilizada como el único medio o fuente de información antes de tomar
          una decisión.En todo caso, Usted debe conocer y cumplir los protocolos
          de protección civil establecidos en el lugar donde se encuentre.
        </span>
        <br></br>
        <br></br>
        <span>
          Dependiendo de la zona del evento sísmico de que se trate, la alerta
          de SkyAlert puede dar aviso con 5 a 10 segundos como mínimo y con 115
          a 130 segundos como máximo de antelación.No es posible notificar en
          cada alerta los segundos antes de la ocurrencia del sismo en el punto
          de ubicación del Usuario, por lo que el Usuario deberá tomar las
          precauciones correspondientes considerando el tiempo mínimo de alerta.
        </span>
        <br></br>
        <br></br>
        <span>
          EL USUARIO RECONOCE QUE LAS FALLAS PUEDEN OCURRIR EN CUALQUIER MOMENTO
          Y POR MÚLTIPLES CAUSAS, POR LO QUE AL USAR O RECIBIR LOS SERVICIOS DE
          LOS PRODUCTOS O DISPOSITIVOS LO HACE BAJO SU PROPIA RESPONSABILIDAD Y
          RIESGO.POR LO ANTERIOR, EL USUARIO LIBERA A SKYALERT DE CUALQUIER
          RESPONSABILIDAD DERIVADA DE LOS PRODUCTOS O DISPOSITIVOS RELACIONADOS
          CON LA PRESTACIÓN DE LOS SERVICIOS DE SKYALERT, PRODUCTOS O
          DISPOSITIVOS, INCLUYENDO LA OCURRENCIA DE CUALQUIER FALLA, POR LO QUE
          RENUNCIA AL EJERCICIO DE CUALQUIER ACCIÓN EN CONTRA DE SKYALERT POR
          ESTOS CONCEPTOS.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text066">
          Utilización de los Productos o Dispositivos.
        </span>
        <br className="terms-text067"></br>
        <span>
          El Usuario por su cuenta y responsabilidad, deberá desarrollar,
          practicar y perfeccionar sus procedimientos de prevención y seguridad
          que considere necesarios, así como realizar la capacitación
          correspondiente de su personal.
        </span>
        <br></br>
        <br></br>
        <span>
          Las pruebas deberán realizarse con los Productos o Dispositivos
          conectados y desconectados de la corriente alterna, según sea el caso
          de las características de los mismos.El servicio de recepción de la
          alerta sísmica se proporciona las 24(veinticuatro) horas del día y los
          365(trescientos sesenta y cinco) días del año.En caso de que tenga
          problemas o encuentre fallas en los Productos o Dispositivos, deberá
          de comunicarse con SkyAlert, según se indica más adelante.
        </span>
        <br></br>
        <br></br>
        <span>
          EL USUARIO AL NO REALIZAR LO ANTERIOR, LIBERA A SKYALERT DE CUALQUIER
          RESPONSABILIDAD DERIVADA DE LOS PRODUCTOS O DISPOSITIVOS, INCLUYENDO
          LA OCURRENCIA DE CUALQUIER FALLA, POR LO QUE RENUNCIA AL EJERCICIO DE
          CUALQUIER ACCIÓN EN CONTRA DE SKYALERT POR ESTOS CONCEPTOS.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text077">Garantía de proyectos SkyAlert</span>
        <br className="terms-text078"></br>
        <span>
          Los proyectos generados por SkyAlert de México, S.A.P.I.de C.V.(en lo
          sucesivo“ SkyAlert”), que incluyen de manera enunciativa más no
          limitativa los dispositivos, equipos, servicios, y / o instalación
          contratados con SkyAlert(en lo sucesivo los“ Proyectos”), se
          encuentran garantizados únicamente por el periodo de 12(doce) meses,
          contados a partir de que se le proporciona al Cliente el acta de
          entrega del Proyecto.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text082">Condiciones:</span>
        <br className="terms-text083"></br>
        <span>
          1. La presente garantía únicamente podrá tener validez siempre y
          cuando el Cliente firme de conformidad el acta de entrega del Proyecto
          correspondiente, misma que será proporcionada en su momento por
          SkyAlert.
        </span>
        <br></br>
        <span>
          a. Durante el proceso de instalación del proyecto SkyAlert no será
          responsable por cualquier daño causado a dicha instalación y / o
          materiales que sea ocasionado directamente por el cliente y / o
          cualquier tercero ajeno a SkyAlert, en cuyo caso el cliente deberá
          responder por dichos daños para que la instalación del proyecto pueda
          continuar.
        </span>
        <br></br>
        <span>
          2. El Cliente deberá tener la factura y la póliza de garantía vigente
          del o los Proyectos, misma que será aplicable para los siguientes
          casos:
        </span>
        <br></br>
        <span>
          a. Contra defectos de fabricación y / o relacionados con la mano de
          obra, así como en las partes, accesorios o componentes de los
          proyectos
        </span>
        <br></br>
        <span>
          b. Los trabajos y materiales utilizados por el personal autorizado de
          SkyAlert durante la instalación de los Proyectos.
        </span>
        <br></br>
        <span>
          Cualesquiera errores o fallas en los Proyectos, deberán ser reportados
          por el Cliente al centro de atención de SkyAlert, al teléfono de la
          Ciudad de México(55) 59057166 y en tal caso el Cliente deberá
          abstenerse de hacer uso del Proyecto hasta en tanto dicho error, falla
          o mal funcionamiento haya sido atendido y corregido por SkyAlert
        </span>
        <br></br>
        <br></br>
        <span className="terms-text097">Nulidad de la garantía</span>
        <br className="terms-text098"></br>
        <span>
          La garantía de los Proyectos quedará sin efecto en los siguientes
          casos:
        </span>
        <br></br>
        <br></br>
        <span>
          a. Si hay algún retraso en el pago del o los Proyectos contratados con
          SkyAlert, en cuyo caso una vez que se haya realizado el pago atrasado
          correspondiente, SkyAlert podrá reanudar los servicios contratados
          respetando la vigencia de garantía que se tenía desde el momento de la
          fecha de entrega del Proyecto.
        </span>
        <br></br>
        <span>
          b. Si algún tercero ajeno a SkyAlert presta algún servicio adicional y
          / o complementario al o los Proyecto(s).
        </span>
        <br></br>
        <span>
          c. Cuando el Proyecto no funcione correctamente debido, incluyendo de
          manera enunciativa, más no limitativa a instalaciones, alteraciones y
          / o reparaciones efectuadas por el Cliente y / o un tercero no
          autorizado por SkyAlert.
        </span>
        <br></br>
        <span>
          d. Cuando las fallas se deban a un uso inadecuado, alteración o
          negligencia en el manejo de los Proyectos por parte del Cliente y / o
          un tercero no autorizado por SkyAlert.
        </span>
        <br></br>
        <span>
          e. Cuando el Proyecto haya sido reportado con falla o error y el
          Cliente haya hecho uso del mismo antes de que se realizara el
          mantenimiento y / o revisión correspondiente por personal autorizado
          de SkyAlert.
        </span>
        <br></br>
        <span>
          f. Fallas de servicios prestados por proveedores o terceros ajenos a
          SkyAlert para la recepción y / o transmisión de la señal que dicho
          proveedor o tercero preste a SkyAlert y / o al cliente en los
          Proyectos.
        </span>
        <br></br>
        <span>
          g. Almacenamiento inadecuado, roturas y / o alteración física de los
          Proyectos.
        </span>
        <br></br>
        <span>
          h. Fallas externas, incluyendo de manera enunciativa más no
          limitativa, descargas eléctricas, humedad, variaciones en los voltajes
          de electricidad y / o temperatura fuera de lo recomendado por
          SkyAlert.
        </span>
        <br></br>
        <span>
          En caso de que los Proyectos sufran algún daño fuera del período de
          garantía, podrán ser revisados, reparados o sustituidos en una o todas
          sus partes por SkyAlert con base en los precios vigentes de los
          mismos, los cuales serán a cargo del Cliente, sujetos a la
          disponibilidad de los modelos de los Proyectos adquiridos.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text121">
          Transmisión y recepción de la Alerta Sísmica
        </span>
        <br className="terms-text122"></br>
        <span>
          a. La transmisión de la alerta sísmica hacia los Proyectos es
          responsabilidad de SkyAlert.
        </span>
        <br></br>
        <span>
          b. La señal o conexión de internet será responsabilidad del proveedor
          o del tercero con quien se haya solicitado la contratación de dichos
          servicios.
        </span>
        <br></br>
        <span>
          c. Para que la alerta pueda ser recibida cuando SkyAlert la transmite,
          el Cliente deberá asegurarse de contar con una conexión a internet
          permanente y estable, ya que en caso de que SkyAlert transmita la
          alerta sísmica y los equipos o dispositivos del Proyecto no la reciban
          por problemas de conexión a internet o de desconexión del equipo
          correspondiente, será responsabilidad únicamente del Cliente.
        </span>
        <br></br>
        <br></br>
        <span className="terms-text130">Privacidad de la Información</span>
        <br className="terms-text131"></br>
        <span>
          Para hacer uso de los Proyectos ofrecidos por SkyAlert, los Clientes
          deberán facilitar determinados datos de carácter personal. Su
          información personal se procesará y almacenará en servidores o medios
          magnéticos que mantienen altos estándares de seguridad y protección
          tanto física como tecnológica.
        </span>
        <br></br>
        <br></br>
        <span>
          Para mayor información sobre la privacidad de los datos personales y
          los casos para los cuales será revelada la información personal, se
          pueden consultar nuestra Política de Privacidad en el siguiente sitio:
        </span>
        <br></br>
        <span>http: //skyalert.mx/aviso-de-privacidad/</span>
        <br></br>
        <br></br>
        <span className="terms-text140">Ley Aplicable y Jurisdicción</span>
        <br className="terms-text141"></br>
        <span>
          Estos términos y condiciones están regidos por las leyes vigentes en
          la Ciudad de México. Para la interpretación, cumplimiento y ejecución
          de los presentes términos y condiciones, las partes se someten
          expresamente a la jurisdicción de los tribunales competentes en la
          Ciudad de México, renunciando a cualquier otro fuero que en razón de
          sus domicilios presentes o futuros les pudiera corresponder.
        </span>
        <br></br>
        <br></br>
        <span>* * * * *</span>
        <br></br>
        <br></br>
        <span>
          Nuestro compromiso en SkyAlert es la prestación de servicios que
          buscan salvar vidas, evitar accidentes y mitigar riesgos.En caso de
          cualquier duda en relación con los presentes términos y condiciones,
          estamos a sus órdenes en la siguiente dirección de correo electrónico:
          contacto@skyalert.com.mx
        </span>
        <br></br>
        <br></br>
        <span>
          SkyAlert de México, S.A.P.I.de C.V., con domicilio en Priv.Canaima
          #12, Torre 2, Piso 2, Oficina 2, Colonia La Loma, Tlalnepantla de Baz,
          Estado de México. C.P. 54060, México.
        </span>
      </span>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Terms
