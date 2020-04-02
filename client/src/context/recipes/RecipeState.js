import React, { useReducer } from 'react';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
	ADD_RECIPE,
	DELETE_RECIPE,
	UPDATE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

const RecipeState = (props) => {
	const initialState = {
		recipes: [
			{
				id: 1,
				photo: null,
				recipeName: 'Beer Chicken',
				ingredients:
					'whole chicken, 1 can of bud light beer, salt, pepper, 1 tbsp rosemary',
				instructions:
					'preheat oven at 425F, season chicken, place on open beer can'
			},
			{
				id: 2,
				photo: null,
				recipeName: 'Beer Chicken 2',
				ingredients:
					'2 whole chicken, 2 can of bud light beer, salt, pepper, 2 tbsp rosemary',
				instructions:
					'preheat oven at 425F, season chicken, place on open beer can'
			},
			{
				id: 3,
				photo: null,
				recipeName: 'Beer Chicken 3',
				ingredients:
					'3 whole chicken, 3 can of bud light beer, salt, pepper, 3 tbsp rosemary',
				instructions:
					'preheat oven at 425F, season chicken, place on open beer can'
			}
		],
		current: null
	};

	const [state, dispatch] = useReducer(recipeReducer, initialState);

	// Add recipe
	const addRecipe = (recipe) => {
		recipe.id = Math.floor(100000 + Math.random() * 900000);
		dispatch({ type: ADD_RECIPE, payload: recipe });
	};

	// Delete Recipe
	const deleteRecipe = (id) => {
		dispatch({ type: DELETE_RECIPE, payload: id });
	};

	// Set Current Recipe
	const setCurrent = (recipe) => {
		dispatch({ type: SET_CURRENT, payload: recipe });
	};

	// Clear Current Recipe
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update Recipe
	const updateRecipe = (recipe) => {
		dispatch({ type: UPDATE_RECIPE, payload: recipe });
	};
	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				current: state.current,
				addRecipe,
				deleteRecipe,
				setCurrent,
				clearCurrent,
				updateRecipe
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;
