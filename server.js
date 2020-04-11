const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();
app.use(express.json());

const auth = require('./routes/auth');
const recipes = require('./routes/recipes');
const users = require('./routes/users');

app.use('/api/recipes', recipes);
app.use('/api/auth', auth);
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
