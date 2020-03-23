const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	recipeName: {
		type: String,
		trim: true,
		required: [true, 'Please enter a name']
	},
	ingredients: {
		type: Array,
		trim: true,
		required: [true, 'Please add the ingredients']
	},
	instructions: {
		type: Array,
		trim: true,
		required: [true, 'Please enter instructions']
	},
	photo: {
		type: String,
		trim: true
	}
});
module.exports = mongoose.model('Recipe', RecipeSchema);
