import React from 'react';
import './MovieScroll.css';

const MovieScroll = ({ data }) => {

  // const chooseRandomScroll = (array) => {
  //   const randomized = array[Math.floor(Math.random() * array.length)];
  //   return randomized
  // }
  //
  // const movieTitle = data[3].results.map(movie => {
  //   return movie.title
  // })
  // const movieYear = data[3].results.map(movie => {
  //   return movie.release_date
  // })
  // const movieCrawl = data[3].results.map(movie => {
  //   return movie.opening_crawl
  // })

  const chooseRandomScroll = data[3].results[Math.floor(Math.random() * data.length)]

  return(
    // <div className='fade'>
      <section className='star-wars'>
        <div className="crawl">
         <div className='title'>
           <p>{chooseRandomScroll.release_date}</p>
           <h1>{chooseRandomScroll.title}</h1>
         </div>
          {chooseRandomScroll.opening_crawl}
        </div>
      </section>
    // </div>
  )
}

export default MovieScroll;
