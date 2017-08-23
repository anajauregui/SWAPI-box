import React from 'react';
import './MovieScroll.css';

const MovieScroll = ({ data }) => {

  const chooseRandom = (array) => {
    const randomized = array[Math.floor(Math.random() * array.length)];
    return randomized
  }

  const movieTitle = data[3].results.map(movie => {
    return movie.title
  })
  const movieYear = data[3].results.map(movie => {
    return movie.release_date
  })
  const movieCrawl = data[3].results.map(movie => {
    return movie.opening_crawl
  })

  return(
    // <div className='fade'>
      <section className='star-wars'>
        <div className="crawl">
         <div className='title'>
           <p>{chooseRandom(movieYear)}</p>
           <h1>{chooseRandom(movieTitle)}</h1>
         </div>
          {chooseRandom(movieCrawl)}
        </div>
      </section>
    // </div>
  )
}

export default MovieScroll;
