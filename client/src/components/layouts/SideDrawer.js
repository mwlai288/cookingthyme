import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipe/recipeContext';

const SideDrawer = ({ toggleHamburger }) => {
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
		<nav className="side-drawer">
			<div onClick={toggleHamburger} className="side-drawer__hamburger">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			<div className="side-drawer__links">
				<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
			</div>
		</nav>
	);
};

export default SideDrawer;
