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
        ¿Para qué debo hacer el registro en la SkyAlert App?<span>⌄</span>
        </Text>
    </Col1>
    <Col1>
        <Text cursiva>
        El registro permitirá reconocer que tu App ha sido activada y que está asociada a una cuenta donde se podrá registrar la vigencia de tu suscripción en caso de que exista, independientemente de las tiendas (AppStore o Google Play). Como usuario registrado podrás acceder a la personalización de cada sección siendo un usuario con suscripción.
        </Text>
    </Col1>
	<Col1>
        <Text question>
       No recuerdo mi contraseña (Usuarios de versión anterior)
        </Text>
    </Col1>
	  <Col1>
        <Text cursiva>
        Antes de esta nueva versión (V3), desde el 29 de octubre de 2017, ningún usuario de SkyAlert contaba con un usuario o contraseña asociado a su aplicación. La cuenta AppStore o Google Play no están relacionadas con esta cuenta y contraseña.
        </Text>
    </Col1>
	<Col1>
        <Text question>
        ¿Cómo recupero mi contraseña? (Usuarios actuales)
        </Text>
    </Col1>
	  <Col1>
        <Text cursiva>
        Si utilizaste un correo que te aparece como “usuario ya registrado”, ve a la sección “Ya tengo cuenta” en la pantalla de registro inicial, y en esa pantalla dale clic a “olvidé mi contraseña”. Deberá llegarte un “correo de recuperación” al mail que registraste.<br/>
 
        Si no te llega mail de recuperación comunícate con nosotros en Twitter a @SkyAlertSoporte o envíanos un mail a app@skyalert.com.mx.
        </Text>
    </Col1>
   
    <Text question>
    ¿Cómo inicio sesión?
    </Text>
	 <Col1>
        <Text cursiva>
        La manera más fácil de crear tu cuenta e iniciar sesión es con tu Facebook, ya que en solo dos pasos estarás dentro de la app registrado; también puedes hacerlo con Google+ o puedes iniciar sesión con cualquier correo electrónico*. <br/>
 
        *Es de vital importancia que verifiques que tu usuario y el servidor de correo estén bien escritos.

        </Text>
    </Col1>
    <Text question>
    Ya tenía suscripción en la anterior versión, ¿debo comprar una nueva suscripción en esta nueva versión?
    </Text>
	 <Col1>
        <Text cursiva>
        Las suscripciones adquiridas con la versión anterior serán respetadas en esta nueva versión.Solo debes crear tu cuenta SkyAlert y en el siguiente paso se te solicitará tu contraseña de iTunes o Google Play para que busque en esas tiendas tus suscripciones y proceder a reconocer su vigencia.
        </Text>
    </Col1>
    <Text question>
    ¿Cómo recupero mi suscripción?
    </Text>
	 <Col1>
        <Text cursiva>
        Al hacer el registro con tu nueva cuenta SkyAlert, el sistema te solicitará la contraseña de tu tienda de iTunes o Google Play para buscar las suscripciones anteriores y su vigencia, por lo que automáticamente podrás recuperarla; si no recuperas automáticamente tu suscripción, ve a: Ajustes > Soporte > Restaurar Compras y comprueba la fecha de vigencia hasta arriba en la sección “Alertas”.
        </Text>
    </Col1>
    <Text question>
    ¿Cómo puedo compartir mi suscripción entre iOS - Android y viceversa?
    </Text>
	 <Col1>
        <Text cursiva>
        Con solo registrarte en tu nueva versión de SkyAlert, y al utilizar la misma cuenta en tus dispositivos, puedes acceder a tener la suscripción que hayas pagado en cualquiera de las dos plataformas.
        </Text>
    </Col1>
    <Text question>
    ¿Puedo compartir mi suscripción en familia? (solo iOS)
    </Text>
	 <Col1>
        <Text cursiva>
        Esta opción aún no está disponible. Cuando esto suceda daremos aviso a todos los usuarios.
        </Text>
    </Col1>
    <Text question>
    ¿Mi cuenta de registro debe ser la misma que uso para mi tienda de apps?
    </Text>
	 <Col1>
        <Text cursiva>
       Se recomienda que registres tu nueva cuenta con Facebook, pero si no quieres o no tienes cuenta de esta red social, con tu cuenta de Google+ podrías hacerlo fácilmente, o si lo prefieres, con cualquiera de tus mails y no tiene nada que ver este registro con el mail que tengas dado de alta en la tienda de App Store o Google Play.
        </Text>
    </Col1>
    <Text question>
    	Si me registré con Facebook, ¿puedo cambiar los datos de mi suscripción y registrarme con Google+ o con un correo, (o viceversa), y me respetará la suscripción?
    </Text>
	 <Col1>
        <Text cursiva>
	       Actualmente puedes vincular cualquiera de las 2 redes sociales a tu cuenta. Tenemos planeado incluir más redes sociales en el futuro.
        </Text>
    </Col1>
    <Text question>
    ¿Cuáles son las ventajas de tener la suscripción vs la versión gratuita?
    </Text>
	 <Col1>
        <Text cursiva>
		Los usuarios gratuitos recibirán todas las alertas sísmicas que se detecten por nuestra red de sensores, así como todas las notificaciones que se generen en nuestro sistema. Los usuarios suscritos podrán filtrar estas alertas para recibir solamente las que le interesan y las que son relevantes en su ubicación. Ejemplo: Usuario de la app en Jalisco no recibiría sismos que se generen en Chiapas, salvo que sea de intensidad “violenta” o “severa”.
        </Text>
    </Col1>
    {/* <Content SO>
        <Col2 className="SO">
            <Text>
                <Title SO>Para iOS</Title>
                La manera más fácil de crear tu cuenta e iniciar sesión es
                con tu Facebook, ya que en solo dos pasos estarás dentro
                de la app registrado; también puedes hacerlo con Google+ o
                puedes iniciar sesión con cualquier correo electrónico.
            </Text>
        </Col2>
        <Col2 className="SO">
            <Text>
                <Title SO>Para Android </Title>
                Con solo regístrarte en tu nueva versión de SkyAlert, y al
                utilizar la misma cuenta en tus dispositivos, puedes acceder
                a tener la suscripción que hayas pagado en cualquiera de las
                dos plataformas
            </Text>
        </Col2>
    </Content> */}
</Col1>
)
