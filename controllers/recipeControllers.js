const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res, next) => {
	res.send('get recipes');
};

exports.addRecipes = async (req, res, next) => {
	res.send('add recipes');
};

exports.deleteRecipes = async (req, res, next) => {
	res.send('delete recipes');
};

exports.editRecipes = async (req, res, next) => {
	res.send('edit recipes');
};
