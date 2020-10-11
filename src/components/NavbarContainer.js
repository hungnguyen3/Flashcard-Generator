import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/navbar.css";

function NavbarContainer() {
	// this is a hook, it adds "state" to a functional component
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	// setIsNavCollapsed is equivalent to State
	// isNavCollapsed is a state variable

	// setState = [variable1]
	// setIsNavCollapsed = [isNavCollapsed]

	// flip state
	const handleNavCollapse = () => {
		setIsNavCollapsed(!isNavCollapsed);
		// setState(the opossite of isNavCollapsed) (e.g. !True === not True)
	};

	return (
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<Link class="navbar-brand mr-auto" to="/">
				Home
			</Link>
			<button
				class="navbar-toggler ml-auto"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				onClick={handleNavCollapse}
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			{/* renders the nav bar according to the state */}
			<div
				class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
				id="navbarNav"
			>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<Link class="nav-link" to="/Examples">
							Examples
						</Link>
					</li>
					<li class="nav-item">
						<Link className="nav-link" to="/Library">
							Library
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/login">
							Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavbarContainer;
