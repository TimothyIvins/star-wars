import React from 'react';
import Card from './Card';

const CardList = ({ swobjects, type }) => {
	return (
		<div>
			{
			swobjects.map((obj, i) => {
				return (<Card 
					key={i}
					obj={obj}
					type={type}
				/>);
			})
			}
		</div>
	);
};

export default CardList;