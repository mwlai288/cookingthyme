import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Overlay = () => {
	const [registerActive, setRegisterActive] = useState(false);

	const onClick = () => {
		setRegisterActive((registerActive) => !registerActive);
	};

	return (
		<div className={`container ${registerActive ? 'right-panel-active' : ''}`}>
			<Login />
			<Register />
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>
							To keep connected with us please login with your personal info
						</p>
						<button onClick={onClick} className="ghost">
							Sign In
						</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button onClick={onClick} className="ghost">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
