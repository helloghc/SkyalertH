
import React, { Component } from 'react';
// // import moment from 'moment';
// import 'moment/locale/es';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';
import showdown from 'showdown';
import Navbarblack from '../../navbarblack';
import Footer from '../../footer';
import Copyright from '../../copyright';

import ApiController from '../../../api';
import { device }  from '../../../utils/media'

import Sidebar from '../Sidebar';
import Menciones from '../Sidebar/Menciones'
import Loader from '../../../components/Loader/index';

const Api = new ApiController();

const Container = styled.div `
    background: ${props => props.detail ? 'url(../img/about/fondoSome.jpg)' : 'none'};
    background-size: cover;
    background-position: center;
    img{
        max-width:100%;
    }
`;
const Content = styled.div`
	display: flex;
	flex-flow: row wrap;
    width: 100%;
    padding:3rem;
    @media ${device.laptop} {
        width: 1085px;
         padding:0rem;
    }   
    
    margin: 0 auto;
    p:has(> img) {
        text-align:center;
    }
`;
const Thumbnail = styled.img `
        width:100%;
`;
const Title = styled.h2 `
        font-size:3rem;
        text-transform: uppercase;
`;
const Text = styled.div `
        font-size:1.5rem;
        img{
            height: auto;
        }
`;
const ContentPost = styled.div `
        width:100%;
        padding-bottom: 3em;
        @media ${device.laptop} {
           width:70%; 
	    }   
`;
const CointentSideBar = styled.div `
        width:100%;
         @media ${device.laptop} {
           width:30%; 
	    }
`;
const Related = styled.div `
	padding:2rem;
`;
const Search = styled.div `
        padding:2rem 2rem 0rem;
        div{
            width:100%;
            background:none;
            color: rgba(0,0,0,.4);
            font-size: 1rem;
            border-bottom: 1px solid #f1f1f1;
            padding: 10px;
            height:auto;
        }
  
        div:hover{
            color:white !important;
            cursor:pointer
        }
  
		input{
			font-size:1rem;
			cursor:pointer;
			width: 100%;
			height: 3rem;
			border: 1px solid #bbbbbb;
			background: none;
			padding:2rem
		}
`;

