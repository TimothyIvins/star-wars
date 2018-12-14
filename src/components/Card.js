import React from 'react';

const Card = ({ obj, type }) => {

	let { idname = '', p1 = '', p2 = '', p3 = '', p4 = '' } = {};

	switch (type) {
	    case 'films':
	    	idname = obj.title;
	    	p1 = 'Director: ' + obj.director; 
	    	p2 = 'Released: ' + obj.release_date; 
        	break;
	    case 'people':
	    	idname = obj.name;
	    	p1 = 'Height: ' + obj.height; 
	    	p2 = 'Mass: ' + obj.mass; 
	    	p3 = 'Gender: ' + obj.gender; 
        	break;
	    case 'planets':
	    	idname = obj.name;
	    	p1 = 'Diameter: ' + obj.diameter; 
	    	p2 = 'Climate: ' + obj.climate; 
	    	p3 = 'Terrain: ' + obj.terrain; 
	    	p4 = 'Population: ' + obj.population; 
        	break;
	    case 'species':
	    	idname = obj.name;
	    	p1 = 'Language: ' + obj.language; 
	    	p2 = 'Avg Height: ' + obj.average_height; 
	    	p3 = 'Avg Lifespan: ' + obj.average_lifespan; 
        	break;
	    case 'starships':
	    	idname = obj.name;
	    	p1 = 'Model: ' + obj.model; 
	    	p2 = 'Class: ' + obj.starship_class; 
	    	p3 = 'Hyperdrive Rating: ' + obj.hyperdrive_rating; 
        	break;
	    case 'vehicles':
	    	idname = obj.name;
	    	p1 = 'Model: ' + obj.model; 
	    	p2 = 'Class: ' + obj.vehicle_class; 
	    	p3 = 'Manufacturer: ' + obj.manufacturer; 
        	break;
    	default:
	        ({ errorrr: idname = '' } = obj);
	};
	
	return (
		<div className='tc bg-light-yellow dib br3 ma2 ph2 grow bw2 shadow-5'>
			<h2>{idname}</h2>
			<p>{p1}</p>
			<p>{p2}</p>
			<p>{p3}</p>
			<p>{p4}</p>
		</div>
		);
};

export default Card;