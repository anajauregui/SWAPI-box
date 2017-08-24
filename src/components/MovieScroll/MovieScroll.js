import React from 'react';
import './MovieScroll.css';

const MovieScroll = ({ scrollData }) => {


  const chooseRandomScroll = scrollData[3].results[Math.floor(Math.random() * scrollData.length)]
console.log(scrollData);
  return(
    // <div className='fade'>
      <section className='star-wars'>
        <div className='crawl'>
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
