import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItems = (props) => {
	const { idMeal, strMeal, strMealThumb } = props.recipe;

	return (
		<div>
			Recipe: {strMeal}
			<Link to={`/meal/${idMeal}`}>
				<img src={strMealThumb} alt={strMeal} className="meal-image" />
			</Link>
		</div>
	);
};

export default RecipeItems;
