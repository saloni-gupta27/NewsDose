import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import data from './db.js';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [totalArticles, setTotalArticles] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const handleUpdate = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let res = await fetch(url);
    if (res.ok) {
      //api is working in local clones and filtering/navigation should work in this case
      props.setProgress(30)
      res = await res.json();
      props.setProgress(70);
      setArticles(res.articles);
      setTotalArticles(res.totalResults);
      
    }
    else {
      //Filtering/navigation do not work in this case as api call is not successful
      //console.log(data.articles)
      setArticles(data.articles);
      setTotalArticles(data.totalResults);
    }
    setLoading(false);
    props.setProgress(100);
  };



  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let res = await fetch(url);
    if (res.ok) {
      res = await res.json();
      setArticles(articles.concat(res.articles));
      setTotalArticles(res.totalResults);
      
    }
    else {
      console.log(data.articles)
      setArticles(articles.concat(data.articles));
      setTotalArticles(data.totalResults);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleUpdate();
    //eslint-disable-next-line
  }, [])



  return (
    <>

      <h3 style={{ marginTop: '80px' }}>Top News Headlines</h3>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={
          articles.length !== totalArticles
        }

        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((el, index) => {
              return (
                <div className="col-md-4 my-1" key={index}>
                  <NewsItem
                    title={el.title ? el.title.slice(0, 63) : "News"}
                    description={
                      el.description
                        ? el.description.slice(0, 190)
                        : "Please check the article to know more"
                    }
                    img={!el.urlToImage ? "./images/news.jpeg" : el.urlToImage}
                    url={el.url}
                    date={el.publishedAt}
                    author={el.author}
                    source={el.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  );

}
export default News;

News.defaultProps = {
  pageSize: 13,
  category: "",
  country: "us",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};