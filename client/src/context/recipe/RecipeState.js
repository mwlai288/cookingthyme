import React, { useReducer } from 'react';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import axios from 'axios';
import {
	GET_RECIPE,
	CLEAR_RECIPE,
	ADD_RECIPE,
	DELETE_RECIPE,
	UPDATE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	RECIPE_ERROR,
	SEARCH_RECIPE,
	RECIPE_INFORMATION,
	CLEAR_SEARCH,
	LOADING
} from '../types';

const RecipeState = (props) => {
	const initialState = {
		searchedRecipes: [],
		recipeInfo: [],
		recipes: null,
		photo: null,
		current: null,
		error: null,
		loading: false
	};

	const [state, dispatch] = useReducer(recipeReducer, initialState);

	// Get Recipes
	const getRecipes = async () => {
		try {
			const res = await axios.get('/api/recipes');
			dispatch({
				type: GET_RECIPE,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: RECIPE_ERROR,
				payload: err.response.msg
			});
		}
	};

	const searchRecipes = async (search) => {
		setLoading();
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
		const res = await axios.get(url, {
			transformRequest: [
				(data, headers) => {
					delete headers['access-token'];
					delete headers['uid'];
					delete headers['client'];
					delete headers['expiry'];
					delete headers['token-type'];
					delete headers.common;
					return data;
				}
			]
		});
		try {
			dispatch({
				type: SEARCH_RECIPE,
				payload: res.data.meals
			});
		} catch (error) {
			console.log(error);
			dispatch({ type: RECIPE_ERROR, payload: error.response });
		}
	};

	const getRecipeInfo = async (mealID) => {
		setLoading();
		const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
		const res = await axios.get(url, {
			transformRequest: [
				(data, headers) => {
					delete headers['access-token'];
					delete headers['uid'];
					delete headers['client'];
					delete headers['expiry'];
					delete headers['token-type'];
					delete headers.common;
					return data;
				}
			]
		});
		try {
			dispatch({
				type: RECIPE_INFORMATION,
				payload: res.data.meals[0]
			});
		} catch (error) {
			console.log(error);
			dispatch({ type: RECIPE_ERROR, payload: error.response });
		}
	};

	// Add recipe - no photo
	const addRecipe = async (recipe) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post('/api/recipes', recipe, config);
			dispatch({ type: ADD_RECIPE, payload: res.data });
		} catch (error) {
			dispatch({ type: RECIPE_ERROR, payload: error.response.msg });
		}
	};

	// Delete Recipe
	const deleteRecipe = async (id) => {
		try {
			await axios.delete(`/api/recipes/${id}`);
			dispatch({ type: DELETE_RECIPE, payload: id });
		} catch (error) {
			dispatch({ type: RECIPE_ERROR, payload: error.response.msg });
		}
	};

	// Set Current Recipe
	const setCurrent = (recipe) => {
		dispatch({ type: SET_CURRENT, payload: recipe });
	};

	// Clear Recipe
	const clearRecipes = () => {
		dispatch({
			type: CLEAR_RECIPE
		});
	};

	// Clear Search Results
	const clearSearch = () => {
		dispatch({
			type: CLEAR_SEARCH
		});
	};

	// Clear Current Recipe
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update Recipe
	const updateRecipe = async (recipe) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.put(`/api/recipes/${recipe._id}`, recipe, config);

			dispatch({
				type: UPDATE_RECIPE,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: RECIPE_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Set Loading
	const setLoading = () => dispatch({ type: LOADING });

	return (
		<RecipeContext.Provider
			value={{
				searchedRecipes: state.searchedRecipes,
				recipeInfo: state.recipeInfo,
				recipes: state.recipes,
				current: state.current,
				error: state.error,
				loading: state.loading,
				searchRecipes,
				addRecipe,
				deleteRecipe,
				setCurrent,
				clearCurrent,
				updateRecipe,
				clearRecipes,
				getRecipes,
				getRecipeInfo,
				setLoading,
				clearSearch
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;
