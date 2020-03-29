import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItems = (props) => {
	const { idMeal, strMeal, strMealThumb } = props.recipe;
	// const { ingredients } = props.ingredients;
	// console.log(ingredients);
	return (
		<div>
			Recipe: {strMeal}
			<Link to={`/${idMeal}`}>
				<img src={strMealThumb} alt={strMeal} />
			</Link>
		</div>
	);
};

export default RecipeItems;
