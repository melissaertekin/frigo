import React from 'react';

const FavoriteItems = ({id,name, recipeImg, desc }) => {
	return(
		<div className='favoritesList' key={id}>
			<div className='favoritesContent'>
				<div className='img'>
					<img src={recipeImg} alt={name}  />
				</div>
				<div className='details'>
					<p>{name}</p>	
				</div>
			</div>
		</div>
	);
}

export default FavoriteItems;