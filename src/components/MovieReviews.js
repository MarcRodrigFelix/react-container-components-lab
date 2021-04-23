import React from 'react'


const MovieReviews = ({ reviews }) => {

  return (
    <div className="review-list">
        { reviews.map( ({headline, byline, link, summary_short}) => {
         return (
          <div key={headline} >
            <p>{byline}</p>
            <a>{link.url}</a>
            <p>{summary_short}</p>
          </div>
         )
        })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;