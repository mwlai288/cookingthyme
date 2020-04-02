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
	const { register, isAuthenticated } = authContext;

	useEffect(() => {
		console.log(isAuthenticated);
	}, [isAuthenticated]);

	const onSubmit = (e) => {
		e.preventDefault();
		register({ email, password });
	};

	return (
		<div>
			<div>
				<div>
					Sign Up
					<form onSubmit={onSubmit}>
						<input
							type="text"
							name="email"
							value={email}
							placeholder="Enter email"
							onChange={onChange}
						/>
						<input
							type="password"
							name="password"
							value={password}
							placeholder="Enter a password"
							onChange={onChange}
						/>
						<input
							type="password"
							name="password2"
							value={password2}
							placeholder="Confirm password"
							onChange={onChange}
						/>
						<small>
							Passwords must be a length of 6 or greater, one capital and one
							special character(!@#$%^&*).
						</small>
						{/* <button onClick={props.showModal}>Sign Up</button> */}
						<input type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
