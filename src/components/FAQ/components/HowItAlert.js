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

export default () => (
    <Col1  className="ResponseQuestionFAQ">
        <Col1>
            <Text>
                ¡Ahora todos los usuarios reciben las alertas con Filtro Sísmico y la Intensidad Local esperada!
            </Text>
        </Col1>
        <Col1>
            <Text>
                <b> Antes </b> <br/> 
                Suscritos: Recibían alertas filtradas de acuerdo a la intensidad del sismo EN EL ORIGEN.<br/> 
                Gratuitos: Recibían alertas de TODOS los sismos detectados en México por REDSkyAlert. 
            </Text>
        </Col1>
        <Col1>
            <Text>
                <b> ¡Ahora! </b> <br/> 
                TODOS los usuarios, sin importar sin son suscritos o no,  recibirán solo alertas de sismos con la <b>INTENSIDAD ESPERADA EN LA LOCALIDAD DONDE TE ENCUENTRES</b>, es decir, serás notificado de acuerdo a cómo probablemente sentirás el sismo. 
            </Text>
        </Col1>
        <Col1>
            <Text>
                <b> PREALERTA </b> <br/>
                En los sismos que inicien a más de 300km de tu localidad con intensidad FUERTE, recibirás una «prealerta» mientras se calcula la intensidad con la que posiblemente lo vas a sentir. Siempre se te enviará una segunda notificación confirmando o descartando la alerta sísmica. 
            </Text>
        </Col1>
        <Col1>
            <Text cursiva>
                <b>NOTA:</b> Intensidad es qué tan fuerte se mueve la superficie. Involucra factores como tipo de suelo, distancia al epicentro, profundidad y magnitud.
            </Text>
        </Col1>
        <Col1>
            <Text>
                <b> Intensidades Alertadas con sonido de “Alerta Sísmica” </b> <br/>
                - Ahora “MODERADO” sonará como “Alerta Sísmica”, ya que ahora es intensidad local y pueden causar daños ligeros en estructuras y caer objetos. <br/>
                - FUERTE <br/>
                - VIOLENTO <br/>
                - SEVERO
            </Text>
        </Col1>
        <Col1>
            <Text>
                <b> Intensidades con sonido de “Sismo Detectado” </b> <br/>
                - DÉBIL <br/>
                - LEVE
            </Text>
        </Col1>
</Col1>
)
