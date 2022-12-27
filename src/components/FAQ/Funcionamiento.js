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
            ¿Qué funciones tiene cada módulo?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
            <b>Alertas:</b> aquí puedes activar el Filtro Sísmico Inteligente si quieres ser alertado solo de sismos que podrías sentir, o desactivarlo si quieres ser alertado por todos los sismos detectados por Red SkyAlert.<br/>
            Tendrás un mapa personalizado de alertas sísmicas donde se te indicará el nivel de cobertura donde te encuentras y a partir de qué intensidades serás alertado de acuerdo a la distancia.
            También podrás ver la vigencia de tu suscripción, así como la de los seguros de hogar en caso que lo tengas contratad.<br/><br/>
            <b>Feed:</b> aquí podrás ver los sismos más recientes en México (a partir de magnitud 4.1) y sismos internacionales (a partir de magnitud 5.0), notificaciones de sismos alertados, noticias, volcanes en vivo y recomendaciones.<br/>
            <b>Tiempo:</b> en este módulo podrás conocer la probabilidad de lluvia en tu ubicación, al ver las condiciones meteorológicas, pronósticos del día y pronósticos extendidos, también podrás ver los ciclones tropicales que están activos en el mundo.<br/>
            <b>Notificaciones:</b> en esta sección se guardan las notificaciones que has recibido. En el caso de sismos de México registrados por el SSN, recibirás notificación a partir de sismos de magnitud 5.0 y en el caso de sismos internacionales, a partir de magnitud 6.0. También recibirás aquí otro tipo de alertas de texto como las volcánicas, de tsunami, por ciclones tropicales y más. Si desactivas algunas notificaciones desde tus “Ajustes”, desaparecerán esas notificaciones en esta sección y no recibirás las próximas alertas del tema elegido.<br/>
            <b>Ajustes:</b> aquí podrás configurar tu usuario registrado, modificar la hora en la que te gustaría recibir el pronóstico diario del clima (solo usuarios suscritos), activar o desactivar las otras notificaciones que no sean de alertamiento sísmico, programar tus simulacros, ver información sobre SkyAlert, así como soporte en caso de algún problema que tengas con tu app.
            </Text>
        </Col1>
        <Col1>
            <Text question>
            ¿Cuál es la zona de cobertura para DETECTAR sismos? (Sólo México)
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
            Da click aquí para conocer la zona actual de cobertura. <br/><br/>

            ¡Gracias a tus suscripciones Red SkyAlert creció al doble en el 2018 y vamos por más!
            </Text>
        </Col1>
        <Col1>
            <Text question>
           ¿Es verdad que si tengo la suscripción, las alertas me llegan antes que en la versión gratuita?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
            Nosotros NO limitamos artificialmente la velocidad de entrega de las notificaciones en todos los dispositivos. Sin embargo, el servicio a nuestros clientes suscritos está soportado en un servidor de mayor capacidad, por lo que podemos ofrecer un mejor servicio. Al final también la velocidad del internet que tengas será determinante en el tiempo de alertamientos.
            </Text>
        </Col1>
    </Col1>
)
