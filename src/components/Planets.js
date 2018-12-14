import React from 'react';
import App from '../containers/App';

const Planets = () => {
  return (
      <div>
        <App url='https://swapi.co/api/planets/' type='planets'/>
      </div>
    );
};

export default Planets;