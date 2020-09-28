import React, { useState } from "react";
import "../static/navbar.css";

function NavbarContainer() {
	
	// this is a hook, it adds "state" to a functional component
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	// flip state
	const handleNavCollapse = () => {
		setIsNavCollapsed(!isNavCollapsed)
	};


	return (
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<a class="navbar-brand mr-auto" href="/">
				Home
			</a>
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
			<div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="/Examples">
							Examples
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/Library">
							Library
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/login">
							Login
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavbarContainer;
