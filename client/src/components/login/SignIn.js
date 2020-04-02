import React from 'react';

const SignIn = (props) => {
	return (
		<div>
			<div>
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

export default SignIn;
