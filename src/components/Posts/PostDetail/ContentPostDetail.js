import React, {Component} from 'react';
import ApiController from '../../../api'
import styled from 'styled-components';
import Sidebar from '../Sidebar'
import CommentsFB from '../../Facebook/CommetsFB'
import ContentShare from './ContentShare'
import { Helmet } from 'react-helmet';
import {device}  from '../../../utils/media'
import ScrollAnimation from 'react-animate-on-scroll';

import Post from './index'

const Api = new ApiController();

const Container = styled.div `
    background: ${props => props.detail ? 'url(img/about/fondoSome.jpg)' : 'none'};
    background-size: cover;
`;
const Content = styled.div`
	display: flex;
	flex-flow: row wrap;
    width: 100%;
    padding:3rem;
    @media ${device.laptop} {
        width: 1085px
         padding:0rem;
    }   
    
    margin:0 auto;
`;
const Thumbnail = styled.img `
        width:100%;
`;
const Title = styled.h2 `
        text-transform: uppercase;
`;
const Text = styled.div `
        font-size:1.5rem;
`;
const ContentPost = styled.div `
        width:100%;
        @media ${device.laptop} {
           width:70%; 
	    }   
`;
const CointentSideBar = styled.div `
        width:30%;
`;

class PostDetail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        detailImg: "",
            detailContent:"",
            detailTags:""

	    };
	}
    componentDidMount(){
         window.scrollTo(0, 0);
    //    this.getPost();
    //    console.log(this.props.match)
     
       
    }
    
    getPost(slug){
         Api.getAllArticles()
		.then(data => {
            const result = data.data.filter(postDetail => postDetail.slug == slug);
            // console.log(result[0].tags)
            this.transformDate(result[0].date.substring(0, 10))
            this.setState({ 
                detailImg: result[0].better_featured_image.source_url,
                detailTitle: result[0].title.rendered,
                detailContent: result[0].content.rendered,
                detailMedio: result[0].acf.nombre_del_medio,
                detailSlug: result[0].slug,
                detailTags: result[0].tags
            });

            console.log(this.state.detailTags)
            this.getAuthor(result[0].author)
		})
		.catch(error => console.log(error))
    }

    transformDate(date){
        const meses = [
                "Enero", "Febrero", "Marzo",
                "Abril", "Mayo", "Junio", "Julio",
                "Agosto", "Septiembre", "Octubre",
                "Noviembre", "Diciembre"
            ];

            const dateTransform = new Date(date)
            const dia = dateTransform.getDate()
            const mes = dateTransform.getMonth()
            const ano = dateTransform.getFullYear()
            
            this.setState({
                  detailDate: `${dia+1} de ${meses[mes]}`
            })

    }

    getAuthor(id){
         Api.getUser(id)
		.then(data => {
            this.setState({ 
                detailAuthor: data.data.name,
            });
		})
		.catch(error => console.log(error))
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.match.params.name)
        this.getPost(nextProps.match.params.name);
    }

    
  render(){
  
        const tags = () => {
        if (this.state.detailTitle) {
            window.prerenderReady = true;
            return (
            <Helmet>
                <title>{ this.state.detailTitle }</title>
                <meta name="description" content={this.state.detailContent} />
                <meta property="og:url" content={`./prensa/${this.state.detailSlug}`} />
                <meta property="og:title" content={this.state.detailTitle} />
                <meta property="og:image" content={this.state.detailImg} />
                <meta property="og:image" content={this.state.detailImg} />
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
            );
        }
        return null;
        };


		return(
        
        <Container detail>
            {tags()}
			<Content>
				<ContentPost className="postDetail">
                   
                </ContentPost>

				<CointentSideBar className="sideBar">
                    <ScrollAnimation animateIn='fadeIn'>
                        <Sidebar tags={this.state.detailTags} />
                    </ ScrollAnimation>
                </CointentSideBar>
			</Content>
        </Container>
		)
  }
}

 
export default PostDetail
