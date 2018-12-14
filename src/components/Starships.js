import React from 'react';
import App from '../containers/App';

const Starships = () => {
  return (
      <div>
        <App url='https://swapi.co/api/starships/' type='starships'/>
      </div>
    );
};

export default Starships;