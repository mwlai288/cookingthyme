import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RecipeItems = (props) => {
	const { idMeal, strMeal, strMealThumb } = props.recipe;

	return (
		<Fragment>
			<div className="recipes__name">Recipe: {strMeal}</div>
			<Link to={`/meal/${idMeal}`}>
				<img src={strMealThumb} alt={strMeal} className="recipes__image" />
			</Link>
		</Fragment>
	);
};

export default RecipeItems;
