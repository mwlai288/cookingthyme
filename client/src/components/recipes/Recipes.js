import React, { Fragment, useContext, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import Spinner from '../extras/Spinner';
import RecipeContext from '../../context/recipe/recipeContext';

const Recipes = () => {
	const recipeContext = useContext(RecipeContext);

	const { recipes, getRecipes } = recipeContext;

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, []);

	if (recipes !== null && recipes.length === 0) {
		return <h4>Please add a recipe</h4>;
	}

	return (
		<Fragment>
			{recipes !== null ? (
				<div>
					{recipes.map((recipe) => (
						<div key={recipe._id} className="item">
							<RecipeItem recipe={recipe} />
						</div>
					))}
				</div>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Recipes;
