import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { recipes } from "../../data/data";
import { myFrigoActions } from "../../store/myFrigoSlice";


const RecipeDesc = () => {
	const {state} = useLocation();
	const dispatch = useDispatch();


	const cook = () => {
		state.ingrediants.forEach(id => {
			console.log(id);
			dispatch(myFrigoActions.removeFromMyFrigo({id}))	
		});	
	}

	return(
		<div className='desc' id='recipe'>
			<div className='image'>
				<img src={state.img} alt='recipeImg' />
			</div>
			<button className='button' onClick={cook} >
				COOK
			</button>
			<div className='details'>
				<p>{state.name}</p>
				<p>{state.desc}</p>
				<p>{state.ingrediants}</p>
				<p>Description is here... </p>
			</div>
		</div>
	);
}

export default RecipeDesc;