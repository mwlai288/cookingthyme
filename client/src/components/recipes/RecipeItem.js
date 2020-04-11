import React, { useContext } from 'react';

import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
	const recipeContext = useContext(RecipeContext);
	const { deleteRecipe, setCurrent, clearCurrent } = recipeContext;

	const { _id, recipeName, ingredients, instructions } = recipe;

	const onDelete = () => {
		deleteRecipe(_id);
		clearCurrent();
	};

	return (
		<div className="card bg-light">
			{/* <img src= alt=""/> */}
			<h3 className="text-primary text-left">
				Name:
				<span style={{ float: 'right' }}>{recipeName}</span>
			</h3>
			<ul className="list">
				Ingredients
				<li>{ingredients}</li>
				Instructions
				<li>{instructions}</li>
			</ul>
			<p>
				<button
					className="btn btn-dark btn-sm"
					onClick={() => setCurrent(recipe)}
				>
					Edit
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

export default RecipeItem;
