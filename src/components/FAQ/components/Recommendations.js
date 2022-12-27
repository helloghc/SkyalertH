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
	padding-top: ${props => props.primary ? '10rem' : '0'};
`;

const Bullet = styled.span`
	color: #000;
	font-size: 0.8rem !important;
`;

export default () => (
    <Col1  className="ResponseQuestionFAQ">
        <Text>
            <Bullet> &#x25cf; </Bullet> Tu SkyAlert4 debe estar instalada en la memoria interna de tu celular (para Android).
        </Text>
		<Text>
            <Bullet> &#x25cf; </Bullet> Para la instalación es recomendable tener el sistema operativo Android (6.0 a la versión actual) y iOS (10 a la versión actual).
        </Text>
		<Text>
            <Bullet> &#x25cf; </Bullet> Habilitar todos los permisos que solicite la app.
        </Text>
		<Text>
            <Bullet> &#x25cf; </Bullet> Tener el GPS siempre activado. En caso de que te muevas más de 10 km, SkyAlert verificará la ubicación del GPS para actualizar tu localidad de alertamiento (para usuarios iOS 13, te recomendamos tener activado el modo “Siempre activo”).
        </Text>
		<Text>
            <Bullet> &#x25cf; </Bullet> Para que SkyAlert 4 funcione correctamente en segundo plano, deshabilita el modo “Ahorro de energía” o “Gestión automática” (para Huawei, Xiaomi y Redmi). 
        </Text>
		<Text>
            <Bullet> &#x25cf; </Bullet> Es importante abrir la app al menos una vez por semana para mantener la información actualizada.
        </Text>
		<Text>
			<Bullet> &#x25cf; </Bullet> Muchos de los bugs se resuelven: borrando el caché del sistema y desinstalando la app. 
		</Text>
</Col1>
)
