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
		<div className="recipe-info">
			<div>
				<h1 className="recipe-info__title">{strMeal}</h1>
				<img src={strMealThumb} alt={strMeal} className="recipe-info__image" />
			</div>
			<div className="recipe-info__ingredients">
				<h3>Ingredients</h3>
				<ul>
					{ingredients.map((ingredient) => {
						return <li>{ingredient}</li>;
					})}
				</ul>
			</div>
			<div className="recipe-info__instructions">
				<h3>Instructions</h3> {strInstructions}
			</div>
			<div recipe-info__button>
				<button>Save Recipe</button>
			</div>
		</div>
	);
};

export default Recipe;
