import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { StateProvider } from "./state";
import theme from "./theme";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Browse from "./pages/browse";
import Manage from "./pages/manage";

function App() {
	return (
		<StateProvider>
			<Router>
				<ThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/browse">
							<Browse />
						</Route>
						<Route path="/manage">
							<Manage />
						</Route>
					</Switch>
				</ThemeProvider>
			</Router>
		</StateProvider>
	);
}

export default App;
