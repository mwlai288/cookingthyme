import {
	ADD_RECIPE,
	DELETE_RECIPE,
	UPDATE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	RECIPE_ERROR,
	GET_RECIPE,
	CLEAR_RECIPE,
	SEARCH_RECIPE,
	RECIPE_INFORMATION,
	CLEAR_SEARCH,
	LOADING
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_RECIPE:
			return {
				...state,
				recipes: action.payload,
				loading: false
			};
		case ADD_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, action.payload],
				loading: false
			};
		case SEARCH_RECIPE:
			return {
				...state,
				searchedRecipes: action.payload,
				loading: false
			};
		case RECIPE_INFORMATION:
			return {
				...state,
				recipeInfo: action.payload,
				loading: false
			};
		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter((recipe) => recipe._id !== action.payload)
			};
		case CLEAR_RECIPE:
			return {
				...state,
				recipes: null,
				error: null
			};
		case CLEAR_SEARCH:
			return {
				...state,
				searchedRecipes: [],
				error: null
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case UPDATE_RECIPE:
			return {
				...state,
				recipes: state.recipes.map((recipe) =>
					recipe._id === action.payload._id ? action.payload : recipe
				)
			};
		case RECIPE_ERROR:
			return {
				...state,
				error: action.payload
			};
		case LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
