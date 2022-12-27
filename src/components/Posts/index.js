import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import ApiController from '../../api';
import Loader from '../../components/Loader';
import styled from 'styled-components';
import { device } from '../../utils/media';
import Pagination from "react-js-pagination";
import { PostContent } from './PostContent';

const Api = new ApiController();

const PrensaPrerender = () => {
  window.prerenderReady = true;
  return (
    <Helmet>
      <title>SkyAlert Prensa</title>
      <meta name="description" content="SkyAlert en los medios" />
      <meta property="og:url" content="./prensa" />
      <meta property="og:title" content="SkyAlert en los medios" />
      <meta property="og:image" content="img/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Helmet>
  );
};

const Content = styled.div`
  margin : 3rem;
  .paginated{
    width:100%;
    padding: 0rem 4rem 2rem;
    @media ${device.laptop} {
      padding: 3rem 3rem 2rem;
      margin-bottom:5vh;
      margin-top:5vh;
      width:50%;
      // max-width: 300px;
      //  overflow-x: scroll;
    }
    @media ${device.tablet} {
      padding: 3rem 3rem 2rem;
      margin-bottom:5vh;
      margin-top:5vh;
      width:50%;
      // max-width: 300px;
      // overflow-x: scroll;
    }
    li{
      background: white;
      display: inline;
      padding: 10px 15px;
      color: black;
      -webkit-text-decoration: none;
      text-decoration: none;
      list-style: none;
      margin: .5rem;

      
      a{
        text-decoration: none;
        color: black;
        font-size: 1.5rem;

      }
    }
    li.active{
      background: #f47d55;
    }
    li.active a{
      color:white !important;
    }
  }

  .totalPost{
    width:100%;
    padding: 0rem 3rem 2rem;
    @media ${device.laptop} {
      width:50%;
      padding: 3rem 3rem 2rem;
      margin-bottom:5vh;
      margin-top:5vh;
    }
    @media ${device.tablet} {
      width:50%;
      padding: 3rem 3rem 2rem;
      margin-bottom:5vh;
      margin-top:5vh;
    }
  }
`;

const EPP = 4;

export const Posts = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [totalPost, setTotalPost] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [postRangeInitial, setPostRangeInitial] = useState(1);
  const [postRangeFinal, setPostRangeFinal] = useState(EPP);

  const getAllPost = async (page) => {

    try {

      const response = await Api.getAllArticlesPaged(page);
      console.log(response.data.articles);
      setArticles(() => response.data.articles);
      setTotalPost(response.total);
      setTotalPage(Math.ceil(20 / EPP));
      setIsLoading(false);

    } catch (e) {
      console.error('Could not retrieve articles', e);
    }
  }

  const handlePageChange = (activePage) => {

    if (activePage) {
      setPostRangeFinal(EPP * activePage);
    }

    getAllPost(activePage);
    setActivePage(activePage);

  }

  useEffect(() => {
    getAllPost();
  }, []);

  return (<>
    <div className='prensa-container02'>
      {PrensaPrerender()}
      {isLoading
        ? (< Loader />)
        : (
          <>
          <div className='prensa-container03'>
            {articles.map((article, index) => <PostContent key={index} article={article} />)}
              {/* {articles.map((article, index) => <h1>{article.title}</h1>)} */}

          </div>
          <Content className='prensa-container03'>
            <div className="totalPost">
              Mostrando  <span>{postRangeInitial}</span> - <span>{postRangeFinal}</span> post en {totalPost}
            </div>
            <div className="paginated">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={EPP}
                totalItemsCount={totalPost}
                pageRangeDisplayed={totalPage}
                onChange={handlePageChange}
              />
            </div>
          </Content>
          </>
        )
      }
    </div>
  </>)
}