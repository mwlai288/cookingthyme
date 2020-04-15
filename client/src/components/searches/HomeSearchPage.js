import React, { useState, useContext } from 'react';

import RecipeItems from './RecipeItems';
import RecipeContext from '../../context/recipe/recipeContext';
import ErrorPage from '../ErrorPage';

const HomeSearchPage = () => {
	const [search, setSearch] = useState('');

	const recipeContext = useContext(RecipeContext);

	const { searchRecipes, searchedRecipes } = recipeContext;

	const onChange = (e) => setSearch(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		searchRecipes(search);
		setSearch('');
	};

	return (
		<div className="search-results">
			<h1>Cooking Thyme Cookbook</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="search"
					placeholder="Search Recipes"
					value={search}
					onChange={onChange}
					className="search-results__form"
				/>
				<input type="submit" value="Search" />
			</form>
			{searchedRecipes !== null ? (
				<div className="search-results__container">
					{searchedRecipes.map((recipe) => (
						<div key={recipe.idMeal} className="search-results__item">
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
