import React, { useState, useContext, useEffect } from 'react';
import RecipeContext from '../context/recipes/recipeContext';

const AddRecipe = () => {
	const recipeContext = useContext(RecipeContext);
	const { addRecipe, current, clearCurrent, updateRecipe } = recipeContext;

	const [recipe, setRecipe] = useState({
		recipeName: '',
		ingredients: '',
		instructions: ''
	});

	// const [photo, setPhoto] = useState(null);
	const { recipeName, ingredients, instructions } = recipe;

	const onChange = (e) =>
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value
		});

	useEffect(() => {
		if (current !== null) {
			setRecipe(current);
		} else {
			setRecipe({
				photo: '',
				recipeName: '',
				ingredients: '',
				instructions: ''
			});
		}
	}, [recipeContext, current]);

	const clearAll = () => {
		clearCurrent();
	};

	// **** TODO: User submit photo to database by uploading photo ****

	// const uploadPhoto = (e) => {
	// 	setPhoto(e.target.files[0]);
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addRecipe(recipe);
		} else {
			updateRecipe(recipe);
		}
		clearAll();

		// setPhoto(null);
	};

	return (
		<form onSubmit={onSubmit}>
			{/* <input type="file" onChange={uploadPhoto} /> */}
			<input
				type="text"
				name="recipeName"
				value={recipeName}
				placeholder="Name of Recipe"
				onChange={onChange}
			/>
			<textarea
				name="ingredients"
				value={ingredients}
				cols="30"
				rows="10"
				onChange={onChange}
			>
				Enter ingredients
			</textarea>
			<textarea
				name="instructions"
				value={instructions}
				cols="30"
				rows="10"
				onChange={onChange}
			>
				Enter instructions
			</textarea>
			<input type="submit" value={current ? 'Edit Recipe' : 'Add Recipe'} />
			{current && (
				<div>
					<button onClick={clearAll}>Clear Form</button>
				</div>
			)}
		</form>
	);
};

export default AddRecipe;
