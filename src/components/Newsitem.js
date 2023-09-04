import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://media.cnn.com/api/v1/images/stellar/prod/230902171525-01-burning-man-rain-mud-090223-still.jpg?c=16x9&q=w_800,c_fill"
                  : imageUrl
              }
              className="card-img-top"
              alt="...."
            />
            <div className="card-body">
              <h5 className="card-title">{title} ...</h5>
              <p className="card-text">{description} ...</p>
              <a
                rel="noreferer"
                href={newsUrl}
                target="_blank"
                className="btn btn-dark btn-sm"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
