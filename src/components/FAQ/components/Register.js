import React from 'react';
import styled from 'styled-components';

const Col1 = styled.div `
	width:100%;
	text-align: ${props => props.center ? 'center' : 'left'};

	p {
		padding-left: 10px;
	}
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
    padding-top: ${props => props.primary ? '10rem' : '5px'};
`;

const Bullet = styled.span`
	color: #000;
    font-size: 0.8rem !important;
`;

export default () => (
    <Col1  className="ResponseQuestionFAQ">
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet>  ¿Es necesario registrarme en SkyAlert 4?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                Al descargar la aplicación contarás automáticamente con el servicio de alertamiento sísmico, es decir, vas a recibir las alertas y otras notificaciones. Es necesario registrarte (crear una cuenta SkyAlert) si deseas enviar un reporte al área de desarrollo, compartir y abrir tu suscripción con otro dispositivo. 
            </Text>
        </Col1>
        <Col1>
            <Text question>
            <Bullet> &#x25cf; </Bullet> ¿Cuál es la diferencia entre registro y suscripción?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                La suscripción se realiza directamente al comprar SkyAlert GOLD en las tiendas (Google Play o AppStore) y no es necesario tener un registro en SkyAlert ya que automáticamente te llegarán las alertas. Las tiendas no comparte la información de tu cuenta con nosotros por lo que si deseas enviar un reporte al área de desarrollo, compartir y abrir tu suscripción con otro dispositivo, es necesario que te registres en SkyAlert4.<br/> <br/>    
                <b>Nota:</b> Es importante que verifiques que estés utilizando la misma cuenta o correo con el que está registrada tu compra.
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> ¿Cómo puedo compartir mi suscripción entre iOS - Android y viceversa?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                Para poder compartir tu suscripción es necesario que crees una cuenta SkyAlert o inicies sesión. Con esta cuenta puedes iniciar sesión en tu SkyAlert 4 desde cualquiera de las dos plataformas (es importante utilizar la misma cuenta a la que está asociada tu compra). 
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> ¿Cómo recupero mi contraseña?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
            En la pantalla de inicio de sesión da clic en “Recuperar Contraseña”. Después ingresa tu correo electrónico y da clic en “Restablecer Contraseña”, automáticamente te llegará un mail con el enlace para restablecerla. <br/><br/>
            <b>Nota:</b> Si tu registro fue por medio de Facebook o Google no es necesario utilizar contraseña para acceder. 
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> ¿Cómo pago la suscripción si no cuento con tarjeta de crédito, débito etc.?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                En este caso puedes utilizar tarjetas de prepago de Google Play o App Store, la cual podrás adquirir en cualquier tienda de conveniencia. 
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> ¿Qué puedo hacer si mi suscripción aparece como “Vencido” o “No Suscrito”?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                Ingresa al módulo de “Ajustes” de la app y dirígete a la sección “Soporte”, da clic en Restaurar Compras” y sigue las instrucciones. <br/>
                En caso de que el proceso no sea exitoso presiona “Tengo problemas con mi suscripción”. <br/><br/>
                <b>Nota:</b> Es importante que verifiques que estés utilizando la misma cuenta o correo con el que está registrada tu compra. 
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> Costo de suscripción SkyAlert GOLD. 
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                - Anual ($249.00 MXN). <br/>
                - Semestral ($199.00 MXN). <br/>
                - Mensual ($59.00 MXN). <br/>
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> Aclaración cobro de suscripción.  
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                SkyAlert no realiza el cobro del servicio, la tienda de aplicaciones (Google Play o AppStore) es la encargada de realizar este proceso, por lo cual, en caso de tener alguna incidencia es necesario que contactes al soporte de la tienda. <br/><br/>
                <b>Nota:</b> Los cobros los realiza PlayStore o AppStore según sea el caso, debes cancelar la suscripción en tu cuenta de la tienda si así lo deseas.  Es importante que consideres los siguiente:  si desinstalas la App, la suscripción no se cancelará  automáticamente, es necesario que realices este proceso en la tienda. 
            </Text>
        </Col1>

        
</Col1>
)
