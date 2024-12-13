import React from "react";

const NewsItem = (props) => {
  let { title, description, url, img, date, author, source } = props;
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            top: "20px",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {source}
          </span>
        </div>
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />

          <div className="card-body text-start">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

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
      </div>
    </>
  );
};
export default NewsItem;
