import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const SignIn = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const authContext = useContext(AuthContext);
	const { login, isAuthenticated, error } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'Invalid Credentials') {
			alert('Invalid Credentials');
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const onSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<div className="form-container signin-container">
			<form onSubmit={onSubmit}>
				<h1>Account Login</h1>
				<input
					id="email"
					type="email"
					name="email"
					value={email}
					onChange={onChange}
					placeholder="Enter Email"
					required
				/>

				<input
					id="password"
					type="password"
					name="password"
					value={password}
					onChange={onChange}
					placeholder="Enter password"
					required
				/>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default withRouter(SignIn);
