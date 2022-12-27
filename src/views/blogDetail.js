import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ApiController from '../api/SkyAlertAPI';
import { Helmet } from 'react-helmet'
import Navbarblack from '../components/navbarblack';
import Footer from '../components/footer'
import Copyright from '../components/copyright';
import ArticleContent from "../components/ArticleContent";
import strings from '../config/strings';
import SkeletonArticle from '../components/Placeholder/Article';
import './blog.css';

const Api = new ApiController();

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;
const HOST = SYSTEM === 'US' ? 'https://news.skyalertusa.com/' : 'https://news.skyalert.mx/';

const Container = styled.div`
    background: ${props => props.detail ? 'url(../img/about/fondoSome.jpg)' : 'none'};
    background-size: cover;
    background-position: center;
    img{
        max-width:100%;
    }
`;

const slideUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(15px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

const ArticleWrapper = styled.div`
  animation: ${slideUp} 800ms ease-out backwards;
`;


const BlogDetail = (props) => {

    const [article, setArticle] = useState({});
    const [articleId, setArticleId] = useState(false);
    const [bgImage, setBgImage] = useState(false);
    const [relatedArticles, setRelatedArticles] = useState(false);
    const [relatedArticlesMap, setRelatedArticlesMap] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingArticleRelated, setIsLoadingArticleRelated] = useState(false);
    const [currentArticleRelated, setCurrentArticleRelated] = useState(0);

    const setId = () => {
        const articleId = (props.match) ? props.match.params.articleId : props.articleId;
        setArticleId(articleId);
        getArticleDetail(articleId);
        return articleId;
    }

    const getArticleDetail = (articleId) => {

        setIsLoading(true);

        Api.getArticle(articleId)
            .then((data) => {

                setIsLoading(false);
                setArticle(data.article);

                if (data.article.mainMedia && data.article.mainMedia.type === 'Image') {
                    setBgImage(ApiController.getPicURL(data.article.mainMedia.document, 'image'));
                }

                Api.getArticleRelated(articleId).then(data => {
                    setRelatedArticles(data.articles.filter(data => data));
                });
            })
            .catch((err) => {
                console.log(err);
                props.history.push('/404');
                // Handle any error that occurred in any of the previous
                // promises in the chain.
            });
    }

    const getRelatedArticlesContent = () => {

        //console.log("Function Called");
        setIsLoadingArticleRelated(true);

        if (relatedArticles) {

            let currentArticle = relatedArticles[currentArticleRelated];
            let articles = relatedArticlesMap;
            articles.push(currentArticle._id);
            setRelatedArticlesMap(articles);
            currentArticleRelated++;

        }

    }

    const onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)
            && !isLoadingArticleRelated
        ) {
            getRelatedArticlesContent();
        }
    }


    useEffect(() => {

        window.scrollTo(0, 0);
        window.addEventListener('scroll', onScroll, false);
        setId(props);

        return () => {
            window.removeEventListener('scroll', onScroll, false);
        };

    }, []);

    const tags = () => {

        const { news } = strings().ROUTE;

        if (article.title) {
            window.prerenderReady = true;
            return (
                <Helmet>
                    <title>{article.title}</title>
                    <meta name="description" content={article.summary} />
                    <meta property="og:url" content={`${HOST}/${news}/${article.slug}`} />
                    <meta property="og:title" content={article.title} />
                    <meta property="og:image" content={bgImage} />
                </Helmet>
            );
        }
        return null;
    };

    return (
        <div className="blog-container">
            {isLoading ? (
                <SkeletonArticle />
            ) :
                <>
                    {tags()}
                    <Navbarblack rootClassName="navbarblack-root-class-name5"></Navbarblack>
                    <div className="blog-container5">
                        <Container detail>
                            <ArticleWrapper>
                                {
                                    articleId &&
                                    <ArticleContent
                                        articleId={articleId}
                                        stripedContent={true}
                                    />
                                }
                                {
                                    relatedArticles &&
                                    <React.Fragment>
                                        {
                                            relatedArticles.map((article, index) => {
                                                return (
                                                    <ArticleContent
                                                        articleId={article._id}
                                                        last={relatedArticles.length - 1 === index ? true : false}
                                                        stripedContent={true}
                                                        key={index}
                                                    />
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                }
                            </ArticleWrapper>
                            {/* <Content>
                                <ContentPost className="postDetail">
                                    <Thumbnail src={article.detailImg} />
                                    <Title>{article.detailTitle}</Title>
                                    <Text>{article.detailDate}</Text>
                                    <Text>
                                        {article.detailContent}
                                    </Text>
                                </ContentPost>
                            </Content> */}

                        </Container>
                    </div>
                </>
            }
            <main className="blog-main">
                <div className="blog-container7"></div>
            </main>
            <Footer rootClassName="footer-root-class-name6"></Footer>
            <Copyright></Copyright>
        </div>
    )
}

export default BlogDetail
