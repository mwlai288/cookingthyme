import React from 'react';

const Login = (props) => {
	return (
		<div className="modal" id="modal">
			<div className="modal__body">
				<div className="signup">
					Sign Up
					<form>
						<input type="text" name="email" placeholder="Enter email" />
						<input
							type="password"
							name="password"
							placeholder="Enter a password"
						/>
						<input
							type="password"
							name="password2"
							placeholder="Confirm password"
						/>
						<small>
							Passwords must be a length of 6 or greater, one capital and one
							special character(!@#$%^&*).
						</small>
						<button onClick={props.showModal}>Sign Up</button>
					</form>
				</div>
				<div className="signin">
					Sign In
					<form>
						<input type="text" name="email" placeholder="Enter email" />
						<input
							type="password"
							name="password"
							placeholder="Enter a password"
						/>
						<button onClick={props.showModal}>Sign In</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
