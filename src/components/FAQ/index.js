import React, {Component} from 'react';
import styled from 'styled-components';
import {device}  from '../../utils/media'
import FAQContent from './FAQContent'
import FAQuestion from './FAQ'
import Footer from '../footer';
import Copyright from '../copyright';
import ScrollAnimation from 'react-animate-on-scroll';
import { Helmet } from 'react-helmet';
const Container = styled.div`
	background: ${props => props.faq ? 'linear-gradient(rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0.80)),url(/img/about/fondoSome.jpg)' : 'none'};
	@media ${device.laptop} {
		background-size:100%;
		background-repeat:no-repeat;

	}
	@media ${device.mobileS} {
		background-size:cover;
		background-position:center;
	}

	
`;
const Content = styled.div`
	@media ${device.mobileS} {
		width: ${props => props.SO ? '100%' : '100%'};
		padding: 0 2rem;
		padding-bottom: 10vh;
	}
	@media ${device.tablet} {
		width: ${props => props.SO ? '100%' : '100%'};
		padding: 0 2rem;
	}
	@media ${device.laptop} {
		width: ${props => props.SO ? '100%' : '1085px'};
		padding: 0 0rem;
	}
	
	margin:0 auto;
	height: auto;
	display: flex;
	justify-content: center;
	// align-items: center;
	flex-flow: row wrap;
`;


const Col2 = styled.div `
	&.SO{
		padding: 0rem 1rem 0rem 0rem;
	}

   @media ${device.laptop} {
		width:50% !important;

		&.SearchImg{
			display: block !important;
			width:15% !important;
			padding-top: 10rem !important;
		}
		&.SearchInput{
			width:60% !important;
		}
	}
   @media ${device.tablet} {
		width:50% !important;

		&.SearchImg{
			display: none;
			width:30% !important;
		}
		&.SearchInput{
			width:70% !important;
		}
	}
   @media ${device.mobileS} {
		width:100%;
		&.SearchImg{
			display: none;
			padding-bottom: 0;
		}
		&.SearchInput{
			width:100%;
		}
	}
`;
const Col1 = styled.div `
	width:100%;
	text-align: ${props => props.center ? 'center' : 'left'};
`;

const Text = styled.p`
	font-size: 2rem;
	display: block;
	margin: auto;
	padding-top: ${props => props.question ? '3rem !important' : '1rem !important'};
	font-style: ${props => props.cursiva ? 'italic' : 'normal'};
	font-weight: ${props => props.primary ? 'bold' : 'normal'};
	text-align: ${props => props.primary ? 'center' : 'left'};
	font-size: ${props => props.primary ? '2 rem' : '1.3rem'};
	color: ${props => props.primary ? '#ea6911' : 'black'};
	padding-top: ${props => props.primary ? '5rem !important' : '0'};
	padding-bottom: ${props => props.primary ? '5rem' : '0'};
	padding: 2rem 0rem;
`;

// const SearchQuestion = styled.input.attrs({
//   // we can define static props
//   type: 'text',
// })`
// 	display: block;
// 	margin: auto;
// 	width: 80%;
// 	height: 5vh;
// 	border-radius: 5px;
// 	border: 1px solid gray;
// 	padding-left:10px;
// 	margin-top:2rem;
// `;


const Title = styled.h2`
	font-size: 2rem;
	line-height: 2rem;
	display: block;
	margin: auto;
	font-weight: bold;
	padding-top: 1rem;

	opacity: ${props => props.SO ? '.5' : '1'};
	padding-top: ${props => props.SO ? '2rem' : '2rem'};
`;

const TitlePrimary = styled(Title)`
	color: #212121;
	width: 100%;
	font-weight: bold;
	font-size: 5rem;
	margin-top: 8vh;
	position: absolute;
	z-index: 2;
	@media ${device.mobileS} {
		padding:5%;
		text-align: left;
	}
		
	@media ${device.laptop} {
		padding: 0;
		right: 30vh;
		text-align: right;
	}
	

  
`;

