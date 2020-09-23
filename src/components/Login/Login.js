import React, { useState } from "react";
import logo2 from "../../images/logo2.png";

const Login = () => {
	const [showLogin, setShowLogin] = useState(true);

	const handleLoginFrom = () => {
		setShowLogin(!showLogin);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="rd-signup text-center">
			<div className="container">
				<div className="rd-form-logo">
					<img src={logo2} alt="" />
				</div>
				<form className="rd-form py-5" onSubmit={handleFormSubmit}>
					{showLogin && (
						<div className="form-group">
							<input type="text" className="form-control" name="name" placeholder="Name" />
						</div>
					)}
					<div className="form-group">
						<input type="email" className="form-control" name="email" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" name="password" placeholder="Password" />
					</div>
					{showLogin && (
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								name="confirmPassword"
								placeholder="Confirm password"
							/>
						</div>
					)}
					<button className="btn btn-danger rd-primary">{showLogin ? "Sign up" : "Login"}</button>
					<button className="btn" onClick={handleLoginFrom}>
						Already have a account
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
