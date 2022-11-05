import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl  } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width :"18rem"}} >
          <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2019/08/figma.jpg?resize=1200,799":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-dark">Read More</a>
            {/* target is used to open content in new tab  */}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem