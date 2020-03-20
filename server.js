const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const Promise = require("bluebird");
const bcrypt = require("bcrypt");

class DatabaseConnector {
	constructor(dbFilePath) {
		this.db = new sqlite3.Database(dbFilePath, err => {
			if (err) {
				console.log("Could not connect to database", err);
			} else {
				console.log("Connected to database");
			}
		});
	}

	run(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.run(sql, params, function(err) {
				if (err) {
					console.log("Error running sql " + sql);
					console.log(err);
					reject(err);
				} else {
					resolve({ id: this.lastID });
				}
			});
		});
	}

	get(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.get(sql, params, (err, result) => {
				if (err) {
					console.log("Error running sql: " + sql);
					console.log(err);
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}

const databaseConnector = new DatabaseConnector("./database.db");

const app = express();
const port = process.env.PORT || 5000;

const saltRounds = 10;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, authorization"
	);
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, DELETE"
	);
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
	console.log(req.body);
	const { username, email, password, role } = req.body;
	bcrypt.hash(password, saltRounds).then(hash => {
		databaseConnector
			.run(
				"INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)",
				[
					email.toLowerCase(),
					username.toLowerCase(),
					hash,
					role.toLowerCase()
				]
			)
			.then(value => {
				console.log(value);
				res.send({ message: "Registration Successful" });
			})
			.catch(err => {
				console.log(err);
				res.status(400).send("Registration Failed");
			});
	});
});

app.post("/login", (req, res) => {
	console.log(req.body);
	const { username, password, role } = req.body;
	databaseConnector
		.get("SELECT password FROM users WHERE username = ? AND role = ?", [
			username.toLowerCase(),
			role.toLowerCase()
		])
		.then(value => {
			bcrypt
				.compare(password, value.password)
				.then(result => {
					if (result == true) {
						res.send({
							message: "Login Successful",
							username: username
						});
					} else {
						res.status(400).send("Login Failed");
					}
				})
				.catch(err => {
					res.status(400).send("Login Failed");
				});
		});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
