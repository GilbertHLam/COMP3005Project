const register = body => {
	console.log(body);
	return fetch("http://localhost:5000/register", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
};

const login = body => {
	console.log(body);
	return fetch("http://localhost:5000/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
};

export { register, login };
