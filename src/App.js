import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer";
import Examples from "./components/Examples";
import Main from "./components/Main";
import Library from "./components/Library";
import Login from "./components/Login";

function App() {
	return (
		<React.Fragment>
			<NavbarContainer />
			<Switch>
				<Route exact path="/" component={Main}></Route>
				<Route path="/Library" component={Library}></Route>
				<Route path="/Examples" component={Examples}></Route>
				<Route path="/Login" component={Login}></Route>
			</Switch>
		</React.Fragment>
	);
}

export default App;
