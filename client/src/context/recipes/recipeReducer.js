import {
	ADD_RECIPE,
	DELETE_RECIPE,
	UPDATE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};
		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter((recipe) => recipe.id !== action.payload)
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
					recipe.id === action.payload.id ? action.payload : recipe
				)
			};
		default:
			return state;
	}
};
