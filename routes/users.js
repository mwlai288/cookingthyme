const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
	'/',
	[
		check('email', 'Please include a valide email').isEmail(),
		check(
			'password',
			'Please enter password with 6 or more characters, 1 capital letter and 1 symbol'
		)
			.isLength({ min: 6 })
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
			)
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) return res.status(400).json({ msg: 'User already exists' });

			user = new User({
				email,
				password
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				process.env.jwtSecret,
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).json({ msg: 'Server error' });
		}
	}
);

module.exports = router;
