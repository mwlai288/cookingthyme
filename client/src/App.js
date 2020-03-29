import React, { Component, Fragment } from 'react';
import './App.css';
import HomeSearchPage from './components/HomeSearchPage';
import RecipeItems from './components/RecipeItems';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipe from './components/Recipe';

class App extends Component {
	state = {
		recipes: [],
		singleRecipe: {}
	};

	searchRecipes = async (search) => {
		const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
		`);
		this.setState({ recipes: res.data.meals });
	};

	getSelectedRecipe = async (mealID) => {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
		);
		this.setState({ singleRecipe: res.data.meals[0] });
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Fragment>
								<HomeSearchPage searchRecipes={this.searchRecipes} />
								{this.state.recipes.map((recipe) => (
									<RecipeItems key={recipe.idMeal} recipe={recipe} />
								))}
							</Fragment>
						)}
					/>
					<Route
						path="/:id"
						render={(props) => (
							<Recipe
								{...props}
								getSelectedRecipe={this.getSelectedRecipe}
								singleRecipe={this.state.singleRecipe}
							/>
						)}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
// {
/* <header className="main-heading">
	{this.state.recipes.map((recipe) => (
	<RecipeItems key={recipe.idMeal} recipe={recipe} />
	))}
</header>
</div> */
// }
