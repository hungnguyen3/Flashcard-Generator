import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState(oldState => {
			oldState[name] = value;
			return oldState;
		});
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="d-flex justify-content-center mt-5">
				<form onSubmit={this.handleSubmit} className="form-group">
					<div className="mt-3 mb-5">
						<h3 className="d-flex justify-content-center">Sign in</h3>
					</div>
					<div className="mt-3">
						<input
							className="form-control"
							placeholder="Username"
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
							name="username"
						/>
					</div>
					<div className="mt-3">
						<input
							className="form-control"
							placeholder="Password"
							type="password"
							value={this.state.value}
							onChange={this.handleChange}
							name="password"
						/>
					</div>
					<div className="mt-2">
						<input
							type="submit"
							value="Login"
							className="btn btn-primary btn-block"
						/>
					</div>
					<div className="mt-4">
						<Link to="/lostpassword"> Forgot Your Password?</Link>
					</div>
					<hr className="mt-3" />
					<div className="mt-2 md-auto">
						<p>
							Don't have an account?
							<Link to="/CreateAccount"> Create an account</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
