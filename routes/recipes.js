const express = require('express');
const router = express.Router();
const {
	getRecipes,
	addRecipes,
	deleteRecipes,
	editRecipes
} = require('../controllers/recipeControllers');

router
	.route('/')
	.get(getRecipes)
	.post(addRecipes);
router
	.route('/:id')
	.put(editRecipes)
	.delete(deleteRecipes);

module.exports = router;
