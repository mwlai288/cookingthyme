const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
	try {
		const recipes = await Recipe.find();
		return res.status(200).json({
			success: true,
			count: recipes.length,
			data: recipes
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'server error'
		});
	}
};

exports.addRecipes = async (req, res) => {
	try {
		const { ingredients, recipeName, instructions, photo } = req.body;

		const recipe = await Recipe.create(req.body);

		return res.status(201).json({
			success: true,
			data: recipe
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const messages = Object.values(error.errors).map((val) => val.message);
			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(400).json({
				success: false,
				error: 'user error. one or more required fields are empty'
			});
		}
	}
};

exports.deleteRecipes = async (req, res) => {
	try {
		const recipe = await Recipe.findById(req.params.id);
		if (!recipe) {
			return res.status(404).json({
				success: false,
				error: 'No recipe found'
			});
		}
		await recipe.remove();
		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'server error'
		});
	}
};

exports.editRecipes = async (req, res) => {
	const { ingredients, recipeName, instructions, photo } = req.body;
	const id = req.params.id;

	const recipeFields = {};

	if (ingredients) recipeFields.ingredients = ingredients;
	if (recipeName) recipeFields.recipeName = recipeName;
	if (instructions) recipeFields.instructions = instructions;
	if (photo) recipeFields.photo = photo;

	try {
		let recipe = await Recipe.findById(id);
		if (!recipe) res.status(404).json({ msg: 'Recipe not found' });
		recipe = await Recipe.findByIdAndUpdate(id, { $set: recipeFields });
		res.json(recipe);
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'server error'
		});
	}
};
