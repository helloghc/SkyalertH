import React, {
    Component
} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Content = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    // margin: 5vh auto;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
      padding:1rem;
    .imageMencion{
        width:50%;
        img{
            max-width: 100%;
        }
    }

    .contentMencion{
        width:50%;
        padding:1rem;
    }
   
`;


export default class ContentShare extends Component {
  
  render() {

    const RecentMencion = this.props.menciones;
    return (
    <Link to={`/prensa/${RecentMencion.slug}`}  >
        <Content onClick={this.props.handle}>
                <div className="imageMencion">
                    <img src={RecentMencion.better_featured_image.source_url} alt={RecentMencion.title}/>
                </div>
                <div className="contentMencion">
                    <div dangerouslySetInnerHTML={{ __html: RecentMencion.excerpt.rendered.substring(0, 110)  }} />
                    
                </div>     
        </Content>
    </Link>

    );
  }
}