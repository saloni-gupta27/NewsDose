import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, url, img, date, author, source } = this.props;
    return (
      <>
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-start">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:"90%"}}>
              {source}
             
            </span>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} at{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>

            <a
              href={url}
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
