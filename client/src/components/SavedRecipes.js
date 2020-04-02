import React, { useState, useContext, Fragment } from 'react';
import RecipeForm from './RecipeForm';
import RecipeContext from '../context/recipes/recipeContext';

const Dashboard = ({ recipe }) => {
	const recipeContext = useContext(RecipeContext);
	const { deleteRecipe, setCurrent, clearCurrent } = recipeContext;

	const [showForm, setShowForm] = useState(false);

	const { id, recipeName, ingredients, instructions } = recipe;

	const onDelete = () => {
		deleteRecipe(id);
		clearCurrent();
	};

	const editRecipe = () => {
		setCurrent(recipe);
		setShowForm(!showForm);
	};

	return (
		<Fragment>
			<div>
				<h3>
					Name: <span>{recipeName} </span>
				</h3>
				<p>Ingredients: {ingredients}</p>
				<p>Instructions: {instructions}</p>
				<button onClick={onDelete}>X</button>
				<button onClick={editRecipe}>Edit</button>
				{showForm && <RecipeForm />}
			</div>
		</Fragment>
	);
};

export default Dashboard;
