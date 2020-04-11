import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		password2: ''
	});

	const { email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const authContext = useContext(AuthContext);
	const { register, isAuthenticated, error } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'User already exists') {
			alert('User already exists');
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const onSubmit = (e) => {
		e.preventDefault();
		register({ email, password });
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="email"
						value={email}
						placeholder="Enter email"
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						value={password}
						placeholder="Enter a password"
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password2"
						value={password2}
						placeholder="Confirm password"
						onChange={onChange}
					/>
				</div>
				<small>
					Passwords must be a length of 6 or greater, one capital and one
					special character(!@#$%^&*).
				</small>
				<input type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Register;
