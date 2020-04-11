import React, { useContext, useEffect } from 'react';

import RecipeContext from '../../context/recipe/recipeContext';
import { Fragment } from 'react';
import Spinner from '../extras/Spinner';

const Recipe = ({ match }) => {
	const recipeContext = useContext(RecipeContext);

	const { recipeInfo, getRecipeInfo, loading } = recipeContext;

	useEffect(() => {
		getRecipeInfo(match.params.id);
		// eslint-disable-next-line
	}, []);

	const ingredients = [];

	for (let i = 1; i <= 20; i++) {
		if (recipeInfo[`strIngredient${i}`]) {
			ingredients.push(
				`${recipeInfo[`strMeasure${i}`]}- ${recipeInfo[`strIngredient${i}`]}`
			);
		} else {
			break;
		}
	}

	const { strMeal, strMealThumb, strInstructions } = recipeInfo;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<h1>Meal Name</h1> <span>{strMeal}</span>
			<img src={strMealThumb} alt={strMeal} className="meal-image" />
			<h3>Ingredients</h3>
			{ingredients.join(', ')}
			<h3>Instructions</h3> {strInstructions}
			<div>
				<button>Save Recipe</button>

				<button>Login in to Save</button>
			</div>
		</Fragment>
	);
};

export default Recipe;
