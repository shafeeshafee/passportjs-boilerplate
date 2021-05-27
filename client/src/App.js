import { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Inventory from "./components/Inventory";
import NotLoggedIn from "./components/NotLoggedIn";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
	const [data, setData] = useState(null);

	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:4000/user",
		}).then((res) => {
			setData(res.data);
			console.log(res.data);
		});
	};

	return (
		<div className="App">
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/inventory">
				<Inventory data={data} getUser={getUser} />
			</Route>
		</div>
	);
}

export default App;
