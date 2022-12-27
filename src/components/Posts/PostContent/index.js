import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import ApiController from '../../../api';

const PostAllContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    span{
        font-size: 18px;
        align-self: flex-start;
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;
        width : 100%;
    }
    .span2{
        font-size: 14px;
        margin-top: 20px;
        text-align: center;
        margin-bottom: 10px;
    }
`;

const Media = styled.div`
    width:100%;
    height: 260px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Medio = styled.p`
    font-size:1.5rem;
    font-style: ${props => props.medio ? 'italic' : 'normal'};
`;

const LogoHeader = styled.img`
    width: 80%;
    object-fit: cover;
    margin-top: 60px;
`;

const Logo = styled.img`
    width: 150px;
    margin-top: 15px;
    object-fit: cover;
    margin-bottom: 15px;
`;

const API = new ApiController();

export const PostContent = (props) => {

    const {
        mainMedia,
        title,
        summary,
        source,
    } = props.article;

    const articleExcerpt = summary ? summary.substring(0, 110) : '';
    const mediaId = (mainMedia && mainMedia.document) ? mainMedia.document.id : '';
    // const mediaURL = API.getPicURL(mediaId);

    return (
        <div className='prensa-container04'>
            <Link to={`/prensa/${props.article.slug}`} >
                <ScrollAnimation className="content-iframe" animateIn='fadeIn' duration={1}>
                    <PostAllContent>
                        {/* { mediaId && <Media
                                alt={title}
                                style={{ backgroundImage: `url(${mediaURL})` }}
                            />
                        } */}
                        <LogoHeader
                            alt="image"
                            src="/playground_assets/prensa_12-500h.png"
                        />
                        <Logo
                            alt="image"
                            src="/playground_assets/prensa_04-500h.png"
                        />
                        <span> {title} </span>
                        {source && <Medio medio>{source}</Medio>}
                        <span className="span2">
                            {articleExcerpt}
                        </span>
                        <button className="prensa-button1 button">Ver Entrevista</button>
                    </PostAllContent>
                </ScrollAnimation>
            </Link>
        </div>
    )
}