class PostDetail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
            related: '',
            items: [],
            value: '',
            isLoading: true
	    };
    }
    
    componentDidMount() {
        // moment.locale('es');
       this.getPost(this.props.match.params.name);
    }

     // get information for post
    async getPost(slug){
        if(!slug) return;

        const response = await Api.getOneArticle(slug);
        console.log(response);

        if(!response || !response.data || !response.data.article) return;

        const {
            mainMedia,
            title,
            date,
            source,
            content,
            tags,
          } = response.data.article;

        const mediaId = (mainMedia) ? mainMedia.document : '';
        const detailImg = Api.getPicURL(mediaId);

        this.setState({ 
            detailImg,
            detailTitle: title,
            detailContent: this.parseContent(content, response.data.article),
            detailMedio: source,
            detailSlug: slug,
            detailTags: tags,
            detailSite: '',
            isLoading: false,
            // detailDate: moment(date).format('DD [de] MMMM'),
        });

        
        // this.getFilterTag(this.state.detailTags)
        // this.getAuthor(result[0].author)
     

    }
    // get post related for tag
    getFilterTag(array) {
        if (array !== undefined && array.length !== 0) {
            const tag = array[0];
            const arrayTags = `tags=${tag}`
            Api.filterbyTags(arrayTags)
                .then(data => {
                    this.setState({
                        tagsIn: data.data,
                        related: true,
                        isLoading: false
                    });
                })
                .catch(error => console.log(error))
        } else {
            this.setState({ related: false });
        }
    }
    // get user name
    getAuthor(id){
         Api.getUser(id)
		.then(data => {
            this.setState({ detailAuthor: data.data.name,});
		})
		.catch(error => console.log(error))
    }

    componentWillReceiveProps(nextProps){
        // this.getPost()
    }

    // Autocomplete search
    handleChangeSelect = (event) => {
        this.setState({  value: event })
        Api.getSearch(event)
            .then(data => {
                this.props.history.push(`/prensa/${data.data[0].slug}`)
            })
            .catch(error => console.log(error))
    }

    handleChangeSearch = (event) => {
        const array = []
            this.setState({ value: event.target.value })
        Api.getSearch(event.target.value)
            .then(data => {
                console.log(data)
                for (var i = 0; i < data.data.length; i++){
                    const obj = { 
                        id: data.data[i].title.rendered, 
                        label: data.data[i].title.rendered 
                    }
                    array.push(obj)
                    if(array.length > 4){
                        this.setState({ items: array.slice(4) })
                    }else{
                            this.setState({ items: array })
                    }
                    
                }  
            })
            .catch(error => console.log(error))
    }

    parseContent(content = '', event) {
        const parse = (string) => {
          const split = string.split('|');
          if (split.length === 3) {
            return { type: split[0], content: split };
          }
          return { type: 'text', content: string };
        };
    
        // Content
        const converter = new showdown.Converter();
        const toHtml = (string) => {
          if (string) {
            return converter.makeHtml(string);
          }
          return '';
        };
    
        const inject = (item, index) => {
          switch (item.type) {
          case 'image': {
            const uri = Api.getPicURL(item.content[1], 'image');
            return (<img width="100%" src={uri} key={index} alt="" />);
          }
          case 'text':
          default:
            return (<p key={index} dangerouslySetInnerHTML={{ __html: toHtml(item.content) }} />);
          }
        };
    
        const reg = /\[([^\]]+)\]\(\$([^:]+):([^)]+)\)/g;
        const replaced = content.replace(reg, '_ZZZ_$2|$3|$1_ZZZ_');
        const parsed = replaced.split('_ZZZ_').map(parse);
        const injected = parsed.map(inject);
    
        return injected;
    }
    
    render() {
        const {
            detailTitle,
            detailContent,
            detailSlug,
            detailImg,
            detailDate,
            isLoading,
            detailMedio,
            related,
            tagsIn,
        } = this.state;

        const tags = () => {
            if (detailTitle) {
                window.prerenderReady = true;
                return (
                    <Helmet>
                        <title>{ detailTitle }</title>
                        <meta name="description" content={detailContent} />
                        <meta property="og:url" content={`./prensa/${detailSlug}`} />
                        <meta property="og:title" content={detailTitle} />
                        <meta property="og:image" content={detailImg} />
                        <meta property="og:image" content={detailImg} />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    </Helmet>
                );
            }
            return null;
        };

        return (
            <div className="prensa-container">
                <Helmet>
                <title>
                    La Empresa de Alertamiento Sísmico de México en Los Medios
                </title>
                <meta
                    name="description"
                    content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
                />
                <meta
                    property="og:title"
                    content="La Empresa de Alertamiento Sísmico de México en Los Medios"
                />
                <meta
                    property="og:description"
                    content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
                />
                </Helmet>
                <Navbarblack rootClassName="navbarblack-root-class-name6"></Navbarblack>
            <Container detail>
                { tags() }
                { isLoading 
                    ? ( < Loader / > ) 
                    : ( <Content>
                        <ContentPost className="postDetail">
                            <Thumbnail src={detailImg} />
                            <Title>{ detailTitle }</Title>
                            <Text>{ detailDate }</Text>
                            <Text>
                                { detailContent }
                            </Text>
                        </ContentPost>
                        <CointentSideBar className="sideBar">
                            <ScrollAnimation animateIn='fadeIn'>
                                <Sidebar tags={tagsIn} />
                                <Related>
                                    {
                                        related 
                                            ? (
                                                <div>
                                                    <h2>ARTÍCULOS RELACIONADOS</h2>
                                                    {
                                                        tagsIn.map((tags, index) => {
                                                            return (< Menciones key={index} handle={this.handleClick} menciones={tags} />)
                                                        })
                                                    }
                                                </div>
                                            )
                                            : <div>No existe Articulos Relacionados</div>
                                    }
                                </Related>
                            </ ScrollAnimation>
                        </CointentSideBar>
                    </Content>)
                }
            </Container>
             <main className="prensa-main">
             <div className="prensa-container14"></div>
           </main>
           <Footer rootClassName="footer-root-class-name7"></Footer>
           <Copyright rootClassName="copyright-root-class-name1"></Copyright>
            </div>
        );
    }
}

 
export default PostDetail
