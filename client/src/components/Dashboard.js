import React, { useContext, useState, Fragment } from 'react';
import RecipeContext from '../context/recipes/recipeContext';
import RecipeForm from './RecipeForm';
import SavedRecipes from './SavedRecipes';
import Login from './login/Login';

const Dashboard = () => {
	const [showForm, setShowForm] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const recipeContext = useContext(RecipeContext);
	const { recipes } = recipeContext;

	return (
		<Fragment>
			<h1>Saved Recipes</h1>
			{recipes.map((recipe) => (
				<SavedRecipes key={recipe.id} recipe={recipe} />
			))}
			<button
				onClick={() => {
					setShowForm(!showForm);
				}}
			>
				Add Recipe
			</button>
			{showForm && <RecipeForm />}
			<div>
				<button onClick={() => setLoggedIn(!loggedIn)}>Login</button>
				{loggedIn && <Login />}
			</div>
		</Fragment>
	);
};

export default Dashboard;
