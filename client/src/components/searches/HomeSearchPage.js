import React, { useState, useContext } from 'react';

import RecipeItems from './RecipeItems';
import RecipeContext from '../../context/recipe/recipeContext';
import ErrorPage from '../ErrorPage';

const HomeSearchPage = () => {
	const [search, setSearch] = useState('');

	const recipeContext = useContext(RecipeContext);

	const { searchRecipes, searchedRecipes, clearInfo } = recipeContext;

	const onChange = (e) => setSearch(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		searchRecipes(search);
		setSearch('');
	};

	return (
		<div>
			<h1>Cooking Thyme Cookbook</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="search"
					placeholder="Search Recipes"
					value={search}
					onChange={onChange}
				/>
				<input type="submit" value="Search" />
			</form>
			{searchedRecipes !== null ? (
				<div>
					{searchedRecipes.map((recipe) => (
						<div key={recipe.idMeal} className="item">
							<RecipeItems recipe={recipe} />
						</div>
					))}
				</div>
			) : (
				<ErrorPage />
			)}
		</div>
	);
};

export default HomeSearchPage;
