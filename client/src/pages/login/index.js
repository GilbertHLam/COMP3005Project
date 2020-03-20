import React from "react";
import "./styles.css";
import {
	Typography,
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";
import { login } from "../../utils/apiCalls";

const Login = props => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [showDialog, setShowDialog] = React.useState(false);

	const onLoginClick = role => {
		const body = {
			role,
			username,
			password
		};

		login(body)
			.then(res => {
				return res.json();
			})
			.then(response => {
				console.log(response);
				setTimeout(() => {
					window.location.href = "http://localhost:3000/browse";
				}, 500);
			})
			.catch(err => {
				setShowDialog(true);
			});
	};

	return (
		<div className="login">
			<Dialog open={showDialog} onClose={() => setShowDialog(false)}>
				<DialogTitle id="alert-dialog-title">
					{"Login Failed!"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<p>Username or password incorrect.</p>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => setShowDialog(false)}
						color="primary"
					>
						Okay
					</Button>
				</DialogActions>
			</Dialog>
			<div className="center">
				<Typography variant="h1">Look Inna Book</Typography>
				<form>
					<TextField
						required
						id="login"
						label="User Name"
						defaultValue=""
						value={username}
						onChange={event => setUsername(event.target.value)}
					/>
					<br></br>
					<TextField
						required
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
					<div className="buttonContainer">
						<Button variant="contained" color="primary" onClick={() => onLoginClick("Buyer")}>
							Login as buyer
						</Button>
						<Button variant="contained" color="secondary" onClick={() => onLoginClick("Seller")}>
							Login as seller
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
