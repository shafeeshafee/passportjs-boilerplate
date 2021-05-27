function Inventory({ data, username, getUser }) {
	return (
		<div>
			<p>Welcome back {username}!</p>
			<button onClick={getUser}>Proceed</button>
			<div>{data ? <h1>Inventory available</h1> : <h1>Nothing to show</h1>}</div>
		</div>
	);
}

export default Inventory;
