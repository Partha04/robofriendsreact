import React from 'react';

const Card= ({ names, email ,ida})=>
{ 
	return (<div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
		<img alt='robot' src={`https://robohash.org/${ida}?size=250x250`}/>
		<h2 >{names}</h2>
		<p >{email}</p>
	</div>) ;
}

export default Card;