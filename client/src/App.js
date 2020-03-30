import React, { useState, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeSearchPage from './components/HomeSearchPage';
import RecipeItems from './components/RecipeItems';
import Recipe from './components/Recipe';
import ErrorPage from './components/ErrorPage';

const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [singleRecipe, setSingleRecipe] = useState({});

	const searchRecipes = async (search) => {
		const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
		`);
		setRecipes(res.data.meals);
	};

	const getSelectedRecipe = async (mealID) => {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
		);
		setSingleRecipe(res.data.meals[0]);
	};

	const showResults =
		recipes === null ? (
			<ErrorPage />
		) : (
			recipes.map((recipe) => (
				<RecipeItems key={recipe.idMeal} recipe={recipe} />
			))
		);

	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => (
						<Fragment>
							<HomeSearchPage searchRecipes={searchRecipes} />
							{showResults}
						</Fragment>
					)}
				/>
				<Route
					path="/:id"
					render={(props) => (
						<Recipe
							{...props}
							getSelectedRecipe={getSelectedRecipe}
							singleRecipe={singleRecipe}
						/>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;
