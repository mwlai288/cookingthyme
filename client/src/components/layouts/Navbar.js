import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipe/recipeContext';

const Navbar = ({ toggleHamburger }) => {
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
					<span>Logout</span>
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
		<nav className="navbar">
			<h1 className="navbar__title">
				<Link to="/">Home</Link>
			</h1>
			<div onClick={toggleHamburger} href="#" className="navbar__hamburger">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			<div className="navbar__links">
				<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
			</div>
		</nav>
	);
};

export default Navbar;
