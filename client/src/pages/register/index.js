import React from "react";
import "./styles.css";
import {
	Typography,
	Button,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from "@material-ui/core";
import { register } from "../../utils/apiCalls";
import { emailRegex, passwordRegex } from "../../utils/regexRules";

const Register = props => {
	const [role, setRole] = React.useState("Buyer");
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [registrationSuccess, setRegistrationSuccess] = React.useState(
		"null"
	);
	const [showDialog, setShowDialog] = React.useState(false);
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);

	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleRoleChange = event => {
		setRole(event.target.value);
	};

	const handleEmailChange = event => {
		setEmail(event.target.value);
	};

	const handleUsernameChange = event => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
	};

	const onRegisterClick = () => {
		const body = {
			username,
			password,
			role,
			email
		};

		if (
			email.match(emailRegex) &&
			role &&
			password.match(passwordRegex) &&
			username.length >= 6
		) {
			register(body)
				.then(res => {
					return res.json();
				})
				.then(response => {
					console.log(response);
					setRegistrationSuccess("true");
					setTimeout(() => {
						window.location.href = "http://localhost:3000";
					}, 2000);
				})
				.catch(err => {
					setRegistrationSuccess("false");
				});
		}
		setShowDialog(true);
	};

	return (
		<div className="register">
			<Dialog open={showDialog} onClose={() => setShowDialog(false)}>
				<DialogTitle id="alert-dialog-title">
					{registrationSuccess === "true"
						? "Registration Sucessful!"
						: "Error registering account"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{!email.match(emailRegex) ? (
							<p>Please enter a valid email</p>
						) : null}
						{!password.match(passwordRegex) ? (
							<p>
								Please make sure your password contains atleast
								one letter, one number and is longer than 6
								characters
							</p>
						) : null}
						{username.length < 6 ? (
							<p>
								Please make sure your username is longer than 6
								characters
							</p>
						) : null}
						{registrationSuccess === "true" ? (
							<p>
								Registration Successful! Redirecting you to
								homepage....
							</p>
						) : null}
						{registrationSuccess === "false" ? (
							<p>
								Username already taken! Please choose another
								username.
							</p>
						) : null}
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
						id="email"
						label="Email"
						defaultValue=""
						value={email}
						onChange={handleEmailChange}
					/>
					<br></br>
					<TextField
						required
						id="login"
						label="User Name"
						defaultValue=""
						value={username}
						onChange={handleUsernameChange}
					/>
					<br></br>
					<TextField
						required
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={password}
						onChange={handlePasswordChange}
						helperText="Must contain a number and be longer than 6 characters"
					/>
					<br></br>
					<FormControl>
						<InputLabel ref={inputLabel} id="role">
							Role
						</InputLabel>
						<Select
							labelId="role"
							id="role"
							value={role}
							onChange={handleRoleChange}
							labelWidth={labelWidth}
						>
							<MenuItem value="Buyer">Buyer</MenuItem>
							<MenuItem value="Seller">Seller</MenuItem>
						</Select>
					</FormControl>
					<div className="buttonContainer">
						<Button
							variant="contained"
							color="primary"
							onClick={onRegisterClick}
						>
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Register;
