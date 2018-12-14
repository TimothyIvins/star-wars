import React from 'react';
import App from '../containers/App';

const Films = () => {
  return (
      <div>
      	<App url='https://swapi.co/api/films/' type='films'/>
      </div>
    );
};

export default Films;