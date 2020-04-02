import React, { useContext, useState, useEffect, Fragment } from 'react';
import RecipeForm from './RecipeForm';
import SavedRecipes from './SavedRecipes';
import Login from './login/Login';
import RecipeContext from '../context/recipes/recipeContext';
import AuthContext from '../context/auth/authContext';

// import setAuthToken from '../utils/setAuthToken';

// if (localStorage.token) {
// 	setAuthToken(localStorage.token);
// }

const Dashboard = () => {
	const [showForm, setShowForm] = useState(false);

	const recipeContext = useContext(RecipeContext);
	const { recipes } = recipeContext;

	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<h1>Saved Recipes</h1>
			{recipes.map((recipe) => (
				<SavedRecipes key={recipe.id} recipe={recipe} />
			))}

			<div>
				<h1>
					Add Recipe
					<RecipeForm />
				</h1>
			</div>

			<div>
				<div>
					<h1>
						Login
						<Login />
					</h1>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
