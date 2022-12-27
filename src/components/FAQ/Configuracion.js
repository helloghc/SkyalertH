import React from 'react';
import styled from 'styled-components';

const Col1 = styled.div `
	width:100%;
	text-align: ${props => props.center ? 'center' : 'left'};
`;

const Text = styled.p`
	font-size: 2rem;
	line-height: 2rem;
	display: block;
	margin: auto;
	padding: 2rem 0rem;
	padding-top: ${props => props.question ? '0rem !important' : '0.5rem'};
	font-style: ${props => props.cursiva ? 'italic' : 'normal'};
	font-weight: ${props => props.question ? 'bold' : 'normal'};
	text-align: ${props => props.primary ? 'center' : 'left'};
	font-size: ${props => props.primary ? '2.5rem' : '1.3rem'};
	color: ${props => props.primary ? '#ea6911' : 'black'};
	padding-top: ${props => props.primary ? '10rem' : '0'};
`;

export default () => (
    <Col1  className="ResponseQuestionFAQ">
    <Col1>
        <Text question>
        ¿Cómo configuro mi Alerta Sísmica si ya no hay filtros por zona?
        </Text>
    </Col1>
    <Col1>
        <Text cursiva>
        Con la nueva versión no debes configurar por zonas. Ahora serás notificado, según la ubicación de tu GPS (geolocalización), de aquellos sismos que podrías sentir en la población donde te encuentres. Esta función es exclusiva de usuarios suscritos. Los usuarios registrados gratuitos recibirán todas las notificaciones de sismos que detecte la Red SkyAlert y también lo harán los suscritos que desactiven su “Filtro Sísmico Inteligente” en la sección “Alertas”.

        </Text>
    </Col1>
	<Col1>
        <Text question>
        ¿Va a sonar la alerta si tengo el celular en vibrador o en “no molestar”?
        </Text>
    </Col1>
	  <Col1>
        <Text cursiva>
        Para iOS - las notificaciones SÍ VAN A LLEGAR si estás dentro de los supuestos explicados anteriormente. Sobre si van a SONAR o no, si estás en modo “no molestar” o en silencio, las notificaciones NO SONARÍAN, ya que es una “orden” que se le da al teléfono en general y no se puede contraindicar por lo que te llegarán las notificaciones en pantalla y vibrará, pero no emitirá sonido. Este tema lo hemos estado revisando con Apple para que se permita al usuario la opción de que suene aún en estos casos.<br/>

        Para Android - las notificaciones SÍ VAN A LLEGAR si estás dentro de los supuestos explicados anteriormente. Sobre si van a SONAR o no, si estás en modo “no molestar” o en silencio, las notificaciones NO SONARÍAN, ya que es una “orden” que se le da al teléfono en general por lo que vibrará pero no emitirá sonido. Hay una opción llamada “Priority Mode” para configurar alertas prioritarias para que sí suenen, aunque estén en los supuestos anteriores. Sigue el siguiente instructivo: (desde versiones 6.0 en adelante): Ve hacia a la pantalla de “Sonidos y Notificaciones” > presiona en “Notificaciones de App” > dirígete hacia el “Filtro de Notificaciones” > Selecciona la configuración de SkyAlert como “Prioritaria”.
        </Text>
    </Col1>
	<Col1>
        <Text question>
        ¿Va a sonar la alerta si mi celular no tiene internet?
        </Text>
    </Col1>
	  <Col1>
        <Text cursiva>
        Si no tienes internet no se activarán las notificaciones en tu teléfono, se necesita estar en cualquier wifi o datos móviles para recibir las alertas inmediatamente luego de haberlas emitido por SkyAlert.
        </Text>
    </Col1>
   
    <Text question>
        ¿Es necesario activar la localización?

    </Text>
	 <Col1>
        <Text cursiva>
       Por ahora sí, ya que la ubicación diaria es la que ajusta tus filtros de manera automática, en otras versiones se podrá desactivar esto y poner de manera manual la ubicación que quieras configurar. Por el momento, si no tienes activada la ubicación en tu teléfono, o no le das permisos a la aplicación para leerla, se utilizará la última ubicación proporcionada. De no haberla se utilizará la Ciudad de México por defecto.
        </Text>
    </Col1>
    <Text question>
    ¿Por qué detecta que estoy en otra ubicación o la app me notifica que no puede localizar mi ubicación?
    </Text>
	 <Col1>
        <Text cursiva>
       Si cambias de ubicación con frecuencia, se recomienda que actualices manualmente tu ubicación. Para esto, debes ir al módulo “Storm” (estado del tiempo) y deslizar hacia abajo.<br/><br/>

        Si no puede detectar tu ubicación realiza los siguientes pasos:<br/><br/>
            -Desactiva el GPS.<br/>
            -Sal por completo de la App SkyAlert.<br/>
            -Reinicia tu celular.<br/>
            -Activa el GPS e ingresa nuevamente a la App SkyAlert.<br/>
            -Dirígete al módulo de TIEMPO y desliza la pantalla hacia abajo para que la ubicación se actualice.<br/>
            *Es posible que si te encuentras en un lugar al interior (entre muchos muros), la señal del GPS sea muy débil y no pueda encontrar tu ubicación, sin embargo, tu app “recordará” cuál fue tu última ubicación.
        </Text>
    </Col1>
    <Text question>
    ¿Puedo personalizar mi Feed para que no me aparezcan anuncios o sismos del mundo?
    </Text>
	 <Col1>
        <Text cursiva>
        En la pantalla principal (Feed) vea la esquina superior derecha para filtrar el contenido y quitar anuncios (usuarios suscritos).
        </Text>
    </Col1>
    <Text question>
    ¿Cómo van a sonar los audios de las alertas?
    </Text>
	 <Col1>
        <Text cursiva>
        Hay dos tipos de audio: “Sismo detectado” y “Alerta Sísmica”. En ambos casos, la voz ahora también te indica la intensidad que se está registrando en cada población donde contamos con sensores y vuelve a mandar otra notificación si es que la intensidad incrementa. <br/>
 
        El tipo de audio a enviar depende de la intensidad, si es de DÉBIL A MODERADO, se envía “Sismo Detectado” que son sismos que se van a percibir pero que podrían no ser peligrosos, y cuando se trate de “Alerta Sísmica” es debido a que se registraron intensidades de FUERTES A SEVERAS.

        </Text>
    </Col1>
    <Text question>
    ¿Qué es Filtro Sísmico Inteligente y cómo funciona?
    </Text>
	 <Col1>
        <Text cursiva>
        Es una nueva manera de filtrar las alertas sísmicas. Si eres usuario suscrito, el sistema filtrará los sismos que se detecten basados en la distancia del epicentro con respecto a tu ubicación vs. intensidad. A menor distancia del epicentro, más fuerte se van a sentir los sismos, por lo tanto, se te mandarían alertas aunque sean débiles, pero si te encuentras lejos y es un sismo leve, no se te mandará notificación alguna. De lo contrario, si es un sismo violento o severo, aunque estés lejos, se va a mandar una alerta para que estés preparado. <br/>

        Te recordamos que SkyAlert alerta por intensidad (fuerza con la que se mueve el suelo) y no por magnitud, ya que este cálculo solo se sabe varios minutos después del sismo.
        </Text>
    </Col1>
    <Text question>
    ¿Cómo actualizo la información en la app?
    </Text>
	 <Col1>
        <Text cursiva>
       Desliza la pantalla hacia abajo para refrescar información en cualquiera de las 4 secciones actuales.
        </Text>
    </Col1>
    <Text question>
    	¿Puedo cambiar manualmente la ubicación de mi equipo?
    </Text>
	 <Col1>
        <Text cursiva>
	      Por lo pronto no se puede, pero se trabaja en una versión nueva para que esto sea posible en algunos meses más. Si viajas de una ciudad a otra con frecuencia, te recomendamos actualices tu ubicación deslizando hacia abajo en el módulo Storm.
        </Text>
    </Col1>
    <Text question>
    ¿Cuál es la versión del sistema operativo que debo tener para que funcione óptimamente?
    </Text>
	 <Col1>
        <Text cursiva>
		Para iOS - desde la versión 9.0 en iOS deberían de funcionar correctamente todos los módulos. Si tienes una anterior, es posible que se tengan algunas fallas sin que podamos hacer algo al respecto debido a que no toda la nueva tecnología es compatible con la anterior y no se pueden desarrollar tecnología actual para dispositivos o modelos obsoletos. <br/>
 
        Para Android - desde la versión 6.0 en Android deberían de funcionar correctamente todos los módulos. Si tienes una anterior, es posible que se tengan algunas fallas sin que podamos hacer algo al respecto debido a que no toda la nueva tecnología en aplicaciones es compatible con la anterior y no se puede desarrollar tecnología actual para dispositivos o modelos obsoletos.

        </Text>
    </Col1>
    <Text question>
    ¿En qué sección puedo avisar a mis amigos que estoy bien después de un sismo?
    </Text>
	 <Col1>
        <Text cursiva>
		La sección de contactos de emergencia se está renovando, en unas semanas más podrás ver un nuevo módulo de SOS que tendrá este servicio y otros más que seguirán ayudando en la cultura de la prevención y para la comunicación en caso de desastre.
        </Text>
    </Col1>
</Col1>
)
