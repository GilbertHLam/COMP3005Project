import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
	return (
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
				</Switch>
			</ThemeProvider>
		</Router>
	);
}

export default App;
