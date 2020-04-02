import React, { useContext, useEffect } from 'react';
import Login from './login/Login';
import AuthContext from '../context/auth/authContext';

const Recipe = ({ getSelectedRecipe, singleRecipe, match }) => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		getSelectedRecipe(match.params.id);
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);

	const ingredients = [];

	for (let i = 1; i <= 20; i++) {
		if (singleRecipe[`strIngredient${i}`]) {
			ingredients.push(
				`${singleRecipe[`strMeasure${i}`]}- ${
					singleRecipe[`strIngredient${i}`]
				}`
			);
		} else {
			break;
		}
	}
	const { strMeal, strInstructions, strMealThumb } = singleRecipe;

	return (
		<div className="recipe-info">
			<h1>Meal Name</h1> <span>{strMeal}</span>
			<img src={strMealThumb} alt={strMeal} className="meal-image" />
			<h3>Ingredients</h3>
			{ingredients.join(', ')}
			<h3>Instructions</h3> {strInstructions}
			<div>
				<button>Save Recipe</button>

				<button>Login in to Save</button>
			</div>
			<Login />
		</div>
	);
};

export default Recipe;
