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
    padding-left: ${props => props.leftSpace ? '2rem' : '6px'};
`;

const TextSub = styled(Text)`
    font-size: 18px;
    font-weight: 500;
    padding-left: 10px;
    text-decoration-line: underline;
`;

const Bullet = styled.span`
	color: #000;
    font-size: 0.8rem !important;
`;

export default () => (
    <Col1  className="ResponseQuestionFAQ">
        <Col1>
            <TextSub> Alertas </TextSub>
        </Col1>
        <Col1>
            <Text>
                <Bullet> &#x25cf; </Bullet> <b>Suscripción.</b> Aquí podrás visualizar el tipo de usuario que eres: No Suscrito o GOLD.
            </Text>
            <Text leftSpace>
                - En caso de ser usuario GOLD podrás ver la vigencia y el plan de suscripción que elegiste (anual, semestral o mensual). 
            </Text>
        </Col1>
        <Col1>
            <Text>
                <Bullet> &#x25cf; </Bullet> <b>Ubicaciones.</b> Visualiza en el mapa las ubicaciones que seleccionaste para recibir las alertas sísmicas, de acuerdo a tu suscripción.
            </Text>
            <Text leftSpace>
                - Si eres usuario No Suscrito: aquí podrás editar el Código Postal de la ubicación que seleccionaste. 
            </Text>
            <Text leftSpace>
                - Si deseas recibir las alertas de acuerdo a tu GPS y hasta tres localidades más ¡Suscríbete a SkyAlert GOLD!
            </Text>
            <Text leftSpace>
                - Para usuarios GOLD: en esta sección podrás activar o desactivar el GPS, agregar y editar tus tres ubicaciones adicionales. 
            </Text>
        </Col1>
        <Col1>
            <Text>
                <Bullet> &#x25cf; </Bullet> <b>Alertas en modo no molestar.</b> Todos los usuarios (No Suscritos y GOLD) podrán activar está función para recibir las alertas de sismos importantes que puedan sentirse en su localidad, aun cuando su teléfono se encuentre en “Modo no molestar”.
            </Text>
        </Col1>
        <Col1>
            <Text>
                <Bullet> &#x25cf; </Bullet> <b>Tiempo estimado de arribo un sismo.</b> Si eres usuario GOLD, aquí podrás activar o desactivar la opción para recibir las alertas con el tiempo estimado de un sismo. 
            </Text>
            <Text leftSpace>
                - Si deseas recibir las alertas con el Tiempo Estimado de Llegada ¡Suscríbete a SkyAlert GOLD!.
            </Text>
        </Col1>
        <Col1>
            <Text>
                <Bullet> &#x25cf; </Bullet> Al final podrás visualizar la información sobre ¿cómo va a sonar tu SkyAlert? y ¿cómo funciona la alerta sísmica? 
            </Text>
        </Col1>
        <Col1>
            <TextSub> Feed </TextSub>
        </Col1>
        <Col1>
            <Text>
                Aquí podrás ver los sismos más recientes en México (a partir de magnitud 4.5) y sismos internacionales (a partir de magnitud 6.0), notificaciones de sismos alertados, noticias, volcanes en vivo y recomendaciones.
            </Text>
        </Col1>
        <Col1>
            <TextSub> Notificaciones </TextSub>
        </Col1>
        <Col1>
            <Text>
                En esta sección se guardan las notificaciones que has recibido. En el caso de sismos de México registrados por el SSN, recibirás notificación a partir de sismos de magnitud 4.5 y en el caso de sismos internacionales, a partir de magnitud 6.0. También, recibirás aquí otro tipo de alertas de texto como las volcánicas, de tsunami, por ciclones tropicales y más. Si desactivas algunas notificaciones desde tus “Ajustes”, desaparecerán esas notificaciones en esta sección y no recibirás las próximas alertas del tema elegido.
            </Text>
        </Col1>
        <Col1>
            <TextSub> Productos </TextSub>
        </Col1>
        <Col1>
            <Text>
                Aquí encontrarás los diferentes servicios, planes, ofertas exclusivas, etc. que tenemos para ti.
            </Text>
        </Col1>
        <Col1>
            <TextSub> Ajustes </TextSub>
        </Col1>
        <Col1>
            <Text>
                Modifica aquí la hora en la en que te gustaría recibir el pronóstico diario del clima (solo usuarios GOLD), activar o desactivar las otras notificaciones que no sean de alertamiento sísmico (GOLD), programar tus simulacros y ver información sobre SkyAlert.
            </Text>
        </Col1>
        <Col1>
            <TextSub> Tiempo </TextSub>
        </Col1>
        <Col1>
            <Text>
                En este módulo podrás conocer la probabilidad de lluvia en tu ubicación; al ver las condiciones meteorológicas, pronósticos del día y pronósticos extendidos, también, podrás ver los ciclones tropicales que están activos en el mundo.
            </Text>
        </Col1>
    </Col1>
)
