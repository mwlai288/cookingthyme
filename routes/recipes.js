const express = require('express');

const router = express.Router();

// @route   GET api/recipes
// @desc    Get all users recipes
// @access  Private
router.get('/', (req, res) => {
	res.send('RGet all recipes');
});

// @route   POST api/users
// @desc    Post a recipe
// @access  Private
router.post('/', (req, res) => {
	res.send('Add new recipe');
});

// @route   PUT api/users
// @desc    Edit a recipe
// @access  Private
router.put('/:id', (req, res) => {
	res.send('edit recipe');
});

// @route   DELETE api/users
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', (req, res) => {
	res.send('delete recipe');
});

module.exports = router;
