import React from 'react';
import Recommendations from './components/Recommendations';
import Register from './components/Register';
import Modules from './components/Modules';
import HowItAlert from './components/HowItAlert';
import Support from './components/Support';

const FAQitems = [
	{
		title: 'Recomendaciones generales',
        content: <Recommendations/>,
		state:false,
		id:'inicio'
	},
	{
		title: 'Registro y Suscripción',
        content: <Register/>,
		state:false,
		id:'configuracion'
	},
	{
		title: 'Módulos',
        content: <Modules />,
		state:false,
		id:'funcionamiento'
	},
	{
		title: '¿Cómo alerta SkyAlert 4?',
        content: <HowItAlert />,
		state:false,
		id:'funcionamiento'
	},
	{
		title: 'Soporte',
        content: <Support />,
		state:false,
		id:'funcionamiento'
	},
];

export default FAQitems;
