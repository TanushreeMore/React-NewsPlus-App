import React from 'react'

const NewsItem =(props) => {

    const {title, description, imageUrl, newsUrl, author, date, source} = props;
  
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{    
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            right: 0
            }}>
          <span className="badge  bg-danger">{source}</span>
          </div>
            <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2023/02/20230227_090555.jpg?resize=1200,900":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {!date ? "Not Mentioned":new Date(date).toGMTString()}</small></p> {/* it means {if author is given print author or if null print "unknown"  } */}
            {/* target="_blank" => to open in new tab */}
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
