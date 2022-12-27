import React, {Component} from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
} from 'react-share';

const Content = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 5vh auto;
    background: #ebebeb;
    height: 50px;
    justify-content: center;
    align-items: center;

    .SocialMediaShareButton{
        display:inline;
    }
    .SocialMediaShareButton div{
        display:inline;
    }
    .SocialMediaShareButton i{
       font-size: 15px;
        color: #c2c2c2;
        padding: 4px;
        cursor:pointer;

    }
    .SocialMediaShareButton i:hover{
        color: #ea6911;
    }
`;
const Text = styled.div `
    font-size:1rem;
    padding:1rem;
    width:50%;
`;
const ContainerShare = styled.div `
    font-size:1rem;
    text-align: right;
    width:50%;
    padding: 1rem;
`;


export default class ContentShare extends Component {
    
  render() {
    const shareUrl = window.location.pathname;
    const title = this.props.title;
    const image = this.props.img;
    return (
        <Content>
            <Text>Share This Story, Choose Your Platform </Text>
            <ContainerShare>  
                <FacebookShareButton
                    url={shareUrl}
                    media={`${shareUrl}/${image}`}
                    quote={title}>
                    <i class="fab fa-facebook-f"></i>
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    media={`${shareUrl}/${image}`}
                    title={title}>
                    
                    <i class="fab fa-twitter"></i>
                </TwitterShareButton>
                <GooglePlusShareButton
                    url={shareUrl}
                    className="Demo__some-network__share-button">
                    <i class="fab fa-google-plus-g"></i>
                </GooglePlusShareButton>
                <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                    className="Demo__some-network__share-button">
                     <i class="fab fa-linkedin"></i>
                </LinkedinShareButton>
                  <VKShareButton
                    url={shareUrl}
                    windowWidth={660}
                     media={`${shareUrl}/${image}`}
                    windowHeight={460}
                    className="Demo__some-network__share-button">
                    <i class="fab fa-vk"></i>
                </VKShareButton>
                <PinterestShareButton
                    url={shareUrl}
                    media={`${shareUrl}/${image}`}
                    windowWidth={1000}
                    windowHeight={730}
                    className="Demo__some-network__share-button">
                    <i class="fab fa-pinterest"></i>
                </PinterestShareButton>
            </ContainerShare>
        </Content>

    );
  }
}
