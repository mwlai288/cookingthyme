import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import RecipeContext from '../context/recipe/recipeContext';

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const recipeContext = useContext(RecipeContext);
	const { isAuthenticated, logout, loadUser } = authContext;
	const { clearRecipes, clearSearch } = recipeContext;

	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	const onLogout = () => {
		logout();
		clearRecipes();
		clearSearch();
	};

	const authLinks = (
		<Fragment>
			<li>
				<span>
					<Link to="/">Home</Link>
				</span>
				<a onClick={onLogout} href="#!">
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<Link to="/">Home</Link>
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

export default Navbar;
