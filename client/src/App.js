import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeSearchPage from './components/searches/HomeSearchPage';
// import RecipeItems from './components/searches/RecipeItems';
import RecipeInfo from './components/searches/RecipeInfo';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

import RecipeState from './context/recipe/RecipeState';
import AuthState from './context/auth/AuthState';

import Navbar from './components/layouts/Navbar';
import setAuthToken from './utils/setAuthToken';
import SideDrawer from './components/layouts/SideDrawer';
// import LogOrReg from './components/auth/LogOrReg';
import Overlay from './components/auth/Overlay';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	const [visible, setVisible] = useState(false);

	const toggleHamburger = () => {
		setVisible((visible) => !visible);
	};

	return (
		<AuthState>
			<RecipeState>
				<Router>
					<div style={{ height: '100%' }}>
						<Navbar toggleHamburger={toggleHamburger} />
						{visible && <SideDrawer toggleHamburger={toggleHamburger} />}
						<Switch>
							{/* <Route exact path="/register" component={Register} />
							<Route exact path="/login" component={SignIn} /> */}
							<Route exact path="/login" component={Overlay} />
							<PrivateRoute exact path="/" component={Dashboard} />
							<PrivateRoute exact path="/search" component={HomeSearchPage} />
							<PrivateRoute exact path="/meal/:id" component={RecipeInfo} />
						</Switch>
					</div>
				</Router>
			</RecipeState>
		</AuthState>
	);
};

export default App;
