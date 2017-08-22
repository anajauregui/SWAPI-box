import React from 'react';

const Card = ({name, homeworld, species, population, terrain, climate, residents, model, class, passengers}) => {
  
  return(
    <article>
      <p>{name}</p>
      <p>{homeworld}</p>
      <p>{species}</p>
      <p>{population}</p>
      <p>{terrain}</p>
      <p>{climate}</p>
      <p>{residents}</p>
      <p>{model}</p>
      <p>{class}</p>
      <p>{passengers}</p>
    </article>
  )
}

export default Card;
