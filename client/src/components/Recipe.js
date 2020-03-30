import React, { useState, useEffect } from 'react';
import Login from './Login';

const Recipe = ({ getSelectedRecipe, singleRecipe, match }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		getSelectedRecipe(match.params.id);
		//eslint-disable-next-line
	}, []);

	const showModal = () => {
		setShow(!show);
	};

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
				{loggedIn === true ? (
					<button>Save Recipe</button>
				) : (
					<button onClick={showModal}>Login in to Save</button>
				)}
			</div>
			{show && <Login showModal={showModal} />}
		</div>
	);
};

export default Recipe;
