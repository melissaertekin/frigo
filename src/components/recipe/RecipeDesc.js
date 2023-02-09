import React from "react";

const RecipeDesc = ({recipeImg, name, desc }) => {
	return(
		<div className='desc ' id='recipe'>
			<div className='image'>
				<img src={recipeImg} alt='recipeImg' />
			</div>
			<div className='details'>
					<p>{name}</p>
					<p>{desc}</p>
					<p>Description is here... </p>
			</div>
		</div>
	);
}

export default RecipeDesc;