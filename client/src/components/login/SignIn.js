import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const SignIn = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const authContext = useContext(AuthContext);
	const { login, isAuthenticated } = authContext;

	useEffect(() => {
		console.log(isAuthenticated);
	}, [isAuthenticated]);

	const onSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<div>
			<div>
				<div>
					Sign In
					<form onSubmit={onSubmit}>
						<input
							type="text"
							name="email"
							value={email}
							placeholder="Enter email"
							onChange={onChange}
							required
						/>
						<input
							type="password"
							name="password"
							value={password}
							onChange={onChange}
							placeholder="Enter a password"
							required
						/>
						<button>Sign In</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
