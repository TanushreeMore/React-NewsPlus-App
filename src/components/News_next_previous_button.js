// News.js  ==> with previous and next button
//  not in use 

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'; //impt

const News =(props)=> {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)

// document.title = `${capitalizeFirstLetter(
//       props.category
//     )} - NewsPlus`;

  //capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // refactoring news component to use same function
  const updateNews =async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
      props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
     // eslint-disable-next-line
  }, [])

  //   ------ next & previous button ------
  const handlePrevClick = async () => {
    console.log("Previous");
    setPage(page-1);
    updateNews();
}
// logic for go on next pager
const handleNextClick = async () => {
  console.log("Next");
  setPage(page+1)
  updateNews();
}

return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '34px 0px'}}>
          NewsPlus - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <div className="row">
          {!loading && articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                {/* slice() => use to limit display character */}
              <NewsItem 
                title={element.title?element.title.slice(0,45):""} 
                description={element.description?element.description.slice(0,88):""} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          })}
        </div>
        {/* ------ next - previous button ------ */}
         <div className="container d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string, //pts
  pageSize: PropTypes.number, //ptn
  category: PropTypes.string,
}

export default News
