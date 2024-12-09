import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 13,
    category: "",
    country: "us",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      totalArticles: 0,
      page: 1,
      loading: true,
    };
  }

  handleUpdate = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4e2084bb80d4537b92429f07dc347cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let res = await fetch(url);
    res = await res.json();
    this.setState({
      articles: res.articles,
      totalArticles: res.totalResults,
      loading: false,
    });
  };

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1, loading: true });
    this.handleUpdate();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1, loading: true });
    this.handleUpdate();
  };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4e2084bb80d4537b92429f07dc347cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let res = await fetch(url);
//     res = await res.json();
//     this.setState({
//       articles: this.state.articles.concat(res.articles),
//       totalArticles: res.totalResults,
//       loading: false,
//     });
//   };

  async componentDidMount() {
    this.handleUpdate();
  }

  render() {
    return (
      <>
        <h3 className="my-3">Top News Headlines</h3>
        {this.state.loading && <Spinner/>}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
          hasMore={
            this.state.articles.length !== this.state.articles.totalArticles
          }
          loader={this.state.loading && <Spinner/>}
        >*/}
            <div className="container"> 
          <div className="row">
            {!this.state.loading && this.state.articles.map((el) => {
              return (
                <div className="col-md-4 my-1" key={el.title}>
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
         {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between my-3">
          <button
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles /this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
