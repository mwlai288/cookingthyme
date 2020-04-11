import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Recipes from '../recipes/Recipes';
import RecipeForm from '../recipes/RecipeForm';

const Dashboard = () => {
	return (
		<Fragment>
			<Link to="/search">
				<button>Search for Recipes</button>
			</Link>
			<div className="grid-2">
				<div>
					<RecipeForm />
				</div>
				<div>
					<Recipes />
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
