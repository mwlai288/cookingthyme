import React, { useState, Fragment } from 'react';
import './App.css';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeSearchPage from './components/searches/HomeSearchPage';
// import RecipeItems from './components/searches/RecipeItems';
import RecipeInfo from './components/searches/RecipeInfo';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

import RecipeState from './context/recipe/RecipeState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import SignIn from './components/auth/Login';
import Navbar from './components/Navbar';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [singleRecipe, setSingleRecipe] = useState({});

	// const searchRecipes = async (search) => {
	// 	const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
	// 	`);
	// 	setRecipes(res.data.meals);
	// };

	// const getSelectedRecipe = async (mealID) => {
	// 	const res = await axios.get(
	// 		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
	// 	);
	// 	setSingleRecipe(res.data.meals[0]);
	// };

	return (
		<AuthState>
			<RecipeState>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={SignIn} />
						<PrivateRoute exact path="/" component={Dashboard} />
						<PrivateRoute exact path="/search" component={HomeSearchPage} />
						<PrivateRoute exact path="/meal/:id" component={RecipeInfo} />
					</Switch>
				</Router>
			</RecipeState>
		</AuthState>
	);
};

export default App;
