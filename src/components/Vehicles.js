import React from 'react';
import App from '../containers/App';

const Vehicles = () => {
  return (
      <div>
        <App url='https://swapi.co/api/vehicles/' type='vehicles'/>
      </div>
    );
};

export default Vehicles;