import React from 'react';
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='searchbox pa3 ba br3'
				type='search'
				placeholder='search argument'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;