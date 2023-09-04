import React, { Component } from "react";
import Newsitem from "./Newsitem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=09fa77876483489d87af7c4f96bc2b0e&pageSize=20";
    let data = await fetch(url);
    let prasedData = await data.json();
    this.setState({
      articles: prasedData.articles,
      totalResults: prasedData.totalResults,
    });
  }

  handelPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=09fa77876483489d87af7c4f96bc2b0e&page= ${
      this.state.page - 1
    }&pageSize = 20`;
    let data = await fetch(url);
    let prasedData = await data.json();
    console.log(prasedData);
    this.setState({
      page: this.state.page - 1,
      articles: prasedData.articles,
    });
  };
  handelNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=09fa77876483489d87af7c4f96bc2b0e&page= ${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let prasedData = await data.json();
      console.log(prasedData);
      this.setState({
        page: this.state.page + 1,
        articles: prasedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsBee - Headlines</h1>
        <hr />
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4 " key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between mt-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelPrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
