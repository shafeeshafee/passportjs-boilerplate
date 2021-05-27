import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
	const [registerUsername, setRegisterUsername] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	const register = () => {
		axios({
			method: "POST",
			data: {
				username: registerUsername,
				password: registerPassword,
			},
			withCredentials: true,
			url: "http://localhost:4000/register",
		}).then((res) => console.log(res));
	};

	return (
		<div>
			<div>
				<h1>Register</h1>
				<input placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
				<input placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
				<button onClick={register}>Submit</button>
			</div>
		</div>
	);
}

export default Register;