const Header = styled.div `
	width: auto;
	height:20vh !important;
	background:linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)), url('img/about/fondoImagen.png');
	background-size: cover;
	background-repeat: no-repeat;
	@media ${device.mobileS} {
		background-position: right;
	}
	@media ${device.tablet} {
		background-position: bottom left;
	}
	
	@media ${device.laptop} {
		background-position: center;
	}
`;
const Pleca = styled.img `
	position: ${props => props.header ? 'absolute' : 'relative'};
	z-index:  ${props => props.header ? '1' : ''};;

	@media ${device.mobileS} {
		width: 100%;
		height: 20vh;
	}
	@media ${device.laptop} {
		width: 100%;
		height: 20vh;
	}
`;


const Phone = styled.img`
	width: 90%;
	margin-top: -30px;
	margin-left: -35px;
	padding-bottom: 4em;
`;


class FAQ extends Component {
	componentDidMount(){
	}
  render(){
	  
	const FAQprerender = () => {
		window.prerenderReady = true;
		return (
		<Helmet>
			<title>Alerta sísmica ¿Qué es y cómo funciona SkyAlert en los Sismos?</title>
			<meta name="description" content="En los Sismos que inicien a más de 300km de tu localidad con intensidad FUERTE, recibirás una «prealerta», SkyAlert es tu alerta sísmica temprana." />
			<meta property="og:title" content="Alerta sísmica ¿Qué es y cómo funciona SkyAlert en los Sismos?" />
			<meta property="og:site_name" content="SkyAlert" />
			<meta property="og:url" content="https://skyalert.mx/faq" />
			<meta property="og:description" content="En los Sismos que inicien a más de 300km de tu localidad con intensidad FUERTE, recibirás una «prealerta», SkyAlert es tu alerta sísmica temprana." />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://skyalert.mx/img/logo.png" />
			<meta property="og:locale" content="es" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		</Helmet>
		);
	return null;
	};

	return(
	  <Container faq>
	  	{ FAQprerender()}
		<Pleca header src="/playground_assets/plecaAzul.png" />
		<TitlePrimary >
			FAQ
		</TitlePrimary>
		<Header />
		<Content >
			
			<Col2 className="SearchImg">
				<ScrollAnimation animateIn='fadeInUp' duration={2}>
					<Phone  alt="" src="/img/about/iPhone-bcos.png" />
				</ScrollAnimation>
			</Col2>
			<Col2 className="SearchInput">
				<Text primary>
					¿Tienes alguna duda acerca de tu SkyAlert 4? 
				</Text>

				{/* <Col1 center>
					<SearchQuestion  />
					<Divisor src="img/about/divisor2.png"/>
				</Col1> */}
				<Col1>
				{	
					FAQuestion.map((response, index) => {
					return (
						<FAQContent key={index} faq={response} />
					)
					})
				}
				</Col1>
				{/* <Col1>
					<Text primary>
						SkyAlert te alertará por intensidad en cada localidad donde <br/>tenemos cobertura, no por magnitud.
						<Text><center><b>Importante: recomendaciones generales </b></center> <br/><br/></Text>

					</Text>
					<Text>●	Tener suscripción no equivale a recibir todas las alertas: al pagar suscripción, automáticamente se activa el Filtro Sísmico Inteligente, cuya función es que recibas alertas únicamente de sismos que sentirás en tu localidad, de acuerdo a los radios de intensidad y la geolocalización de tu GPS.</Text>
					<Text>●	Tu SkyAlert App debe estar instalada en memoria interna (Android).</Text>
					<Text>●	Debes tener el GPS encendido y debes otorgarle el permiso a SkyAlert App para usarlo.</Text>
					<Text>●	Después de cada actualización es necesario abrir la app y mantener actualizada la información.</Text>
					<Text>●	Muchos de los bugs se resuelven: borrando caché de sistema y de la SkyAlert App.</Text>
					<Text>●	Última versión de tu sistema operativo (desde 9.0 para iOS y desde 6.0 para Android).</Text>
					<Text>●	Última versión disponible en tienda de SkyAlert App.</Text>
					<Text>●	Definir SkyAlert App como prioridad en configuraciones.</Text>
					<Text>●	No tener habilitada SkyAlert App en un programa/app nativo o externo para ahorro de energía.</Text>
				</Col1> */}
			</Col2>
			
		</Content>
		<Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
	  </Container>
	)
  }
}

export default FAQ;
