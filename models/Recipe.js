const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	ingredients: {
		type: Array,
		trim: true,
		required: [true, 'Please add the ingredients']
	},
	recipeName: {
		type: String,
		trim: true,
		required: [true, 'Please enter a name']
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
