import React from 'react';
import {robots} from './robots';


const Search=({searchField,SearchChange} )=>{
	return (
		<div>
		<input className='pa2 ba b--green bg-lightest-blue' 
		type="search"
		placeholder="Search robots"
		onChange={SearchChange}
		 />
		</div> 
		);
}

export default Search;