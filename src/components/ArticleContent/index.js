
/* Libraries */
import React from 'react';
import showdown from 'showdown';
import moment from 'moment';
import { NavLink, withRouter } from 'react-router-dom';
import ApiController from '../../api/SkyAlertAPI';
import SocialMedia from '../../models/SocialMedia';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import strings from "../../config/strings";
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

/* Components */
import Author from './Author';
import Container from './Container';
import ImageBg from './ImageBg';
import HR from './HR';
import Title from './Title';
import Content from './Content';
import Source from './Source';
import ContentContainer from './ContentContainer';
import PublishAt from './PublishAt';
import FacebookContainer from './FacebookContainer';
import InstagramContainer from './InstagramContainer';
import ShareFB from '../ShareFB';
import SocialContainer from './SocialContainer';
import TweetShare from './TweetShare';
import CommentsFB from '../CommentsFB';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX';

const LOCALE_MOMENT = process.env.REACT_APP_LANGUAGE || 'es';
const LOCALE_FB = SYSTEM === 'US' ? 'en_US' : 'es_LA';
const Api = new ApiController();

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            article: [],
            relatedArticles: [],
            content: '',
            bgImage: false,
            bgVideo: false,
            videoYouTube: false,
            publishAt: '',
            display: false,
            source: false,
            sourceText: false,
            shareUrl: '',
            displayArticleContent: false,
            showAds: false,
        };
    }

    componentDidMount() {
        moment.locale(LOCALE_MOMENT);
        const params = new URLSearchParams(window.location.search);
        if (!params.get('subscription')) {
            this.setState({ showAds: true });
        }
        const pageView = window.location.pathname.replace('mobile-post', 'noticias');
        ReactGA.pageview(pageView);
        ReactGA.set({ pageView });
        //console.log(this.props);
        //console.log(this.props.articleId);
        this.getArticleDetail(this.props.articleId);
        //console.log(window.location.origin);
        //console.log(window.location.href);
        //this.setState({ shareUrl: window.location.href.replace('mobile-post', 'noticias') }, () => console.log(this.state.shareUrl));
    }


    getArticleDetail(articleId) {
        const { news } = strings().ROUTE;
        this.setState({ isLoadingMoreABC: true });
        Api.getArticle(articleId).then((data) => {

            const article = data.article;
            const pageView = `/${news}/${article.slug}`;
            // console.log("Facebook Comments");
            const shareUrl = `${window.location.origin}/${news}/${article.slug}`;
            this.setState({ shareUrl: shareUrl });
            if (article.display !== "8") {
                this.setState({ displayArticleContent: true })
            }
            if (data.article.source === undefined || data.article.source === "") {
                this.setState({ sourceText: false })
            } else {
                this.setState({ sourceText: true })
                this.setState({ source: data.article.source })
            }

            this.parseContent(data.article.content, data.article);
            article.media.map((mainMedia) => {
                const mediaArray = mainMedia;
                // console.log(mediaArray);
                if (mainMedia.type === 'SocialMedia') {
                    const document = mediaArray.document;
                    //console.log("El objeto es:");
                    //console.log(document);
                    const media = new SocialMedia(document);
                    const iframe = media.getYouTubeEmbed('100%', '470px');
                    this.setState({ videoYouTube: iframe });
                    //console.log('Media, iframe y state:')
                    //console.log(media);
                    //console.log(iframe);
                    //console.log(this.state.videoYouTube);
                }
            });
            this.setState({
                article: data.article,
            });

            if (this.state.article.headMedia) {
                //Filter Media
                //console.log("Si existe headMedia");
                const dataHeadMedia = data.article.media.filter(object => object.document._id == data.article.headMedia);
                //console.log(dataHeadMedia[0].document);
                //Image Validation
                if (dataHeadMedia[0].type === 'Image') {
                    //console.log(dataHeadMedia[0].document)
                    //console.log("Es headMedia image");
                    const uri = ApiController.getPicURL(dataHeadMedia[0].document._id, 'image');
                    this.setState({ bgImage: uri });
                }
                //Video Validation
                else if (dataHeadMedia[0].type === 'SocialMedia') {
                    //console.log("Es headMedia video");
                    const media = new SocialMedia(dataHeadMedia[0].document);
                    const iframe = media.getYouTubeEmbed('100%', '470px');
                    //console.log(iframe);
                    this.setState({ bgVideo: iframe });
                }
                else {
                    //console.log("No es ninguna");
                }
            }
            else if (this.state.article.mainMedia) {
                //Filter Media
                const dataMainMedia = data.article.media.filter(object => object.document._id == data.article.mainMedia.document);
                //console.log(dataMainMedia[0].document);
                //Image Validation
                if (!dataMainMedia.length) {
                    //not found image main
                    this.setState({ bgImage: '/images/background-article.jpg' });
                } else {
                    if (dataMainMedia[0].type === 'Image') {
                        //console.log("Es mainMedia image");
                        const uri = ApiController.getPicURL(this.state.article.mainMedia.document, 'image');
                        //console.log(uri)
                        this.setState({ bgImage: uri });
                    }
                    //Video Validation
                    else if (dataMainMedia[0].type === 'SocialMedia') {
                        //console.log("Es mainMedia video");
                        const media = new SocialMedia(dataMainMedia[0].document);
                        const iframe = media.getYouTubeEmbed('100%', '470px');
                        this.setState({ bgVideo: iframe });
                    }
                    else {
                        //console.log("No es ninguna");
                    }
                }
            }
            if (this.state.article.author && this.state.article.author.type === 'author') {
                this.setState({ author: this.state.article.author });
            }

            if (this.state.article.display) {
                this.setState({ display: this.state.article.display });
            }

            this.setState({ publishAt: this.formatDate(this.state.article.publishAt) });
            this.getArticlesRelated(this.state.article._id);
        }).catch((err) => {
            console.log(err);
            this.props.history.push('/404');
            // Handle any error that occurred in any of the previous
            // promises in the chain.
        });;
    }
    getArticlesRelated(articleId) {

        Api.getArticleRelated(articleId).then(data => {
            this.setState({ isLoadingMoreABC: false })
            this.setState(
                Object.assign({}, this.state, {
                    relatedArticles: data.articles
                })
            )
        })
    }

    formatDate(date) {
        return SYSTEM === 'US' ? moment(date).format('DD MMMM YYYY') : moment(date).format('DD [de] MMMM [de] YYYY');
    }

    analyticsEvents = (action, label) => {
        ReactGA.event({
            category: 'News',
            action,
            label,
        })
    }

    /* eslint react/no-danger: 0 */
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
                    const uri = ApiController.getPicURL(item.content[1], 'image');
                    return (<img width="100%" src={uri} key={index} alt="" />);
                }
                case 'socialmedia':
                    if (event && event.media) {
                        const mediaRaw = event.media.find(obj => obj.document._id === item.content[1]);
                        const media = new SocialMedia(mediaRaw.document || mediaRaw);
                        const { network } = media;
                        switch (network) {
                            case 'youtube': {
                                try {
                                    const iframe = media.getYouTubeEmbed('100%');
                                    return (<div className="youtubeVideo" key={index} dangerouslySetInnerHTML={{ __html: iframe }} onClick={() => this.analyticsEvents('Click element youtube on news', 'Play element video in youtube')} />);
                                } catch (e) {
                                    return (<div key={index} />);
                                }
                            }
                            case 'soundcloud': {
                                try {
                                    const iframe = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${media.url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
                                    return (<div key={index} dangerouslySetInnerHTML={{ __html: iframe }} onClick={() => this.analyticsEvents('Click element soundcloud on news', 'Play element sound in soundcloud')} />);
                                } catch (e) {
                                    return (<div key={index} />);
                                }
                            }
                            case 'twitter': {
                                try {
                                    const id = media.getTwitterId();
                                    return (<div key={index} onClick={() => this.analyticsEvents('Click element tweet on news ', 'Click element embed on twitter')}><TwitterTweetEmbed tweetId={id} /></div>);
                                } catch (e) {
                                    return (<div key={index} />);
                                }
                            }
                            case 'instagram': {
                                try {
                                    const { url } = media;
                                    return (
                                        <InstagramContainer key={index} onClick={() => this.analyticsEvents('Click element instagram on news ', 'Click element embed in instagram')}>
                                            <InstagramEmbed
                                                url={url}
                                                maxWidth={500}
                                            />
                                        </InstagramContainer>
                                    );
                                } catch (e) {
                                    return (<div key={index} />);
                                }
                            }
                            case 'facebook': {
                                try {
                                    const { url } = media;
                                    return (
                                        <div
                                            style={{ marginBottom: 20 }}
                                            key={index} onClick={() => this.analyticsEvents('Click element facebook on news ', 'Click element embed in facebook')}>
                                            <FacebookContainer>
                                                <FacebookProvider appId="881811818644187" language={LOCALE_FB}>
                                                    <EmbeddedPost href={url} width="auto" />
                                                </FacebookProvider>
                                            </FacebookContainer>
                                        </div>
                                    );
                                } catch (e) {
                                    return (<div key={index} />);
                                }
                            }
                            default:
                                return (<div key={index} />);
                        }
                    }
                    return (<div key={index} />);
                case 'text':
                default:
                    return (<p key={index} dangerouslySetInnerHTML={{ __html: toHtml(item.content) }} />);
            }
        };

        const reg = /\[([^\]]+)\]\(\$([^:]+):([^)]+)\)/g;
        const replaced = content.replace(reg, '_ZZZ_$2|$3|$1_ZZZ_');
        const parsed = replaced.split('_ZZZ_').map(parse);
        const injected = parsed.map(inject);

        this.setState({ content: injected });
    }

    renderTitle() {
        if (!this.state.bgImage || this.state.display !== '4') {

            if (this.state.article.altTitle) {
                return (
                    <Title>{this.state.article.altTitle}</Title>
                );
            }
            else {
                return (
                    <Title>{this.state.article.title}</Title>
                );
            }
        }

        return null;
    }

    renderAltTitle() {
        if (this.state.article.altTitle) {
            return (
                <Title>{this.state.article.altTitle}</Title>
            );
        }
        else {
            return (
                <Title>{this.state.article.title}</Title>
            );
        }
    }

    render() {
        const marginBottom = {
            marginBottom: 20
        }
        return (
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta property="type" content="website" />
                    <meta property="url" content={this.state.shareUrl} />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta property="title" content={this.state.article.title} />
                    <meta property="description" content={this.state.article.summary} />
                    <meta property="image" content={this.state.bgImage} />
                    <meta name="robots" content="NOODP" />
                    <meta property="og:locale" content="es_MX" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={this.state.article.title} />
                    <meta property="og:description" content={this.state.article.summary} />
                    <meta property="og:image" content={this.state.bgImage} />
                    <meta content="image/*" property="og:image:type" />
                    <meta property="og:url" content={this.state.shareUrl} />
                    <meta property="og:site_name" content="SkyAlert News MX" />
                </Helmet>
                {
                    this.state.displayArticleContent &&
                    <Container>
                        <div>
                            {this.state.bgImage &&
                                <ImageBg imageSrc={this.state.bgImage}>
                                    {this.state.display === '4' &&
                                        this.renderAltTitle()
                                    }
                                </ImageBg>
                            }
                            {this.state.bgVideo &&
                                <div style={marginBottom} className="videoHeader" dangerouslySetInnerHTML={{ __html: this.state.bgVideo }} />
                            }

                            <ContentContainer>
                                {
                                    this.renderTitle()
                                }
                                <PublishAt>{this.state.publishAt}</PublishAt>
                                {(this.state.author && !this.props.stripedContent) &&
                                    <NavLink strict to={'/autor/' + this.state.article.author._id.slug}>
                                        <Author
                                            name={this.state.article.author._id.name}
                                            slug={this.state.article.author._id.slug}
                                            image={this.state.article.author._id.pic.filename}
                                        />
                                    </NavLink>
                                }
                                {(this.state.author && this.props.stripedContent) &&
                                    <a href={'http://author/' + this.state.article.author._id._id}>
                                        <Author
                                            name={this.state.article.author._id.name}
                                            slug={this.state.article.author._id.slug}
                                            image={this.state.article.author._id.pic.filename}
                                        />
                                    </a>
                                }
                                <Content>
                                    {this.state.content}
                                </Content>
                                <Source>{this.state.sourceText &&
                                    `${strings().ARTICLE.content.source} ${this.state.source}`
                                }</Source>

                                <SocialContainer>
                                    <ShareFB
                                        url={this.state.shareUrl}
                                        onPress={() => this.analyticsEvents('Share by facebook', `Share facebook - ${this.state.article.title}`)}
                                    />
                                    <TweetShare
                                        url={this.state.shareUrl}
                                        text={this.state.article.title}
                                        onPress={() => this.analyticsEvents('Share by twitter', `Share twitter - ${this.state.article.title}`)}
                                    />
                                </SocialContainer>
                                {
                                    this.state.shareUrl &&
                                    <CommentsFB url={this.state.shareUrl} />
                                }


                            </ContentContainer>
                            <HR last={this.props.last} />
                        </div>
                    </Container>
                }
            </div>
        );
    }
}

export default withRouter(ArticleContent);
