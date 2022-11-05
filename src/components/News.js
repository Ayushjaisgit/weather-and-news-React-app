import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./weather/style.css";


export class News extends Component {

  constructor() {
    super()
    console.log("hello i am a constructor from news component")
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a670b77cccbd459289b9129dcde80bc5&page=1`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }



   handlePrevClick = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a670b77cccbd459289b9129dcde80bc5&page=${this.state.page - 1}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles:parsedData.articles
      })

    }
    handleNextClick = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a670b77cccbd459289b9129dcde80bc5&page=${this.state.page + 1}`;
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles
      })
    }


  render() {
    return (
      <div className="container my-6 monkey  ">
        <h1 className='text-center text-white '>India - Top headlines </h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>
        <div className="container d-flex justify-content-between">
          {/* { this is lect28 } */}
          <button type="button"  className="btn btn-outline-dark" onClick={this.handlePrevClick}>Previous  &larr;</button>
          <button type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News