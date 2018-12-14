import React from 'react';
import App from '../containers/App';

const People = () => {
  return (
      <div>
        <App url='https://swapi.co/api/people/' type='people'/>
      </div>
    );
};

export default People;