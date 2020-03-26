const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	recipeName: {
		type: String,
		trim: true,
		required: [true, 'Please enter a name']
	},
	ingredients: {
		type: String,
		trim: true,
		required: [true, 'Please add the ingredients']
	},
	instructions: {
		type: String,
		trim: true,
		required: [true, 'Please enter instructions']
	},
	photo: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model('Recipe', RecipeSchema);
