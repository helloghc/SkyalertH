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
                <Bullet> &#x25cf; </Bullet> ¿Cómo actualizar mi ubicacion GPS?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                Realiza los siguientes pasos:
            </Text>
            <ol style={{marginLeft: 14, marginTop: 0}}>
                <li> Desactiva el GPS.</li>
                <li> Borra el cache de la app (para Android)</li>
                <li> Reinicia tu celular.</li>
                <li> Activa el GPS e ingresa nuevamente SkyAlert 4.</li>
                <li> Dirígete al módulo de TIEMPO y desliza la pantalla hacia abajo para que la ubicación se actualice.</li>
            </ol>
            <Text cursiva>
                <b>Nota:</b> Es importante contar con una buena conexión a internet para que se actualice tu ubicación correctamente.  
            </Text>
        </Col1>
        <Col1>
            <Text question>
                <Bullet> &#x25cf; </Bullet> ¿Cómo actualizar la información de los módulos de la app?
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                Desliza la pantalla hacia abajo para refrescar información en cualquiera de los módulos actuales. 
            </Text>
        </Col1>
        <Col1>
            <Text>
                Si requieres ayuda por parte de nuestro equipo de soporte, envíanos un correo a <b><a href="mailto:app@skyalert.mx">app@skyalert.mx</a></b> y con gusto te atenderemos. 
            </Text>
        </Col1>
</Col1>
)
