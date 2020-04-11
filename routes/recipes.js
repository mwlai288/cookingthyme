const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const upload = require('../config/fileDB');
const Recipe = require('../models/Recipe');

// @route   GET api/recipes
// @desc    Get all users recipes
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const recipes = await Recipe.find({ user: req.user.id });
		res.json(recipes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST api/recipes
// @desc    Post a recipe
// @access  Private
router.post('/', auth, async (req, res) => {
	const { recipeName, ingredients, instructions } = req.body;

	try {
		const newRecipe = new Recipe({
			recipeName,
			ingredients,
			instructions,
			user: req.user.id
		});

		const recipe = await newRecipe.save();

		res.json(recipe);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST api/recipes
// @desc    Post the photo file
// @access  Private
// router.post('/', [auth, upload.single('file')], (req, res) => {
// 	res.json({ file: req.file });
// });

// @route   PUT api/users
// @desc    Edit a recipe
// @access  Private
router.put('/:id', auth, async (req, res) => {
	const { recipeName, ingredients, instructions, photo } = req.body;
	const recipeId = req.params.id;
	// Build recipe object
	const recipeFields = {};
	if (recipeName) recipeFields.recipeName = recipeName;
	if (ingredients) recipeFields.ingredients = ingredients;
	if (instructions) recipeFields.instructions = instructions;
	// if (photo) recipeFields.photo = photo;

	try {
		let recipe = await Recipe.findById(recipeId);

		if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

		// Make sure user owns recipe
		if (recipe.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		recipe = await Recipe.findByIdAndUpdate(
			recipeId,
			{ $set: recipeFields },
			{ new: true }
		);

		res.json(recipe);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   DELETE api/users
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', auth, async (req, res) => {
	const recipeId = req.params.id;
	try {
		let recipe = await Recipe.findById(recipeId);

		if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

		// Make sure user owns recipe
		if (recipe.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		await Recipe.findByIdAndRemove(recipeId);

		res.json({ msg: 'Recipe removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
