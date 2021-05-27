import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function Login() {
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const login = () => {
		axios({
			method: "POST",
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url: "http://localhost:4000/login",
		}).then((res) => console.log(res));
	};

	return (
		<div>
			<div>
				<h1>Login</h1>
				<input placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
				<input placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
				<button onClick={login}>
					<Link to="/inventory">Submit</Link>
				</button>
			</div>
		</div>
	);
}

export default Login;
