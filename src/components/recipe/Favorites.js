import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineHeart,  } from "react-icons/ai";
import FavoriteItems from './FavoritesItems';
import { useSelector } from 'react-redux';

const Favorites = () => {
	const [favoritesOpen, setfavoritesOpen] = useState(false);
	const favoriteRecipes = useSelector((state) => state.recipe.favList);

	const closefavorites = () => {
		setfavoritesOpen(false);
	};
	const openfavorites = () => {
		setfavoritesOpen(true);
	};

	return (
		<div className='favorites'>
			<div className='favorites' onClick={openfavorites}>
				<AiOutlineHeart className = 'favoritesIcon'/>
			</div>
			<div className={favoritesOpen ? "overlay" : "nonoverlay"}>

			</div>
			<div className={favoritesOpen ? "favoritesItem" : "favoritesHide"}>
				<div className='title flex'>
					<button onClick={closefavorites}>
							<AiOutlineClose className="icon" />                    
					</button>
				</div>
				<h1>Your Favorite Recipes</h1>
				{favoriteRecipes.map((item) => (
					<FavoriteItems 
						key={item.id}
						id={item.id} 
						recipeImg={item.recipeImg} 
						name={item.name} 
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;