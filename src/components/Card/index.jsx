import React from 'react';
import './styles.css';

const Card = ({ results }) => {
  // console.log(results);
  // console.log(results.results);
  // const character = results.results;
  // console.log(character);
  // console.log(results);
  return (
    <div>
      {/* {
        character.map(c =>
          <div className='card' key={c.id}>
            {c.name}
          </div>
        )
      } */}
      <div className='card'>
        <div className="container_img--card">
          <img className='img--card' src={results.image} alt="" />
        </div>
        <div className="container_basic-info--card">
          <p>{results.name}</p>
        </div>
      </div>
      {/* {
        console.log(character[0])
      } */}
    </div>
  );
};

export { Card };
