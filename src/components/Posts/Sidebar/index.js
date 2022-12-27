import React, {Component} from 'react';
import ApiController from '../../../api'
import styled from 'styled-components';
import Menciones from './Menciones'
import { Link } from 'react-router-dom'

const Api = new ApiController();
const Title = styled.h2 `
			text-transform: uppercase;
			  padding:1rem;
`;

const Content = styled.div `
	padding:2rem 2rem 0rem;
`;
const Text = styled.p`
		font-size:1rem;
		font-weight:bold;
		cursor:pointer;
`;


class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			tags: [],
			items: [],
			 value: ''
		
		};
	}
	componentDidMount() {
		this.getPostRecent();
	
	}

	getPostRecent(){
	Api.getAllArticles()
		.then(data => {
			this.setState({ 
				data:data.data.slice(1)
			});
		})
		.catch(error => console.log(error))
  }

  render(){
	return(
	  <Content>
	
			<Title>Menciones</Title>
			{
				this.state.data.map((mencionesRecientes, index) => {
					return(
						<Menciones key={index} handle={this.handleClick} menciones={mencionesRecientes}  />
					)
				})
			}
			<Link to={`/prensa`} >
				<Text>Ver más</Text>
	 		</Link>
		</Content>
	)
  }
}

 
export default Sidebar
