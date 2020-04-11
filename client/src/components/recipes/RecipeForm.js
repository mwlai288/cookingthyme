import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeForm = () => {
	const recipeContext = useContext(RecipeContext);
	const { addRecipe, current, clearCurrent, updateRecipe } = recipeContext;

	useEffect(() => {
		if (current !== null) {
			setRecipe(current);
		} else {
			setRecipe({
				recipeName: '',
				ingredients: '',
				instructions: ''
			});
		}
	}, [recipeContext, current]);

	const [recipe, setRecipe] = useState({
		recipeName: '',
		ingredients: '',
		instructions: ''
	});

	const { recipeName, ingredients, instructions } = recipe;

	const onChange = (e) =>
		setRecipe({ ...recipe, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addRecipe(recipe);
		} else {
			updateRecipe(recipe);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? 'Edit Recipe' : 'Add Recipe'}</h2>

			<input
				type="text"
				placeholder="Recipe Name"
				name="recipeName"
				value={recipeName}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Ingredients"
				name="ingredients"
				value={ingredients}
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="Instructions"
				name="instructions"
				value={instructions}
				onChange={onChange}
			/>

			<div>
				<input
					type="submit"
					value={current ? 'Update Recipe' : 'Add Recipe'}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default RecipeForm;
