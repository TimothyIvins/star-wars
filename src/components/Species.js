import React from 'react';
import App from '../containers/App';

const Species = () => {
  return (
      <div>
        <App url='https://swapi.co/api/species/' type='species'/>
      </div>
    );
};

export default Species;